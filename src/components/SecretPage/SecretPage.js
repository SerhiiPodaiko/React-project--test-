import React from "react";
import { Redirect } from "react-router";

import './SecretPage.css';

const SecretPage = ({ isLoggedIn }) => {

    let style = {
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: "20px",
        paddingTop: "10px",
        fontWeight: 'bold'
    };


    if (isLoggedIn) {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-center">This is is full of secrets!!!</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return <Redirect to="/Profile" />
};

export default SecretPage;