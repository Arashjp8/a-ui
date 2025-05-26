import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
    beforeEach(() => {
        // Reset scroll locking
        document.body.style.overflow = "";
    });

    afterEach(() => {
        document.body.style.overflow = "";
    });

    it("does not render when isOpen is false", () => {
        render(
            <Modal isOpen={false} onClose={() => { }}>
                <div>Modal Content</div>
            </Modal>,
        );
        expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    });

    it("renders when isOpen is true", () => {
        render(
            <Modal isOpen={true} onClose={() => { }}>
                <div>Modal Content</div>
            </Modal>,
        );
        expect(screen.getByText("Modal Content")).toBeInTheDocument();
    });

    it("renders the overlay when open", () => {
        render(
            <Modal isOpen={true} onClose={() => { }}>
                <div>Modal Content</div>
            </Modal>,
        );
        const overlay = screen.getByTestId("modal-overlay");
        expect(overlay).toBeInTheDocument();
    });

    it("calls onClose when overlay is clicked", () => {
        const onClose = vi.fn();
        render(
            <Modal isOpen={true} onClose={onClose}>
                <div>Modal Content</div>
            </Modal>,
        );
        const overlay = document.querySelector("div.bg-black") as HTMLElement;
        fireEvent.click(overlay);
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("calls onClose when Escape key is pressed", () => {
        const onClose = vi.fn();
        render(
            <Modal isOpen={true} onClose={onClose}>
                <div>Modal Content</div>
            </Modal>,
        );
        fireEvent.keyDown(document, { key: "Escape" });
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("disables body scroll when open", () => {
        render(
            <Modal isOpen={true} onClose={() => { }}>
                <div>Modal Content</div>
            </Modal>,
        );
        expect(document.body.style.overflow).toBe("hidden");
    });

    it("restores body scroll when closed", () => {
        const { rerender } = render(
            <Modal isOpen={true} onClose={() => { }}>
                <div>Modal Content</div>
            </Modal>,
        );
        expect(document.body.style.overflow).toBe("hidden");

        rerender(
            <Modal isOpen={false} onClose={() => { }}>
                <div>Modal Content</div>
            </Modal>,
        );

        // Simulate passage of timeout (300ms)
        vi.useFakeTimers();
        expect(document.body.style.overflow).toBe("");
    });
});
