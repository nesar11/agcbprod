import React, { Component } from 'react';

class State extends Component {

    render() {

        return (
            <section className="quality-area pt-120 pb-90 fix">
            <div className="container">
                <div className="row align-items-center">
                    <h1 className="mb-70"  style={{'text-align': 'center'}} >Our Stats</h1>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <div className="kquality mb-30" data-aos="zoom-in-right">
                            <div className="kquality-icon">
                                <img src="assets/img/icon/service-icon-1a.png" className="img-fluid" alt="about-icon"/>
                            </div>         
                               <h3>1700 + </h3> 
                               <p>Total AlaDeen Subscribers </p> 
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mb-30">
                        <div className="kquality mb-30" data-aos="zoom-in-right">
                            <div className="kquality-icon">
                                <img src="assets/img/icon/service-icon-1a.png" className="img-fluid" alt="about-icon"/>
                            </div>         
                               <br></br><h3>14,000 ++ Gram  </h3> <br></br>
                               <span>Total Gold Subscribers </span> 
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <div className="kquality mb-30" data-aos="zoom-in-right">
                            <div className="kquality-icon">
                                <img src="assets/img/icon/service-icon-1a.png" className="img-fluid" alt="about-icon"/>
                            </div>         
                               <br></br><h3>12,000 ++ Gram </h3> <br></br>
                               <span>Total Silver Subscribers </span> 
                        </div>
                    </div>
 
                </div>
            </div>
        </section>
        );
    }
}

export default State;