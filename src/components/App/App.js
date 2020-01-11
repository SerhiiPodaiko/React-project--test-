import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";
import Documentation from "../Documentation";
import Profile from "../Profile";
import SecretPage from "../SecretPage";

export default class App extends Component {

    state = {
        isLoggedIn: false
    };

    onLogin = () => {
      this.setState({
          isLoggedIn: true
      });
    };

    render() {

        const { isLoggedIn } = this.state;

        return (
            <Fragment>
                <Router>
                    <Header />
                    <Route path="/Profile" render={() => (
                        <Profile isLoggedIn={isLoggedIn}
                                 onLogin={this.onLogin} />
                    )} />
                    <Route path="/SecretPage" render={() => (
                        <SecretPage isLoggedIn={isLoggedIn} />
                    )}/>
                    <Content />
                    <Route path="/Documentation" component={Documentation} />
                    <Route path="/Footer" component={Footer} />
                </Router>
            </Fragment>
        );
    }
};
