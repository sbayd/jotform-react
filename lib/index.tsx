import React, { useState, useEffect, useRef } from 'react';

interface JotFormEmbedProps extends React.ComponentProps<'iframe'> {
  formURL: string;
  autoResize?: boolean;
  autoFocus?: boolean;
  heightOffset?: number;
  initialHeight?: number;
  onSubmit?: () => void;
  style?: React.CSSProperties;
}

const JotFormEmbed = ({
  formURL,
  autoResize = true,
  autoFocus = true,
  heightOffset = 20,
  initialHeight = 540,
  style = {},
  onSubmit = () => {
    // do nothing
  },
  ...others
}: JotFormEmbedProps) => {
  const ifr = useRef<HTMLIFrameElement>(null);
  const [componentStyles, setComponentStyles] = useState({
    height: initialHeight,
    overflow: 'hidden',
    border: 0,
    width: '100%',
  });

  useEffect(() => {
    if (!ifr?.current) {
      return;
    }
    if (!ifr.current.src) {
      ifr.current.src = formURL + '?isIframeEmbed=1';
    }
    const formID = formURL.substring(formURL.lastIndexOf('/') + 1);

    const handleMessages = (content: MessageEvent) => {
      if (!content) {
        return;
      }
      // console.log(content);
      // Check if submission is completed.
      if (typeof content.data === 'object' && content.data.action === 'submission-completed') {
        onSubmit();
        return;
      }

      // From now on we only handle style related messages
      if (typeof content.data !== 'string') {
        return;
      }
      const [method, value, targetForm] = content.data.split(':');
      if (formID && targetForm && targetForm != formID) {
        return;
      }

      switch (true) {
        case method === 'scrollIntoView' && autoFocus:
          if (typeof ifr.current?.scrollIntoView === 'function') {
            ifr.current.scrollIntoView();
          }
          break;
        case method === 'setHeight' && autoResize:
          setComponentStyles({ ...componentStyles, height: parseInt(value, 10) + heightOffset });
          break;
        case method === 'reloadPage':
          try {
            window.location.reload();
          } catch (e) {
            console.log('failed to reload', e);
          }
          break;
        default:
          //console.log('unknown message');
          //console.log(content);
          break;
      }
    };

    if (window.addEventListener) {
      window.addEventListener('message', handleMessages, true);
    }
    return () => {
      if (window.removeEventListener) {
        window.removeEventListener('message', handleMessages, true);
      }
    };
  }, [autoFocus, autoResize, componentStyles, formURL, heightOffset, onSubmit]);

  return (
    <iframe
      ref={ifr}
      title="JotForm Form"
      style={{
        ...componentStyles,
        ...style,
      }}
      allowFullScreen
      allow="geolocation; microphone; camera"
      frameBorder="0"
      scrolling="no"
      {...others}
    />
  );
};

export default JotFormEmbed;

export const JotFormReact = JotFormEmbed;
