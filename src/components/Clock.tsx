import React, { FC } from "react";
import moment from "moment";
import { GoogleSearchBox } from "./GoogleSearchBox";

export interface ClockState {
    date: string;
    time: string;
}

export class Clock extends React.Component<{}, ClockState>{
    constructor(props: {}) {
        super(props);
        this.state = {
            date: moment().format('L'),
            time: moment().format('LTS')
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: moment().format('L'),
                time: moment().format('LTS')
            });
        }, 1000)
    }
    render() {
        return (
            <div id="clock">

                <p>{this.state.date} - {this.state.time}</p>
            </div>
        )
    }
}
