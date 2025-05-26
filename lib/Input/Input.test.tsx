import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input component", () => {
    it("renders with a label", () => {
        render(<Input id="username" label="Username" />);
        expect(screen.getByLabelText("Username")).toBeInTheDocument();
    });

    it("renders without a label", () => {
        render(<Input id="email" />);
        const input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument();
    });

    it("accepts user input", async () => {
        const user = userEvent.setup();
        render(<Input id="email" placeholder="Enter email" />);
        const input = screen.getByPlaceholderText("Enter email");
        await user.type(input, "test@example.com");
        expect(input).toHaveValue("test@example.com");
    });

    it("renders error message when error prop is passed", () => {
        render(<Input id="email" error="Invalid email" />);
        expect(screen.getByText("Invalid email")).toBeInTheDocument();
    });

    it("applies error styling when error is passed", () => {
        render(<Input id="email" error="Invalid email" />);
        const input = screen.getByRole("textbox");
        expect(input).toHaveClass("border-error");
    });
});
