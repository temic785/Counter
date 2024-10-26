import React, {useEffect, useState} from "react";
import "./App.css";
import {Сounter} from "./Сounter";
import {SettingsCounter, ValueSettingsCounter} from "./SettingsCounter";


function App() {

    const [counterValue, setCounterValue] = useState<ValueSettingsCounter>({min: 0, max: 7});

    const allValueSettingsCounter = (value: ValueSettingsCounter) => {

        setCounterValue({...counterValue, min: value.min, max: value.max});
        // console.log("test " + counterValue.min, counterValue.max);


    }


    return (

        <div className="App">
            <SettingsCounter allValueSettingsCounter={allValueSettingsCounter}/>
            <Сounter valueSettingsCounter={counterValue} className={"counter"}/>
        </div>
    );
}

export default App;
