import { render, screen } from "@testing-library/react";
import Button from "./Button";
import type { Variant, Size, Color } from "./Button";
import { describe, it, expect } from "vitest";

const getButton = () => screen.getByRole("button");

describe(`Component: ${Button.name}`, () => {
    it("should render with default props", () => {
        const { container } = render(<Button>My button</Button>);

        expect(container.firstChild).toMatchInlineSnapshot(`
          <button
            class="group relative overflow-hidden rounded-md font-medium transition-all duration-300 focus:outline-none cursor-pointer inline-flex items-center justify-center border-primary bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-800 shadow-md px-8 py-2 text-lg"
          >
            <span
              class="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10"
            />
            My button
          </button>
        `);
    });

    it("respects fullWidth prop", () => {
        render(<Button fullWidth>Full Width</Button>);
        expect(getButton()).toHaveClass("w-full");
    });

    it("applies custom className", () => {
        render(<Button className="custom-class">Custom</Button>);
        expect(getButton()).toHaveClass("custom-class");
    });

    it("renders overlay span when not using customColor", () => {
        render(<Button>Overlay</Button>);
        const button = screen.getByRole("button");

        const overlaySpan = button.querySelector("span");

        expect(overlaySpan).toBeTruthy();
        expect(button.firstChild).toBe(overlaySpan);
        expect(overlaySpan).toBeEmptyDOMElement();
    });

    it("does NOT render overlay span when customColor is true", () => {
        render(<Button customColor>Custom Color</Button>);
        expect(screen.queryByText("Custom Color")?.previousSibling).toBeNull();
    });

    it("respects disabled prop", () => {
        render(<Button disabled>Disabled</Button>);
        expect(getButton()).toBeDisabled();
    });

    const variants: Variant[] = ["contained", "outlined", "text"];
    const colors: Color[] = ["primary", "success", "error", "info"];
    const sizes: Size[] = ["small", "medium", "large"];

    variants.forEach((variant) => {
        it(`applies correct classes for variant=${variant}`, () => {
            render(<Button variant={variant}>Variant {variant}</Button>);
            const btn = getButton();

            if (variant === "contained") {
                // Contained = filled button
                expect(btn).toHaveClass("bg-primary", "text-on-primary", "shadow-md");
            }

            if (variant === "outlined") {
                expect(btn).toHaveClass("border", "text-primary");
                expect(btn).not.toHaveClass("bg-primary"); // shouldn't be filled
            }

            if (variant === "text") {
                expect(btn).not.toHaveClass("border", "shadow-md", "bg-primary");
                expect(btn).toHaveClass("text-primary");
            }
        });
    });

    sizes.forEach((size) => {
        it(`applies correct size class for size=${size}`, () => {
            render(<Button size={size}>Size {size}</Button>);
            const btn = getButton();

            const expectedClasses = {
                small: "px-6 py-2 text-base",
                medium: "px-8 py-2 text-lg",
                large: "px-12 py-3 text-xl",
            };

            expectedClasses[size].split(" ").forEach((cls) => {
                expect(btn).toHaveClass(cls);
            });
        });
    });

    colors.forEach((color) => {
        it(`applies correct color classes for color=${color}`, () => {
            render(<Button color={color}>Color {color}</Button>);
            const btn = getButton();

            // Just checking base color appears somewhere — detailed class map testing is overkill unless you dynamically compute tailwind classes
            expect(btn.className).toMatch(new RegExp(`\\b${color}\\b`, "i"));
        });
    });

    it("renders children correctly", () => {
        render(
            <Button>
                <span>Nested</span>
            </Button>,
        );
        expect(screen.getByText("Nested")).toBeInTheDocument();
    });

    it("passes down arbitrary props", () => {
        render(<Button type="submit">Submit</Button>);
        expect(getButton()).toHaveAttribute("type", "submit");
    });
});

describe(`Component: ${Button.name} loading state`, () => {
    it("renders default LoadingSpinner when loading is true", () => {
        render(<Button loading>Loading</Button>);
        const spinner = screen.getByRole("status"); // assuming LoadingSpinner uses role="status" or add testid if needed
        expect(spinner).toBeInTheDocument();
        expect(screen.queryByText("Loading")).toBeNull(); // children hidden
    });

    it("renders custom loadingSpinner when loading is true and loadingSpinner provided", () => {
        const CustomSpinner = () => <div data-testid="custom-spinner">Custom</div>;
        render(
            <Button loading loadingSpinner={<CustomSpinner />}>
                Loading
            </Button>,
        );

        expect(screen.getByTestId("custom-spinner")).toBeInTheDocument();
        expect(screen.queryByText("Loading")).toBeNull(); // children hidden
    });

    it("renders children when loading is false", () => {
        render(<Button loading={false}>Not Loading</Button>);
        expect(screen.getByText("Not Loading")).toBeInTheDocument();
    });
});
