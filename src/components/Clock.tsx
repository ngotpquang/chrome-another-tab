import React, { FC } from "react";
import moment from "moment";
import AnalogClock, { Themes } from 'react-analog-clock';
import { GoogleSearchBox } from "./GoogleSearchBox";

export const Clock = () => {
    const customTheme = {
        background: 'transparent',
        border: '#eee',
        center: '#000',
        seconds: '#f56c6c',
        minutes: '#ccc',
        hour: '#eee',
        tick: '#eee',
        smallTickWidth: 2,
        largeTickWidth: 4,
        secondHandWidth: 3,
        minuteHandWidth: 6,
        hourHandWidth: 8,
    };
    return (
        <div id="clock">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "3rem 10rem" }}>
                <AnalogClock theme={customTheme} width={200} />
                <GoogleSearchBox />
            </div>

        </div>
    )
}
