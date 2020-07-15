import React, {Component} from "react";
export default class Condition extends Component{
    // Thuộc tính
    isLogin = true;
    userName = 'viincyy';

    // Phương thức checkLogin
    // renderContent = () => {
    //     if(this.isLogin){
    //         return <b>Hello {this.userName}</b>
    //     }
    // }
    render(){
        return(
            <div>
                {this.isLogin ? <b>Hello {this.userName}</b> : ''}
            </div>
        )
    }
}