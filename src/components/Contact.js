import React from 'react';
import './style/contact.css';

export default function Contact() {
    return (
        <div className="case">
            <div className="py-10 contactContent">
                <div className="py-20 bg-green-300 contactGrid">
                    <div className="contactInfo">
                        <h1 className="text-4xl font-bold text-center">Contact</h1>
                    </div>
                    <div className="contactInput">
                        <form name="contact" method="post" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact"/>
                            <input type="text" placeholder="Enter your name" name="name"/>
                            <input type="email" placeholder="Enter your email" name="email"/>
                            <textArea placeholder="Enter your message" name="message"></textArea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}