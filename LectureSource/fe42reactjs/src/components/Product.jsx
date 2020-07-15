import React, {Component} from "react";
export default class Product extends Component{
    render(){
        let title = 'CyberSoft';
        let productName = `<p><b>FRONTEND</b></p>`;
        return(
            <div className="Product">
                {title}
                {productName}
            </div>
        )
    }
}