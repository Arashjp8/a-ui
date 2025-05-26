import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Switch, { SwitchProps } from "./Switch";

const meta: Meta<typeof Switch> = {
    title: "Components/Switch",
    component: Switch,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        },
        checked: {
            control: { type: "boolean" },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Switch>;

const ControlledTemplate = (args: Omit<SwitchProps, "onChange">) => {
    const [checked, setChecked] = useState(args.checked);
    return <Switch {...args} checked={checked} onChange={setChecked} />;
};

export const Default: Story = {
    render: (args) => <ControlledTemplate {...args} />,
    args: {
        checked: false,
        size: "medium",
    },
};

export const LargeChecked: Story = {
    render: (args) => <ControlledTemplate {...args} />,
    args: {
        checked: true,
        size: "large",
    },
};

export const SmallUnchecked: Story = {
    render: (args) => <ControlledTemplate {...args} />,
    args: {
        checked: false,
        size: "small",
    },
};
