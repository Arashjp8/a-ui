import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "radio",
            options: ["contained", "outlined", "text"],
        },
        size: {
            control: "radio",
            options: ["small", "medium", "large"],
        },
        color: {
            control: "radio",
            options: ["primary", "success", "error", "info"],
        },
        disabled: { control: "boolean" },
        fullWidth: { control: "boolean" },
        customColor: { control: "boolean" },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        variant: "contained",
        size: "medium",
        color: "primary",
        disabled: false,
        fullWidth: false,
        customColor: false,
        loadng: false,
        children: "Button",
    },
    argTypes: {
        loadingSpinner: { table: { disable: true } },
    },
};

export const Contained: Story = {
    args: {
        variant: "contained",
        children: "Contained Button",
    },
    argTypes: {
        loadingSpinner: { table: { disable: true } },
    },
};

export const Outlined: Story = {
    args: {
        variant: "outlined",
        children: "Outlined Button",
    },
    argTypes: {
        loadingSpinner: { table: { disable: true } },
    },
};

export const Text: Story = {
    args: {
        variant: "text",
        children: "Text Button",
    },
    argTypes: {
        loadingSpinner: { table: { disable: true } },
    },
};

export const Disabled: Story = {
    args: {
        variant: "contained",
        disabled: true,
        children: "Disabled Button",
    },
    argTypes: {
        loadingSpinner: { table: { disable: true } },
    },
};

export const FullWidth: Story = {
    args: {
        variant: "contained",
        fullWidth: true,
        children: "Full Width Button",
    },
    argTypes: {
        loadingSpinner: { table: { disable: true } },
    },
};
