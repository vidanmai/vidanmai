import React from 'react';
import './style/glitch.css';
import errorImg from './img/error.svg';

class ErrorPage extends React.Component {
    render() {
        return (
            <div className="case">
                <span className="imgContainer">
                    <img src={errorImg} alt="" />
                </span>
            </div>

        );
    }
}

export default ErrorPage;