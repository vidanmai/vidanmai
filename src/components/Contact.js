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
                        <form name="contact" method="POST" data-netlify="true">
                            <label htmlFor="username">Name:</label>
                            <br />
                            <input type="text" name="name" placeholder="Enter name" className="p-1 text-black border-2 border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                            <br />
                            <label htmlFor="username">Email:</label>
                            <br />
                            <input type="text" name="email" placeholder="Enter email" className="p-1 text-black border-2 border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                            <label className="block">
                                <span className="text-black">Message</span>
                                <textarea name="message" className="block w-4/5 p-1 mt-1 text-black border-2 border-black form-textarea focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    rows="4" placeholder="Enter message."></textarea>
                            </label>
                            <br/>
                            <p>
                                <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded hover:bg-blue-700" type="submit">Send</button>
                            </p>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}