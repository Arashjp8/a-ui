import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Switch from "./Switch";

describe("Switch", () => {
    const setup = (checked: boolean, size: "small" | "medium" | "large") => {
        const onChange = vi.fn();
        render(<Switch checked={checked} onChange={onChange} size={size} />);
        const button = screen.getByRole("button");
        return { button, onChange };
    };

    it("renders unchecked switch with correct classes", () => {
        const { button } = setup(false, "medium");
        expect(button).toHaveClass("translate-x-0");
    });

    it("renders checked switch with correct classes", () => {
        const { button } = setup(true, "medium");
        expect(button).toHaveClass("ltr:translate-x-full");
    });

    it("fires onChange with true when unchecked and clicked", () => {
        const { button, onChange } = setup(false, "medium");
        fireEvent.click(button);
        expect(onChange).toHaveBeenCalledWith(true);
    });

    it("fires onChange with false when checked and clicked", () => {
        const { button, onChange } = setup(true, "medium");
        fireEvent.click(button);
        expect(onChange).toHaveBeenCalledWith(false);
    });

    it("applies small size classes", () => {
        const { button } = setup(false, "small");
        expect(button).toHaveClass("w-5", "h-5");
    });

    it("applies medium size classes", () => {
        const { button } = setup(false, "medium");
        expect(button).toHaveClass("w-6", "h-6");
    });

    it("applies large size classes", () => {
        const { button } = setup(false, "large");
        expect(button).toHaveClass("w-7", "h-7");
    });

    it("applies bg-primary when checked", () => {
        render(<Switch checked={true} onChange={() => { }} size="medium" />);
        const container = screen.getByRole("button").parentElement!;
        expect(container).toHaveClass("bg-primary");
    });

    it("applies bg-outline when unchecked", () => {
        render(<Switch checked={false} onChange={() => { }} size="medium" />);
        const container = screen.getByRole("button").parentElement!;
        expect(container).toHaveClass("bg-outline");
    });
});
