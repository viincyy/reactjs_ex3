import React, {Component} from "react";
import slide1 from './../img/slide_1.jpg'
import slide2 from './../img/slide_2.jpg'
import slide3 from './../img/slide_3.jpg'
export default class Carousel extends Component{
    render(){
        return(
            <div>
                <div id="demo" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img
                        src={slide1}
                        alt="Los Angeles"
                        width={1100}
                        height={500}
                    />
                    </div>
                    <div className="carousel-item">
                    <img src={slide2} alt="Chicago" width={1100} height={500} />
                    </div>
                    <div className="carousel-item">
                    <img src={slide3} alt="New York" width={1100} height={500} />
                    </div>
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
                </div>
            </div>
        );
    }
}