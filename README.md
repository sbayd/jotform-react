# Jotform React Embed (jotform-react)

Jotform-React: Seamlessly Embed Jotform Forms in Your React App

Easily integrate Jotform Forms into your React projects, including Gatsby, Next.js, and Create-React-App applications.

Create versatile and customizable forms with [Jotform.com](https://www.jotform.com "Jotform's Homepage") and effortlessly embed them in your website or app.

Unlock the potential of Jotform's extensive selection of over 300 form fields, including advanced options such as signature, image capture, and PDF embedding.

Benefit from features like support for multiple forms, auto-resizing, and submission callbacks.

### Installation
Jotform React Embed is available as an open-source project on [GitHub (jotform-react)](https://github.com/sbayd/jotform-react) and can be installed via [NPM (jotform-react)](https://www.npmjs.com/package/jotform-react)

### Using Pnpm
```
pnpm add jotform-react
```

#### Using YARN
```
yarn add jotform-react
```

#### Using NPM

```
npm install jotform-react
```

### Simple Usage
```JSX
import JotFormReact 'jotform-react';

const YourApp = () => {
    return (<div>
      {/* Your App Content */}
      <JotFormReact
        formURL="https://form.jotform.com/211272589254055"
      />
    </div>)
}

```

### Advanced Usage
```JSX
import JotFormReact 'jotform-react';

const YourApp = () => {
  const handleSubmit = () => {
    alert("Form submit succeed!");
  };
  return (<div>
     {/* Your App Content */}
    <JotFormReact
      formURL="https://form.jotform.com/211272589254055"
      formID="211272589254055" // Required for multiple forms on the same page
      onSubmit={handleSubmit}
      initialHeight={300} // Initial form height
      autoResize={true} // Enable auto-resizing
    />
  </div>)
}
```

### Prop List

| Prop          | Default | Required (if applicable)              | Description                                                                                                                                                                                                                                 |
|---------------|---------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| formURL       | -       | Yes                     | URL The URL of your Jotform Form, obtainable from Jotform Form Builder's Publish page. Example:  Example: https://form.jotform.com/211272589254055                                                                                                      |
| autoResize    | true    | No                      | If true, the form will automatically resize as needed (e.g., for multi-page forms). Set to false to disable auto-resizing.                                                                         |
| autoFocus     | true    | No                      | If true, the form will automatically scroll into view as needed. Set to false to disable this behavior.                                                                                                                                        |
| heightOffset  | 15      | No                      | The number of pixels added to the form's height to prevent browser-specific scroll issues.                                                                                                                                            |
| initialHeight | 540     | No                      | The initial height (in pixels) of the form.
| formID        | -       | Conditional  | Required when using multiple forms on the same page. You can find your formID in the Jotform link, which follows the format jotform.com/build/formID (visible in the browser's URL bar). |
| onSubmit      | -       | No                      | A callback function to execute when the form submission is successful.                                                                                                                                                               |
| ...rest       |         | No                      | You can directly set any other prop, such as styles, to the iframe element                                                                                                                                                                                    |


## Changelog

### 1.1.0

- Improved build system
- React moved to peerDependencies to prevent conflicts
- Transitioned to pnpm from yarn
## Contact

For further information or assistance, please feel free to reach out:

Sabri Berkay Aydin - (sbayd06@gmail.com), (berkay@jotform.com)