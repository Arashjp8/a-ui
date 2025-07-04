import { InputHTMLAttributes, ReactElement } from "react";
import FormErrorSection from "../FormError/FormError";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string | ReactElement;
    error?: string;
    ref?: React.Ref<HTMLInputElement>;
}

export default function Input({ error, label, id, ref, ...props }: Props) {
    return (
        <div className={"flex flex-col gap-2"}>
            {label && (
                <label htmlFor={id} className={"block text-base md:text-xl font-medium"}>
                    {label}
                </label>
            )}
            <input
                id={id}
                name={id}
                ref={ref}
                className={`border rounded-md px-3 py-2 md:px-4 md:py-3 focus:ring-2 text-base md:text-xl placeholder:text-outline-variant transition outline-none ${error ? "border-error focus:ring-error focus:border-error" : "border-outline focus:ring-primary focus:border-primary"}`}
                {...props}
            />
            {error && <FormErrorSection error={error} />}
        </div>
    );
}
