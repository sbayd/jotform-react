import React from 'react';

import JotFormReact from '../lib/JotFormReact';

export default {
  title: 'JotFormReact',
  component: JotFormReact
};

const Template = args => <JotFormReact {...args} />;

export const ContactForm = Template.bind({});
ContactForm.args = {
  formURL: 'https://form.jotform.com/211272589254055',
  onSubmit: () => {
    console.log('form submitted!');
  }
};
