import {MouseEventHandler} from "react";

interface Props {
    label: string;
    theme: "dark" | "light";
    size: "sm" | "lg";
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({label, theme, size, onClick}: Props) => {
    const sizes = {
        sm: "p-[5px_35px]",
        lg: "p-[10px_70px]"
    }
    const themes = {
        dark: "bg-transparent border-gray-200 border-2 rounded-lg text-gray-200 hover:bg-gray-200 hover:text-dark-0",
        light: "bg-gray-200 "
    }

    return (
        <button className={`${sizes[size]} ${themes[theme]} transition`} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;