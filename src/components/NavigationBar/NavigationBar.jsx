import React, { Component } from 'react';

class NavigationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
                <div className="container">
                    <div className="navbar-translate">
                        <a className="navbar-brand" href="../index.html">AAVVIS</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="material-icons">signup</i> SignIn
                        </a>
                                <div className="dropdown-menu dropdown-with-icons">
                                    <a href="../index.html" className="dropdown-item">
                                        <i className="material-icons">layers</i> All Components
                            </a>
                                    <a href="http://demos.creative-tim.com/material-kit/docs/2.0/getting-started/introduction.html" className="dropdown-item">
                                        <i className="material-icons">content_paste</i> Documentation
                            </a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank" data-original-title="Follow us on Twitter">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank" data-original-title="Like us on Facebook">
                                    <i className="fa fa-facebook-square"></i>
                                </a> 
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank" data-original-title="Follow us on Instagram">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;