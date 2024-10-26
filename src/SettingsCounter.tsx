import React, {useEffect, useState} from "react";
import {Button} from "./Button";

type SettingsCounterPropsType = {
    min: number;
    max: number;
    updateSettings: (minValue: number, maxValue: number) => void;
}


export const SettingsCounter = ({min, max, updateSettings}: SettingsCounterPropsType) => {

    const [localMax, setLocalMax] = useState(JSON.stringify(max));
    const [localMin, setLocalMin] = useState(JSON.stringify(min));

    useEffect(() => {
        let savedMax = localStorage.getItem("maxValue");
        let savedMin = localStorage.getItem("minValue");
        if (savedMax) {
            console.log(savedMax);
            setLocalMax(savedMax);
        }
        if (savedMin) {
            console.log(savedMin)
            setLocalMin(savedMin);
        }

    }, []);

    return (
        <div>
            <div>
                <span>max value:</span>
                <input value={localMax}
                       onChange={(e) => setLocalMax(e.currentTarget.value)}
                       type={"number"}/>


            </div>
            <div>
                <span>min value:</span>
                <input value={localMin}
                       onChange={(e) => setLocalMin(e.currentTarget.value)}
                       type={"number"}/>

            </div>
            <Button onClickHandler={() => updateSettings(Number(localMin), Number(localMax))} title={"set"}/>
        </div>
    );
};