import type { Meta, StoryObj } from "@storybook/react";
import CircularProgress from "./CircularProgress";

const meta: Meta<typeof CircularProgress> = {
    title: "Components/CircularProgress",
    component: CircularProgress,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        },
        color: {
            control: { type: "text" },
        },
        trackColor: {
            control: { type: "text" },
        },
        progress: {
            control: { type: "number", min: 0, max: 100 },
        },
        text: {
            control: { type: "text" },
        },
        strokeWidth: {
            control: { type: "number", min: 1, max: 50 },
        },
    },
};

export default meta;

type Story = StoryObj<typeof CircularProgress>;

export const Default: Story = {
    args: {
        progress: 65,
    },
};

export const SmallSize: Story = {
    args: {
        progress: 40,
        size: "small",
    },
};

export const LargeSizeWithCustomText: Story = {
    args: {
        progress: 80,
        size: "large",
        text: "Loading...",
    },
};

export const CustomColors: Story = {
    args: {
        progress: 50,
        color: "text-error",
        trackColor: "stroke-success",
    },
};

export const CustomStrokeWidth: Story = {
    args: {
        progress: 75,
        strokeWidth: 15,
    },
};
