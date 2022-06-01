import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
       <div className="contact">
            <div className='container'>
            <div className='title'>
                <h1>Contact With Us</h1>
                <p className='contact-p'>We would love to your respond to queries and help  <br /> you to succede of your project , feel free to get in touch with us.</p>
            </div>
            <div className="contact-box mb-5">
                <div className="contact-left">
                    <h3>Sent your message</h3>
                    <form>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Name</label>
                                <input type="text" name="" id="" placeholder="" />
                            </div>
                            <div className="input-group">
                                <label>Phone</label>
                                <input type="text" name="" id="" placeholder="" />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Email</label>
                                <input type="Email" name="" id="" placeholder="" />
                            </div>
                            <div className="input-group">
                                <label>Subject</label>
                                <input type="text" name="" id="" placeholder="" />
                            </div>
                        </div>
                        <label>Message</label>
                        <textarea name="" id="" cols="30" rows="5"></textarea>
                        <button className="sub-button" type="submit">Send</button>
                    </form>
                </div>
                <div className="contact-right">
                    <h3> Reach Us</h3>
                    <table>
                        <tr>
                            <td>Email</td>
                            <td>contact@example.com</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>+88 012 578 2112</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>#213, Gazipur,Sanarpar <br />
                                Narayangang,Chasara,Dhaka<br />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Contact;