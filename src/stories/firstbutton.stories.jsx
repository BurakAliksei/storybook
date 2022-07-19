import React from 'react';
import { myButton } from './firstbutton';

export default {
    title: 'Example/myButton',
    component: myButton,
   
    argTypes: {
      backgroundColor: { control: 'colo' },
    },
  };
  
  const Template = (args) => <myButton {...args} />;
  export const Primary = Template.bind({});
  
  Primary.args = {
    primary: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
};
export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};
