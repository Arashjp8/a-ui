import { render, screen } from "@testing-library/react";
import CircularProgress from "./CircularProgress";

describe("CircularProgress component", () => {
    it("renders without crashing and shows default percentage text", () => {
        render(<CircularProgress progress={42} />);
        // Check if text contains "42.00%"
        expect(screen.getByText("42.00%")).toBeInTheDocument();
    });

    it("renders custom text instead of percentage", () => {
        render(<CircularProgress progress={50} text="Loading..." />);
        expect(screen.getByText("Loading...")).toBeInTheDocument();
        expect(screen.queryByText("50.00%")).toBeNull();
    });

    it("clamps progress below 0 to 0%", () => {
        render(<CircularProgress progress={-10} />);
        expect(screen.getByText("0.00%")).toBeInTheDocument();
    });

    it("clamps progress above 100 to 100%", () => {
        render(<CircularProgress progress={150} />);
        expect(screen.getByText("100.00%")).toBeInTheDocument();
    });

    it("renders different sizes with expected text sizes", () => {
        const { rerender } = render(<CircularProgress progress={10} size="small" />);
        expect(screen.getByText("10.00%")).toHaveClass("text-sm");

        rerender(<CircularProgress progress={10} size="medium" />);
        expect(screen.getByText("10.00%")).toHaveClass("text-4xl");

        rerender(<CircularProgress progress={10} size="large" />);
        expect(screen.getByText("10.00%")).toHaveClass("text-5xl");
    });

    it("applies custom strokeWidth if provided", () => {
        const { container } = render(<CircularProgress progress={30} strokeWidth={20} />);
        // The two circles should have strokeWidth 20, check one circle:
        const circles = container.querySelectorAll("circle");
        expect(circles.length).toBe(2);
        circles.forEach((circle) => {
            expect(circle).toHaveAttribute("stroke-width", "20");
        });
    });

    it("applies custom colors for progress and track", () => {
        const { container } = render(<CircularProgress progress={60} color="text-error" trackColor="stroke-success" />);
        const circles = container.querySelectorAll("circle");

        // Track circle (background) has trackColor class
        expect(circles[0]).toHaveClass("stroke-success");

        // Progress circle has color class
        expect(circles[1]).toHaveClass("text-error");
    });
});
