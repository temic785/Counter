import React, {useEffect, useState} from "react";
import {Button} from "../Button";

type SettingsCounterPropsType = {
    min: number;
    max: number;
    className:string;
    updateSettings: (minValue: number, maxValue: number,waringMessage:string) => void;
}


export const SettingsCounter = ({min, max, updateSettings,className}: SettingsCounterPropsType) => {

    const [localMax, setLocalMax] = useState(JSON.stringify(max));
    const [localMin, setLocalMin] = useState(JSON.stringify(min));
    const [checkDisabledButton, setCheckDisabledButton] = useState(true);

    const isInvalidValue = Number(localMax) <= Number(localMin) || Number(localMax) < 0 || Number(localMin) < 0
    const warning="enter values and press 'set'"
    const onChangeHandler = (e: string, type: "max" | "min") => {
        type === "max" ? setLocalMax(e) : setLocalMax(localMax)
        type === "min" ? setLocalMin(e) : setLocalMin(localMin)

        // isInvalidValue ? setCheckDisabledButton(false) : setCheckDisabledButton(true)


    }
    const updateSettingsHandler = (type: "input" | "button") => {
        if (type === "button" || isInvalidValue) {
            updateSettings(Number(localMin), Number(localMax),"");
            setCheckDisabledButton(false);
        }
        if(type==="input" && !isInvalidValue) {
            updateSettings(Number(localMin), Number(localMax),warning);
            setCheckDisabledButton(true)
        }
    };

    console.log(localMax, localMin)


    useEffect(() => {
        let savedMax = localStorage.getItem("maxValue");
        let savedMin = localStorage.getItem("minValue");
        if (savedMax) {
            setLocalMax(savedMax);
        }
        if (savedMin) {
            setLocalMin(savedMin);
        }

    }, []);

    return (
        <div className={className}>
            <div>
                <span>max value: </span>
                <input value={localMax}
                       onChange={(e) => onChangeHandler(e.currentTarget.value, "max")}
                       onClick={() => updateSettingsHandler("input")}
                       className={isInvalidValue ? "invalidLocalValue" : "localValue"}
                       type={"number"}/>

            </div>
            <div>
                <span>min value: </span>
                <input value={localMin}
                       onChange={(e) => onChangeHandler(e.currentTarget.value, "min")}
                       onClick={() => updateSettingsHandler("input")}
                       className={isInvalidValue ? "invalidLocalValue" : "localValue"}
                       type={"number"}/>

            </div>
            <Button  disabled={!checkDisabledButton} onClickHandler={() => updateSettingsHandler("button")}
                    title={"set"}/>
        </div>
    );
};