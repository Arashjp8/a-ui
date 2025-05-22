import type { StorybookConfig } from "@storybook/react-vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
    stories: ["../lib/**/*.mdx", "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        {
            name: "@storybook/addon-essentials",
            options: {
                docs: false,
            },
        },
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    viteFinal: async (config) => {
        config.plugins?.push(
            /** @see https://github.com/aleclarson/vite-tsconfig-paths */
            tsconfigPaths({
                projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
            }),
        );

        return config;
    },
};
export default config;
