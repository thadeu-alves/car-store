import type { ReactNode } from "react";

export function Button({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <p className={`bg-white rounded p-3 ${className}`}>
            {children}
        </p>
    );
}
