import React, {Component} from 'react';

import './Documentation.css';

export default class Documentation extends Component {
    constructor() {
        super();

        this.state = {
            items: [],
            isLoading: false
        }
    }

    componentDidMount() {

        this.setState({
            isLoading: true
        });

        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f566edbf781c4d2ba135236a869fa6ae`)
            .then((response) => {

                if (!response.ok) {
                    throw new Error(response.status);
                }

                return response.json();
            })
            .then(({ articles }) => {
                console.log(articles);
                this.setState({
                    items: articles,
                    isLoading: false
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }

    render() {

        const { items, isLoading } = this.state;

        return (
            <div className="documentation">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            { isLoading ? <p className="loading">Loading...</p> :
                            items.map((item, id) => {
                                return (
                                    <div className="apiBox" key={id}>
                                        <h4>{item.author}</h4>
                                        <h6>{item.title}</h6>
                                        <p>{item.description}</p>
                                    </div>
                                );
                            }) }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
