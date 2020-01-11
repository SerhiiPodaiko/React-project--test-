import React  from 'react';

import './Content.css';

const Content = () => {

    let urlContent = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3f5Og1X8XcEvmw1E3DXALtR8xZ4gD1-12qNOjifmhGKI8XsFDug&s`;

    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="npm">
                            <img className="img-fluid" src={urlContent} alt=""/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="started">
                            <h3>Angular CLI</h3>
                            <p>A command line interface for Angular</p>
                            <button>GET STARTED</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;