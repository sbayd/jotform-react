import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const JotFormEmbed = ({
  formURL,
  autoResize,
  autoFocus,
  heightOffset = 15,
  initialHeight = 540,
  onSubmit,
  formID,
  style = { },
  ...rest
}) => {
  const iframeRef = React.useRef();
  const [componentStyles, setComponentStyles] = React.useState({
    height: initialHeight,
    overflow: 'hidden',
    border: 0,
    width: '100%'
  });

  useEffect(() => {
    const handleMessages = (content) => {
      if (!content) { return; }
      // Check if submission is completed.
      if (typeof content.data === 'object' && content.data.action === 'submission-completed') {
        onSubmit();
        return;
      }

      // From now on we only handle style related messages
      if (typeof content.data !== 'string') { return; }
      const [method, value, targetForm] = content.data.split(':');
      // eslint-disable-next-line eqeqeq
      if (formID && targetForm && targetForm != formID) { // If you want to use multiple form via embed you need to use formID
        return;
      }

      switch (true) {
        case method === 'scrollIntoView' && autoFocus:
          if (typeof iframeRef.current.scrollIntoView === 'function') {
            iframeRef.current.scrollIntoView();
          }
          break;
        case method === 'setHeight' && autoResize:
          setComponentStyles({ ...componentStyles, height: parseInt(value, 10) + heightOffset });
          break;
        case method === 'setMinHeight' && autoResize:
          setComponentStyles({ ...componentStyles, minHeight: parseInt(value, 10) + heightOffset });
          break;
        case method === 'reloadPage':
          try {
            iframeRef.current.contentWindow.location.reload();
          } catch (e) {
            console.log('failed to reload', e);
          }
          break;
        default:
          break;
      }
    };

    if (window.addEventListener) {
      window.addEventListener('message', handleMessages, true); // Capture
    } else if (window.attachEvent) {
      window.attachEvent('onmessage', handleMessages);
    }
    return () => {
      if (window.removeEventListener) {
        window.removeEventListener('message', handleMessages, true);
      }
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={formURL}
      title="JotForm Form"
      style={{
        ...componentStyles,
        ...style
      }}
      allowtransparency="true"
      allowFullScreen="true"
      allow="geolocation; microphone; camera"
      frameBorder="0"
      scrolling="no"
      {...rest}
    />
  );
};

const noop = () => {};


JotFormEmbed.propTypes = {
  formURL: PropTypes.string.isRequired,
  formID: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  autoResize: PropTypes.bool,
  autoFocus: PropTypes.bool,
  heightOffset: PropTypes.number,
  initialHeight: PropTypes.number,
  onSubmit: PropTypes.func,
  style: PropTypes.shape({})
};

JotFormEmbed.defaultProps = {
  autoResize: true,
  formID: false,
  autoFocus: true,
  heightOffset: 15,
  initialHeight: 540,
  onSubmit: noop,
  style: {}
};


export default JotFormEmbed;
