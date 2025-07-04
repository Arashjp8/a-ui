import LoaderIcon from "../assets/Icons/LoaderIcon";
import Icon from "../Icon/Icon";

export type LoadingColor = "primary" | "onPrimary" | "error" | "onError" | "success" | "onSuccess" | "info" | "onInfo";

interface LoadingSpinnerProps {
    size?: "small" | "medium" | "large" | "xlarge" | "xxlarge";
    color?: LoadingColor;
    className?: string;
}

const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-7 h-7",
    large: "w-10 h-10",
    xlarge: "w-14 h-14",
    xxlarge: "w-18 h-18",
};

const colorClasses = {
    primary: "text-primary",
    onPrimary: "text-on-primary",
    error: "text-error",
    onError: "text-on-error",
    success: "text-success",
    onSuccess: "text-on-success",
    info: "text-info",
    onInfo: "text-on-info",
};

export default function LoadingSpinner({ size = "medium", color = "primary", className = "" }: LoadingSpinnerProps) {
    return (
        <span
            className={"flex justify-center items-center animate-spin"}
            role="status"
            aria-live="polite"
            aria-label="loading"
        >
            <Icon size={"medium"} className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
                <LoaderIcon />
            </Icon>
        </span>
    );
}
