import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FormErrorSection from "./FormError";

describe("FormErrorSection", () => {
    it("renders the error message correctly", () => {
        const message = "Something went wrong";
        render(<FormErrorSection error={message} />);
        expect(screen.getByText(message)).toBeInTheDocument();
    });

    it("renders the alert icon", () => {
        render(<FormErrorSection error="Test error" />);
        const icon = screen.getByTestId("form-error-icon");
        expect(icon).toBeInTheDocument();
    });

    it("applies correct Tailwind classes", () => {
        const { container } = render(<FormErrorSection error="Error" />);
        const wrapper = container.firstChild as HTMLElement;
        expect(wrapper.className).toContain("bg-error-container");
        expect(wrapper.className).toContain("text-on-error-container");
    });
});
