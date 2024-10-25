import React, {useState} from "react";
import {Button} from "./Button";

type SettingsCounterPropsType = {
    allValueSettingsCounter: (value: ValueSettingsCounter) => void
}
export type ValueSettingsCounter = {
    min: number;
    max: number;
}

export const SettingsCounter = ({allValueSettingsCounter}: SettingsCounterPropsType) => {

    const [counterValue, setCounterValue] = useState<ValueSettingsCounter>({min: 0, max: 10});
    // console.log(counterValue)

    return (
        <div>
            <div>
                <span>max value:</span>
                <input onChange={(e) => setCounterValue({...counterValue, max: Number(e.currentTarget.value)})}
                       type={"number"}/>

                {/*<input onChange={(e) => setCounterValue({...counterValue, min: Number(e.currentTarget.value)})}*/}
                {/*       type={"number"}/>*/}
            </div>
            <div>
                <span>min value:</span>
                <input onChange={(e) => setCounterValue({...counterValue, min: Number(e.currentTarget.value)})}
                       type={"number"}/>

            </div>
            <Button onClickHandler={() => allValueSettingsCounter(counterValue)} title={"set"}/>
        </div>
    );
};