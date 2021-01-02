import React from 'react';

class ErrorPage extends React.Component {
    render() {
        return (
            <div className="case">
                <div className="container">
                    <h1 className="dark-grey-text">Oops</h1>
                    <br />
                    <span className="grey-text">
                        <p>Sorry
                            <br/>
                            The page you requested cannot <b>be found</b>!</p>
                    </span>
                </div>
            </div>

        );
    }
}

export default ErrorPage;