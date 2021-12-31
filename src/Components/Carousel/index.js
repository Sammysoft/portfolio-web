import React from "react";
import { Icon } from 'semantic-ui-react';

function Carousel() {
    return (
        <>

        <div className='body-wrapper'>
            <div className="body-menu">
                <ul id="menu-list-wrapper">
                    <li id="menu-list-item"><Icon name="house" />HOME</li>
                    <li id="menu-list-item">ABOUT</li>
                    <li id="menu-list-item">CONTACT</li>
                    <li id="menu-list-item">EDUCATION</li>
                    <li id="menu-list-item">ACHIEVEMENTS</li>
                </ul>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src="assets/images/pics.jpeg"  height={"600px"} alt="First slide" />
                    <div className="carousel-caption  d-md-block">
                            <h2 style={{color: "#062706", fontFamily: "Zilla Slab"}}>Hon. Blessing Onuh </h2>
                            <p style={{color: "white", fontFamily: "Zilla Slab"}}> Portfolio</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="assets/images/pics.jpeg" height={"600px"}  alt="Second slide" />
                    <div className="carousel-caption d-md-block">
                            <h2 style={{color: "#062706", fontFamily: "Zilla Slab"}}>Hon. Blessing Onuh</h2>
                            <p style={{color: "white", fontFamily: "Zilla Slab"}}> Representing Otukpo/Ohimini Federal Constituency of Benue State, Nigeria</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="assets/images/pics2.jpeg" height={"600px"} alt="Third slide" />
                    <div className="carousel-caption  d-md-block">
                            <h2 style={{color: "#062706", fontFamily: "Zilla Slab"}}>Hon. Blessing Onuh </h2>
                            <p style={{color: "white", fontFamily: "Zilla Slab"}}> Representing Otukpo/Ohimini Federal Constituency of Benue State, Nigeria</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
        </div>
        <i className="fas fa-user"></i>


        </>
    );
}

export default Carousel;