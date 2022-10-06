import React from 'react';
import { ButtonLink } from '../src/ButtonLink.js';

export default {
  title: 'Example/ButtonLink',
  component: ButtonLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ButtonLink {...args} />;

export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  children: 'Submit',
  href: '#',
};
