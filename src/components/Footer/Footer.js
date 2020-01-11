import React  from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className="learn">
                            <img src="https://cli.angular.io/angular-logo.svg" alt=""/>
                            Learn Angular
                        </div>
                    </div>
                    <div className="col-7">
                        <p>
                            <a href="https://github.com/SerhiiPodaiko?tab=repositories">My GitHub</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;