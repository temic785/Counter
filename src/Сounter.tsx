import React, {useEffect, useState} from "react";
import {Button} from "./Button";
import {Tablo} from "./Tablo";
import {ValueSettingsCounter} from "./SettingsCounter";

type CounterPropsType = {
    className: string;
    valueSettingsCounter:ValueSettingsCounter
}


export const Сounter = ({className,valueSettingsCounter}:CounterPropsType) => {
    const minValue=valueSettingsCounter.min
    const maxValue=valueSettingsCounter.max
    console.log("min"+minValue,"max"+maxValue)

    const [valueCounter, setValueCounter] = useState(minValue);

    // useEffect(() => {
    //     setValueCounter(minValue);
    // }, [minValue]);

    const incValueCounter = () => {
        if (valueCounter < maxValue) {

            const newValueCounter = valueCounter + 1;
            setValueCounter(newValueCounter);
        }
    }

    const resetValueCounter = () => {
        setValueCounter(minValue)
    }
    return (

        <div className={className}>
            <Tablo className={valueCounter === maxValue ? "filter-tablo" : "tablo"} value={valueCounter}/>
            <div>
                <Button disabled={valueCounter===maxValue} title={"inc"} onClickHandler={incValueCounter}/>
                <Button disabled={valueCounter===minValue} title={"reset"} onClickHandler={resetValueCounter}/>
            </div>
        </div>
    );
};