import React, {Component} from "react";
export default class EventHandling extends Component{
    handleOnClick = (msg) => {
        console.log(msg);
    }
    render(){
        return(
            <button onClick={() => this.handleOnClick("Hi")}>Show message</button>
        )
    }
}