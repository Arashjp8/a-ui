import { render } from "@testing-library/react";
import Icon from "./Icon";

describe("Icon", () => {
    it("renders children correctly", () => {
        const { getByText } = render(
            <Icon>
                <span>Test Icon</span>
            </Icon>,
        );
        expect(getByText("Test Icon")).toBeInTheDocument();
    });

    it("applies default medium size classes", () => {
        const { container } = render(
            <Icon>
                <span>Icon</span>
            </Icon>,
        );
        const wrapper = container.firstChild as HTMLElement;
        expect(wrapper.className).toContain("w-6");
        expect(wrapper.className).toContain("h-6");
    });

    it("applies small size classes when specified", () => {
        const { container } = render(
            <Icon size="small">
                <span>Icon</span>
            </Icon>,
        );
        const wrapper = container.firstChild as HTMLElement;
        expect(wrapper.className).toContain("w-5");
        expect(wrapper.className).toContain("h-5");
    });

    it("applies large size classes when specified", () => {
        const { container } = render(
            <Icon size="large">
                <span>Icon</span>
            </Icon>,
        );
        const wrapper = container.firstChild as HTMLElement;
        expect(wrapper.className).toContain("w-7");
        expect(wrapper.className).toContain("h-7");
    });

    it("merges custom className with default classes", () => {
        const { container } = render(
            <Icon className="text-red-500">
                <span>Icon</span>
            </Icon>,
        );
        const wrapper = container.firstChild as HTMLElement;
        expect(wrapper.className).toContain("text-red-500");
    });
});
