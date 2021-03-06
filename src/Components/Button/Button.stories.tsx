import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "Components/Button/index.Button";


export default {
  title: "components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ ...args }) => {
  return <Button {...args}></Button>;
};
