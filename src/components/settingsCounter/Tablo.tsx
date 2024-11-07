import React from "react";
import {counterSettingsType} from "../../App";

type TabloProps = {
    className: string;
    counterSettings: counterSettingsType
}

export const Tablo = ({className, counterSettings}: TabloProps) => {

    let value: number | "Incorrect values" = counterSettings.valueCounter


    if (counterSettings.min === counterSettings.max || counterSettings.max < counterSettings.min || value < 0) {
        value = "Incorrect values"
    }
    return (
        <div>
            <span
                className={counterSettings.valueCounter === counterSettings.max ? "filter-tablo" : className}>{counterSettings.error === "enter values and press 'set'" ? counterSettings.error : value}</span>
        </div>
    );
};