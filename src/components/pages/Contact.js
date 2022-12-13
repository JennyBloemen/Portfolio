import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }


  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <div className="bg-dark text-white" id="contactSect">
        <div className="container" id="contact">
          <h2 className="contact text-center">Contact Me</h2>

          <form
            className="contact-form"
            onSubmit={this.submitForm}
            action="https://formspree.io/xknqzwvk"
            method="POST">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" id="exampleInputName1" name="name" placeholder="Your Name" />

            </div>

            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" name="email" placeholder="email@gmail.com" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="6" />
            </div>

            {status === "SUCCESS" ? <p className="success">Thank you for sending me a message!</p> : <button className="contactBtn">Submit</button>}
            {status === "ERROR" && <p className="failure">Ooops! There was an error. Please fill out all the fields and try againy</p>}
          </form>
          <div className="contactInfo text-center">
            <span>Email: </span><a href="mailto:jennyjbloemen@gmail.com">jennybloemen@gmail.com</a><br />
            <span>Call Me: </span><a href="tel:(801)2016307">(801)201-6307</a><br />
            <span>Download my resume:</span>
            {/* <a href={Resume} target='_blank' rel="noopener noreferrer">
              <button className="btn"
                id="resumeBtn" type="submit">
                <i className="fa fa-download resume"></i></button>
            </a> */}
            <div className="social-links">
              <span><a href="https://github.com/jennybloemen" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-3x"></i></a></span>
              <span><a href="https://www.linkedin.com/in/jenny-bloemen/" target="_blank" rel="noopener noreferrer"><i
                className="fa fa-linkedin fa-2x"></i></a></span>

              {/* <span>Download my resume:</span><a class="resume" href="AlexResume.pdf" target="_blank"><button><i
                  class="fa fa-download"></i></button></a> */}
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default Contact