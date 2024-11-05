import React, {useEffect, useState} from "react";
import "./App.css";
import {Сounter} from "./components/counter/Сounter";
import {SettingsCounter} from "./components/settingsCounter/SettingsCounter";

export type counterSettingsType = {
    min: number,
    max: number,
    valueCounter: number
}

function App() {

    const [counterState, setCounterState] = useState<counterSettingsType>(
        {
            min: 2,
            max: 7,
            valueCounter: 0
        });

    useEffect(() => {
        let savedMax = localStorage.getItem("maxValue");
        let savedMin = localStorage.getItem("minValue");
        let savedCounter = localStorage.getItem("valueCounter");

        setCounterState((prevState) => ({
            max: savedMax ? JSON.parse(savedMax) : prevState.max,
            min: savedMin ? JSON.parse(savedMin) : prevState.min,
            valueCounter: savedCounter ? JSON.parse(savedCounter) : prevState.min
        }))
    }, []);

    useEffect(() => {
        localStorage.setItem("maxValue", JSON.stringify(counterState.max));
        localStorage.setItem("minValue", JSON.stringify(counterState.min));
        localStorage.setItem("valueCounter", JSON.stringify(counterState.valueCounter));
    }, [counterState]);

    const updateSettings = (minValue: number, maxValue: number) => {
        setCounterState({...counterState, min: minValue, max: maxValue, valueCounter: minValue});
    }

    const incValueCounter = () => {
        if (counterState.valueCounter < counterState.max) {
            setCounterState((prevState) => ({
                ...prevState,
                valueCounter: prevState.valueCounter + 1
            }));
        }
    };

    const resetValueCounter = () => {
        setCounterState({...counterState, valueCounter: counterState.min});
    };


    return (

        <div className="App">
            <SettingsCounter min={counterState.min} max={counterState.max} updateSettings={updateSettings}/>
            <Сounter counterSettings={counterState} incValueCounter={incValueCounter}
                     resetValueCounter={resetValueCounter} className={"counter"}/>
        </div>
    );
}

export default App;
