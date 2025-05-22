import { render } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";
import { vi } from "vitest";

// Mock LoaderIcon using Vitest's mocking API
vi.mock("../assets/Icons/LoaderIcon", () => {
    return {
        default: () => <svg data-testid="loader-icon" />,
    };
});

describe("LoadingSpinner", () => {
    it("renders without crashing", () => {
        const { getByTestId } = render(<LoadingSpinner />);
        expect(getByTestId("loader-icon")).toBeInTheDocument();
    });

    it("applies default medium size and primary color", () => {
        const { container } = render(<LoadingSpinner />);
        const wrapper = container.querySelector("span");
        const iconWrapper = wrapper?.querySelector("span > span");

        expect(wrapper?.className).toContain("animate-spin");
        expect(iconWrapper?.className).toContain("w-7");
        expect(iconWrapper?.className).toContain("h-7");
        expect(iconWrapper?.className).toContain("text-primary");
    });

    it("applies specified size and color", () => {
        const { container } = render(<LoadingSpinner size="large" color="error" />);
        const iconWrapper = container.querySelector("span > span");

        expect(iconWrapper?.className).toContain("w-10");
        expect(iconWrapper?.className).toContain("h-10");
        expect(iconWrapper?.className).toContain("text-error");
    });

    it("merges custom className with default classes", () => {
        const { container } = render(<LoadingSpinner className="custom-class" />);
        const iconWrapper = container.querySelector("span > span");

        expect(iconWrapper?.className).toContain("custom-class");
    });
});
