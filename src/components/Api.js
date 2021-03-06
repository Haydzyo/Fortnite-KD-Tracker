import React from 'react';
import DefaultLayout from './DefaultLayout.js';

class Api extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div className="section page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 content">
                                <h1>Site API Information</h1>
                                <p><a href="https://fortnitetracker.com/site-api" target="_blank"  rel="noopener noreferrer">FortniteTracker.com</a> provides a public API for non-commerical use.</p>
                                <p>We use their service to track users kills & matches played.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

export default Api;
