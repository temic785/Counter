import React from "react";
import {counterSettingsType} from "../../App";

type TabloProps = {
    className: string;
    positiveCount: boolean;
    counterSettings: counterSettingsType
}

export const Tablo = ({className, positiveCount, counterSettings}: TabloProps) => {

    let value: number | "enter values and press 'set'" | "Incorrect values" = counterSettings.valueCounter

    if (value < 0) {
        value = "enter values and press 'set'"
    }
    if (counterSettings.min === counterSettings.max) {
        value = "Incorrect values"
    }
    return (
        <div>
            <span className={positiveCount ? className : "invalidValue"}>{value}</span>
        </div>
    );
};