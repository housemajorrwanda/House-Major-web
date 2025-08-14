import React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const baseClasses =
  "block w-full rounded-md border border-gray-300 bg-white/90 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input ref={ref} className={`${baseClasses} ${className}`} {...props} />
    );
  }
);

Input.displayName = "Input";

export default Input;
