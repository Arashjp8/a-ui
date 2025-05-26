import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
    title: "Components/Input",
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["text", "email", "password", "number"],
        },
        error: { control: "text" },
        placeholder: { control: "text" },
        label: { control: "text" },
    },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        id: "default",
        placeholder: "Enter text",
        label: "Label",
    },
};

export const WithError: Story = {
    args: {
        id: "with-error",
        placeholder: "Enter email",
        label: "Email",
        error: "This field is required.",
    },
};

export const Password: Story = {
    args: {
        id: "password",
        placeholder: "Enter password",
        label: "Password",
        type: "password",
    },
};

export const NumberInput: Story = {
    args: {
        id: "age",
        placeholder: "Enter your age",
        label: "Age",
        type: "number",
    },
};
