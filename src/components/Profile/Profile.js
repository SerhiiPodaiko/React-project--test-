import React from "react";
import { Redirect } from "react-router";

import './Profile.css';

const Profile = ({ isLoggedIn, onLogin }) => {

    if (isLoggedIn) {
        return <Redirect to="/" />
    }

    return (
        <div className="profile">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="profile-inner">
                            <button onClick={onLogin}>LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;