import React from "react";


const Header = ()=>{
    return(
        <>
               <header className="masthead  text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                {/* <!-- Masthead Avatar Image--> */}
                <img className="masthead-avatar mb-5" src="assets/images/pics.jpeg" alt="..." />
                {/* <!-- Masthead Heading--> */}
                <h1 className="masthead-heading text-uppercase mb-0">Hon. Blessing Onuh</h1>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Masthead Subheading--> */}
                <p className="masthead-subheading font-weight-light mb-0" style={{fontFamily: "Vujahday Script"}}>Representing Otukpo/Ohimini Federal Constituency of Benue State, Nigeria</p>
            </div>
        </header>
        </>
    )
}
export default Header;