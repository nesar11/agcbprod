import React, { Component } from 'react';

class Quality extends Component {

    render() {

        return (
            <section className="quality-area pt-120 pb-90 fix">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-5 ml-50">
                        <div className="text-lg-end mb-30" data-aos="zoom-in-left">
                            <h2 className="mb-50" style={{'text-align': 'center'}}>Our Whitepaper</h2>
                            <div className="kquality-img" >
                                <img src="assets/img/brochure/whitepaper.JPG" className="img-fluid" alt="cta-img"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 ml-50">
                        <div className="text-lg-end mb-30" data-aos="zoom-in-left">
                            <h2 className="mb-50"  style={{'text-align': 'center'}}>Our Brochure</h2>
                            <div className="kquality-img">
                                <img src="assets/img/brochure/brochure.JPG" className="img-fluid" alt="cta-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Quality;