import React from 'react';
import { List } from '../src/List.js';
import { ListItem } from '../src/ListItem.js';

export default {
  title: 'Example/List',
  component: List,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <List {...args} />;

export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  children: <ListItem>a list item</ListItem>
};
