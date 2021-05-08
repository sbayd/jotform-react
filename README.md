# JotForm React Embed (jotform-react)

JotForm-React lets you to embed JotForm Forms to your React app. You can use it with all your React-JS projects even with Gatsby / NextJS / Create-React-App projects.

You can create great & flexible forms with [JotForm.com](https://www.jotform.com "JotForm's Homepage")
 and embed them to your website or app in seconds. 

You can use any form fields from JotForm's 300+ field base in your embedded form even advanced fields like signature, take photo, pdf embed.

It supports multiple forms / auto-resize or submit callbacks.

### Simple Usage
```JSX
import JotFormReact 'jotform-react';

const YourApp = () => {
    return (<div>
      ...Your App...
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
    ...Your App...
    <JotFormReact
      formURL="https://form.jotform.com/211272589254055"
      formID="211272589254055" // Required to use multiple forms in same page.
      onSubmit={handleSubmit}
      initialHeight={300} // Form will opens in this size
      autoResize={true} // should form auto-resize
    />
  </div>)
}
```

### Prop List

| Prop          | Default | isRequired              | Description                                                                                                                                                                                                                                 |
|---------------|---------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| formURL       | -       | Yes                     | URL For your JotForm Form.  You can get it from JotForm Form Builder's Publish page. Example: https://form.jotform.com/211272589254055                                                                                                      |
| autoResize    | true    | No                      | If true form will automatically resize if necessary. (ex: multi-page forms) Set to false if you want to close it.                                                                                                                           |
| autoFocus     | true    | No                      | If true form will automatically scroll into view if necessary. Set to false if you want to close it.                                                                                                                                        |
| heightOffset  | 15      | No                      | Number of pixels which will be added to form height to prevent browser-specific scroll issues.                                                                                                                                              |
| initialHeight | 540     | No                      | Number of pixels to specify initial height of the form.                                                                                                                                                                                     |
| formID        | -       | If using multiple forms | If you are planning to use multiple forms in same page you must set this value. You can learn your formID in your JotForm link. After opening Form Builder, Link Format is: jotform.com/build/formID (you can see it in url bar of browser) |
| onSubmit      | -       | No                      | Function, if you want to execute a callback when form submission is succeed.                                                                                                                                                                |
| ...rest       |         | No                      | You can directly set any other prop like style to iframe                                                                                                                                                                                    |



## Contact

Feel free to contact me if you need furhter info.

Sabri Berkay Aydin - (sbayd06@gmail.com), (berkay@jotform.com)