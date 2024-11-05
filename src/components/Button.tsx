import React from "react";

type ButtonPropsType = {
    title: string,
    disabled?: boolean,
    onClickHandler?: () => void;
}

export const Button = ({title,onClickHandler,disabled}: ButtonPropsType) => {
    return (
        <button disabled={disabled} onClick={onClickHandler}>{title}</button>
    );
};