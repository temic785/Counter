import React, {useState} from "react";
import {Button} from "../Button";
import {Tablo} from "../settingsCounter/Tablo";
import {counterSettingsType} from "../../App";

type CounterPropsType = {
    className: string;
    counterSettings: counterSettingsType
    incValueCounter: () => void
    resetValueCounter: () => void
};

export const Сounter = ({className, incValueCounter, resetValueCounter, counterSettings}: CounterPropsType) => {

    // const positiveCount = counterSettings.min >= 0 && counterSettings.max >= 0
    const isInvalidValue = Number(counterSettings.max) <= Number(counterSettings.min) || Number(counterSettings.max) < 0 || Number(counterSettings.min) < 0
    return (
        <div className={className}>
            <Tablo counterSettings={counterSettings}
                   className={isInvalidValue ? "invalidValue" : "tablo"}
            />
            <div className={"counterButton"}>
                <Button disabled={counterSettings.valueCounter === counterSettings.max || isInvalidValue || counterSettings.error === "enter values and press 'set'"} title={"inc"}
                        onClickHandler={incValueCounter}/>
                <Button disabled={counterSettings.valueCounter === counterSettings.min || counterSettings.error === "enter values and press 'set'"} title={"reset"}
                        onClickHandler={resetValueCounter}/>
            </div>
        </div>
    );
};
