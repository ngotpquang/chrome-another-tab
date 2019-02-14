import React, { FC } from "react";
import moment from "moment";

export interface ClockState {
    time: string,
}

export class Clock extends React.Component<{}, ClockState>{
    constructor(props: {}) {
        super(props);
        this.state = {
            time: moment().format('L') + " " + moment().format('LTS'),
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: moment().format('L') + " " + moment().format('LTS')
            })
        }, 1000)
    }
    render() {
        return (
            <div id="clock">
                <h1>{this.state.time}</h1>
            </div>
        )
    }
}
