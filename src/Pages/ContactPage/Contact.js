import { React, useState } from 'react';
import "./Contact.css"
import mailIcon from "../../Svgs/mail.svg"
import emailjs from 'emailjs-com';

function Contact(props) {
    //State of all form inputs
    const [formName, setFormName] = useState("")
    const [formEmail, setFormEmail] = useState("")
    const [formSubject, setFormSubject] = useState("")
    const [formMessage, setFormMessage] = useState("")

    // Send email to myself through the form
    function sendEmail(e) {
        e.preventDefault();

        // Check if user fills in form to allow them to send email
        if (formName.length > 0 && formEmail.length > 0 && formMessage.length > 0) {
            emailjs.sendForm(process.env.REACT_APP_USER_SERVICE_ID, 'template_i827yej', e.target, process.env.REACT_APP_USER_ID)
                .then(() => {
                    alert("Email Sent");

                }, (error) => {
                    alert(error.text);
                });

            // Set all values of form inputs to empty strings after submit
            setFormName("")
            setFormEmail("")
            setFormSubject("")
            setFormMessage("")
        }
        else {
            alert("Please Complete Form")
        }
    }


    return (
        <div className="contactContainer">
            <div className="contactFormContainer">
                <h1>Get in Touch</h1>
                <div className="emailMeContainer">
                    <div className="mailIconContainer">
                        <img alt="mailIcon" src={mailIcon}></img>
                    </div>
                    <a href="mailto: sebastianjburman@gmail.com">sebastianjburman@gmail.com</a>
                    <p>EMAIL ME</p>
                </div>
                <h1>Contact Form</h1>
                <div className="inputsContainer">
                    <form className="emailForm" onSubmit={sendEmail}>
                        <div className="nameEmailInputContainer">
                            <input className="nameInput" value={formName} onChange={(event) => setFormName(event.target.value)} placeholder="Your Name*" type="text" name="from_name"></input>
                            <input className="emailInput" value={formEmail} onChange={(event) => setFormEmail(event.target.value)} placeholder="Your Email*" type="email" name="from_email"></input>
                        </div>
                        <div className="subjectMessageInputContainer">
                            <input className="subjectInput" value={formSubject} onChange={(event) => setFormSubject(event.target.value)} placeholder="Subject*" type="text" name="from_subject"></input>
                            <textarea className="messageInput" value={formMessage} onChange={(event) => setFormMessage(event.target.value)} placeholder="Your Message*" type="text" name="message"></textarea>
                        </div>
                        <input className="sendButton" type="submit" value="Send"></input>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Contact;