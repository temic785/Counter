import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Tablo } from "./Tablo";
import { ValueSettingsCounter } from "./SettingsCounter";

type CounterPropsType = {
    className: string;
    valueSettingsCounter: ValueSettingsCounter;
};

export const Сounter = ({ className, valueSettingsCounter }: CounterPropsType) => {
    const minValue = valueSettingsCounter.min;
    const maxValue = valueSettingsCounter.max;


    const [valueCounter, setValueCounter] = useState(minValue);
    console.log("Start min: " + minValue, "Start max: " + maxValue);
    console.log("Start valueCounter"+valueCounter);


    useEffect(() => {
        setValueCounter(minValue);
    }, [minValue]);

    useEffect(() => {
        let valueAsString= localStorage.getItem("counterValue");
        if (valueAsString){
            let newValue = JSON.parse(valueAsString);
            setValueCounter(newValue);
        }
    }, []);



    console.log("End valueCounter"+valueCounter);

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(valueCounter));
    }, [valueCounter]);




    const incValueCounter = () => {
        if (valueCounter < maxValue) {
            setValueCounter((prevValue) => prevValue + 1);
        }
    };

    const resetValueCounter = () => {
        setValueCounter(minValue);
    };



    return (
        <div className={className}>
            <Tablo className={valueCounter === maxValue ? "filter-tablo" : "tablo"} value={valueCounter} />
            <div>
                <Button disabled={valueCounter === maxValue} title={"inc"} onClickHandler={incValueCounter} />
                <Button disabled={valueCounter === minValue} title={"reset"} onClickHandler={resetValueCounter} />
            </div>
        </div>
    );
};
