import React, { Component } from "react";
import './App.scss';
import emailjs from 'emailjs-com';


class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
      number: "", 
      status: "Submit"
    };   
  }


  
  
  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    } else if (field === "number") {
      this.setState({ number: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();  

    const templateParams = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      number: this.state.number,
    };
    this.setState({ status: "Sending" });  
    emailjs.send('service_8vy6avb', 'template_q1i3rdi', templateParams, 'user_GbWtsCTWKsdyL2mOdz1tH')
    .then((response) => {
        this.setState({ name: "", email: "", message: "", number: "", status: "Sent" });
    }, (err) => {
      this.setState({status: "Failed, Try Again" });
    });
  }



  render() {
    let buttonText = this.state.status;
    
    return (      




        <form onSubmit={this.handleSubmit.bind(this)} method="POST" className='format'>

            <p>To schedule shoots, or if you have any questions, fill out the contact form and I'll get back to you as soon as possible.</p>
            <div>
            <label htmlFor="name">Your Name:</label>
            <input
                type="text"
                id="name"
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
                required
            />
            </div>
            <div>
            <label htmlFor="email">Your Email:</label>
            <input
                type="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                required
            />
            </div>
            <div>
            <label htmlFor="tel">Your Number:</label>
            <input
                type="tel"
                id="number"
                value={this.state.number}
                onChange={this.handleChange.bind(this)}
                required
            />
            </div>
            <div>
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                value={this.state.message}
                onChange={this.handleChange.bind(this)}
                required
            />
            </div>
            <button type="submit" id='submit'>{buttonText}</button>
        </form>      
    );
}
}

export default ContactForm;