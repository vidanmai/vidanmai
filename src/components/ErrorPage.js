import React from 'react';
import './style/glitch.css';

class ErrorPage extends React.Component {
    render() {
        return (
            <div className="case">
                <div className="container">
                    <div className="glitch" data-text="404"></div>
                </div>
            </div>

        );
    }
}

export default ErrorPage;