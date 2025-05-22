import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type Variant = "contained" | "outlined" | "text";
export type Size = "small" | "medium" | "large";
export type Color = "primary" | "success" | "error" | "info";

// pre-compute once
const COLOR_MAP: Record<Color, Record<Variant, Record<"border" | "bg" | "hover" | "active" | "text", string>>> = {
    primary: {
        contained: {
            border: "border-primary",
            bg: "bg-primary",
            hover: "hover:bg-primary-hover",
            active: "active:bg-primary-800",
            text: "text-on-primary",
        },
        outlined: {
            border: "border-primary",
            text: "text-primary",
            hover: "hover:bg-primary-container",
            bg: "",
            active: "",
        },
        text: {
            bg: "",
            border: "",
            text: "text-primary",
            hover: "hover:text-primary-hover",
            active: "",
        },
    },
    success: {
        contained: {
            border: "border-success",
            bg: "bg-success",
            hover: "hover:bg-success-hover",
            active: "active:bg-success-800",
            text: "text-on-success",
        },
        outlined: {
            border: "border-success",
            text: "text-success",
            hover: "hover:bg-success-container",
            bg: "",
            active: "",
        },
        text: {
            bg: "",
            border: "",
            text: "text-success",
            hover: "hover:text-success-hover",
            active: "",
        },
    },
    error: {
        contained: {
            border: "border-error",
            bg: "bg-error",
            hover: "hover:bg-error-hover",
            active: "active:bg-error-800",
            text: "text-on-error",
        },
        outlined: {
            border: "border-error",
            text: "text-error",
            hover: "hover:bg-error-container",
            bg: "",
            active: "",
        },
        text: {
            bg: "",
            border: "",
            text: "text-error",
            hover: "hover:text-error-hover",
            active: "",
        },
    },
    info: {
        contained: {
            border: "border-info",
            bg: "bg-info",
            hover: "hover:bg-info-hover",
            active: "active:bg-info-800",
            text: "text-on-info",
        },
        outlined: {
            border: "border-info",
            text: "text-info",
            hover: "hover:bg-info-container",
            bg: "",
            active: "",
        },
        text: {
            bg: "",
            border: "",
            text: "text-info",
            hover: "hover:text-info-hover",
            active: "",
        },
    },
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: Variant;
    size?: Size;
    fullWidth?: boolean;
    color?: Color;
    customColor?: boolean;
}

export default function Button({
    children,
    variant = "contained",
    size = "medium",
    fullWidth = false,
    color = "primary",
    customColor = false,
    className,
    ...props
}: ButtonProps) {
    const styles = COLOR_MAP[color][variant];

    return (
        <button
            className={clsx(
                "group relative overflow-hidden rounded-md font-medium transition-all duration-300 focus:outline-none cursor-pointer",
                "inline-flex items-center justify-center",
                fullWidth && "w-full",
                // variant styling
                !customColor &&
                variant === "contained" && [
                    styles.border,
                    styles.bg,
                    styles.text,
                    styles.hover,
                    styles.active,
                    "shadow-md",
                ],
                !customColor && variant === "outlined" && ["border", styles.border, styles.text, styles.hover],
                !customColor && variant === "text" && [styles.text, styles.hover],
                // size
                size === "small" && "px-6 py-2 text-base",
                size === "medium" && "px-8 py-2 text-lg",
                size === "large" && "px-12 py-3 text-xl",
                className,
            )}
            disabled={props.disabled}
            {...props}
        >
            {!customColor && (
                <span className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
            )}

            {children}
        </button>
    );
}
