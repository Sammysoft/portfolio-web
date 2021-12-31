import React from "react";
import Portfolio1 from "./portfolio1";
import Portfolio2 from "./portfolio2";
import Portfolio3 from './portfolio3';
import Portfolio4 from './portfolio4';
import Portfolio5 from './portfolio5';
import Portfolio6 from './portfolio6';

const portfolios = ()=>{
    return(
        <>
              <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Gallery</h2>

                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <Portfolio6 />
                    <Portfolio5 />
                    <Portfolio4 />
                    <Portfolio3 />
                    <Portfolio2/>
                    <Portfolio1 />
                </div>
            </div>
        </section>
        </>
    )
}

export default portfolios;