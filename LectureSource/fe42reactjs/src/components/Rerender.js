import React, {Component} from "react";
export default class Rerender extends Component{
    // Khởi tạo phương thức
    constructor(props){
        super(props);
        this.state = {
            isLogin: false
        }
    }

    // Phong thuc login
    login = () => {
        this.setState({
            isLogin: true
        })
    }

    // Thuoc tinh
    userName = 'viincyy';
    render(){
        <div>
            {this.state.isLogin ? <b>Hello {this.userName}</b> : <button onClick={this.login}>Login</button>}
        </div>
    }
}