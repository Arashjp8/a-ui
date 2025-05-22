import type { Meta, StoryObj } from "@storybook/react";
import LoadingSpinner from "./LoadingSpinner";

const meta: Meta<typeof LoadingSpinner> = {
    title: "Components/LoadingSpinner",
    component: LoadingSpinner,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large", "xlarge", "xxlarge"],
        },
        color: {
            control: { type: "select" },
            options: ["primary", "onPrimary", "error", "success"],
        },
    },
};

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {
    args: {},
};

export const LargeError: Story = {
    args: {
        size: "large",
        color: "error",
    },
};

export const CustomClass: Story = {
    args: {
        size: "xlarge",
        color: "success",
        className: "border border-dashed border-gray-400 p-4",
    },
};
