import React, {useEffect, useState} from "react";
import {Button} from "./Button";

type SettingsCounterPropsType = {
    allValueSettingsCounter: (value: ValueSettingsCounter) => void
}
export type ValueSettingsCounter = {
    min: number;
    max: number;
}

export const SettingsCounter = ({allValueSettingsCounter}: SettingsCounterPropsType) => {

    const [counterValue, setCounterValue] = useState<ValueSettingsCounter>({min: 4, max: 10});

    useEffect(() => {
        const maxValueAsString = localStorage.getItem("maxValue");
        const minValueAsString = localStorage.getItem("minValue");

        setCounterValue((prevState) => ({
            min: minValueAsString ? JSON.parse(minValueAsString) : prevState.min,
            max: maxValueAsString ? JSON.parse(maxValueAsString) : prevState.max
        }));
    }, []);


    useEffect(() => {
        localStorage.setItem("maxValue", JSON.stringify(counterValue.max));
        localStorage.setItem("minValue", JSON.stringify(counterValue.min));
    }, [counterValue]);


    return (
        <div>
            <div>
                <span>max value:</span>
                <input value={counterValue.max}
                       onChange={(e) => setCounterValue({...counterValue, max: Number(e.currentTarget.value)})}
                       type={"number"}/>


            </div>
            <div>
                <span>min value:</span>
                <input value={counterValue.min}
                       onChange={(e) => setCounterValue({...counterValue, min: Number(e.currentTarget.value)})}
                       type={"number"}/>

            </div>
            <Button onClickHandler={() => allValueSettingsCounter(counterValue)} title={"set"}/>
        </div>
    );
};