import React from 'react';
import './style/contact.css';

export default function Contact() {
    return (
        <div className="case">
            <div className="contactContent py-10">
                <div className="contactGrid py-20 bg-green-300">
                    <div className="contactInfo">
                        <h1 className="text-4xl font-bold text-center">Contact</h1>
                    </div>
                    <div className="contactInput">
                        <label htmlFor="username">Name:</label>
                        <br />
                        <input type="text" placeholder="Enter name" className="p-1 text-black border-2 border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                        <br />
                        <label htmlFor="username">Email:</label>
                        <br />
                        <input type="text" placeholder="Enter email" className="p-1 text-black border-2 border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                        <label className="block">
                            <span className="text-black">Message</span>
                            <textarea className="form-textarea mt-1 block w-4/5 p-1 text-black border-2 border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                            rows="4" placeholder="Enter message."></textarea>
                        </label>
                    </div>
                </div>

            </div>
        </div>
    );
}