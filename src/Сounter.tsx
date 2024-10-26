import React, {useState} from "react";
import {Button} from "./Button";
import {Tablo} from "./Tablo";
import {counterSettingsType} from "./App";

type CounterPropsType = {
    className: string;
    counterSettings: counterSettingsType
    incValueCounter:()=>void
    resetValueCounter:()=>void
};

export const Сounter = ({className, incValueCounter,resetValueCounter,counterSettings}: CounterPropsType) => {





    // useEffect(() => {
    //     setValueCounter(minValue);
    // }, [minValue]);
    //
    // useEffect(() => {
    //     let valueAsString= localStorage.getItem("counterValue");
    //     if (valueAsString){
    //         let newValue = JSON.parse(valueAsString);
    //         setValueCounter(newValue);
    //     }
    // }, []);
    //
    //
    //
    // console.log("End valueCounter"+valueCounter);
    //
    // useEffect(() => {
    //     localStorage.setItem("counterValue", JSON.stringify(valueCounter));
    // }, [valueCounter]);
    //
    //


    return (
        <div className={className}>
            <Tablo className={counterSettings.valueCounter === counterSettings.max ? "filter-tablo" : "tablo"} value={counterSettings.valueCounter}/>
            <div>
                <Button disabled={counterSettings.valueCounter === counterSettings.max} title={"inc"} onClickHandler={incValueCounter}/>
                <Button disabled={counterSettings.valueCounter === counterSettings.min} title={"reset"} onClickHandler={resetValueCounter}/>
            </div>
        </div>
    );
};
