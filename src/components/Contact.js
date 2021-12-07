import React from 'react';
import './style/contact.css';
import facebookIcon from './icons/icons8-facebook.svg'
import githubIcon from './icons/icons8-github.svg'

export default function Contact() {
    return (
        <div className="container case">
            <div className="py-5 contactContent">
                <div className="py-20 bg-green-300 contactGrid">
                    <div className="contactInfo center">
                        <h1 className="text-4xl font-bold">Get in touch!</h1>
                        <br />
                        <ul>
                            <li>Facebook</li>
                            <a href="https://www.facebook.com/vidan97">
                                <img src={facebookIcon} alt="" className="center" />
                            </a>
                            <br />
                            <li>Github</li>
                            <a href="https://github.com/vidanmai">
                                <img src={githubIcon} alt="" className="center" />
                            </a>
                        </ul>
                    </div>
                    <div id="contactInput">
                        <form name="contact" method="post" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />
                            <label>Name</label>
                            <br />
                            <input type="text" placeholder="Enter your name" name="name" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-700 focus:border-transparent" />
                            <br />
                            <br />
                            <label>Email</label>
                            <br />
                            <input type="email" placeholder="Enter your email" name="email" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-700 focus:border-transparent" />
                            <br />
                            <br />
                            <label>Send me a message! 😄 </label>
                            <br />
                            <textArea placeholder="Enter your message" name="message" className="block w-full p-5 px-3 py-2 mt-1 text-black border rounded shadow form-textarea focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"></textArea>
                            <br />
                            <button type="submit" className="px-4 py-2 font-semibold text-green-700 bg-transparent border border-green-700 rounded hover:bg-green-700 hover:text-white hover:border-transparent">Send</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}