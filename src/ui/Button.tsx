import {MouseEventHandler} from "react";

interface Props {
    label: string;
    theme: "dark" | "light";
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({label, theme, onClick}: Props) => {
    const themes = {
        dark: "bg-transparent border-gray-200 border-2 text-lg rounded-lg text-gray-200 hover:bg-gray-200 hover:text-dark-0",
        light: "bg-gray-50 border-gray-50 text-[hsl(237,49%,15%)] whitespace-nowrap text-lg border-2 rounded-lg hover:bg-transparent hover:text-gray-200"
    }

    return (
        <button className={`${themes[theme]} transition duration-300 p-[0.5rem_2rem]`} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;