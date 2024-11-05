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

    const positiveCount = counterSettings.min >= 0 && counterSettings.max >= 0

    return (
        <div className={className}>
            <Tablo counterSettings={counterSettings} positiveCount={positiveCount}
                   className={counterSettings.valueCounter === counterSettings.max ? "filter-tablo" : "tablo"}
            />
            <div>
                <Button disabled={counterSettings.valueCounter === counterSettings.max || !positiveCount} title={"inc"}
                        onClickHandler={incValueCounter}/>
                <Button disabled={counterSettings.valueCounter === counterSettings.min} title={"reset"}
                        onClickHandler={resetValueCounter}/>
            </div>
        </div>
    );
};
