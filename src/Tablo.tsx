import React from "react";
type TabloProps = {
    value: number;
    className:string;
}

export const Tablo = ({value,className}:TabloProps) => {
    return (
        <div className={className}>
            {value}
        </div>
    );
};