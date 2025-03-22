import React, { CSSProperties } from "react";


type InputProps = {
  type?: "text" | "email" | "password" | "number" | "checkbox";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: CSSProperties
};

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  className = "",
  disabled = false,
  fullWidth = false,
  style = {}
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      style={style}
      className={`border rounded-md px-3 py-2 outline-none transition-all ${disabled ? "bg-gray-200 cursor-not-allowed" : "bg-white"
        } ${fullWidth ? "w-full" : ""} ${className}`}
    />
  );
};

export default Input;
