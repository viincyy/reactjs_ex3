import React, {Component} from "react";
import Carousel from './carousel';
import Header from './header';
import Promotion from './promotion';
import ProductItems from './productitems';
class ReacJSEx2 extends Component{
    render(){
        return(
            <div>
                <Header />
                <Carousel />
                <ProductItems />
                <Promotion />
            </div>
        );
    }
}
export default ReacJSEx2;

