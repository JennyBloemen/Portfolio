import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import resume from "../../assets/images/Res.pdf";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
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
          <h3 className="contact text-center">Please Drop a Message...</h3>

          <form
            className="contact-form"
            onSubmit={this.submitForm}
            action="https://formspree.io/f/xpznvekb"
            method="POST"
          >
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                name="name"
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                placeholder="email@gmail.com"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
              />
            </div>

            {status === "SUCCESS" ? (
              <p className="success">Thank you for sending me a message!</p>
            ) : (
              <button className="contactBtn">Submit</button>
            )}
            {status === "ERROR" && (
              <p className="failure">
                Ooops! There was an error. Please fill out all the fields and
                try again.
              </p>
            )}
          </form>
          <br></br>
          <div className="contactInfo text-center">
            <div>
              Email:
              <a className="links" href="mailto:jennyjbloemen@gmail.com">
                {" "}
                jennyjbloemen@gmail.com
              </a>
            </div>

            <div>
              Call Me:
              <a className="links" href="tel:(801)2016307">
                {" "}
                (801)201-6307
              </a>
            </div>

            <div className="social-links">
              <div>
                GitHub:
                <a
                  className="links"
                  href="https://github.com/jennybloemen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  https://github.com/jennybloemen
                </a>
              </div>
              <div>
                LinkedIn:
                <a
                  className="links"
                  href="https://www.linkedin.com/in/jennybloemen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  https://www.linkedin.com/in/jenny-bloemen/
                </a>
              </div>
              <br></br>
              <div className="d-grid gap-2 justify-content-center d-flex">
                <a href={resume} target="_blank" rel="noreferrer">
                  <Button
                    className="gh-button "
                    variant="secondary mt-auto"
                    size="sm"
                  >
                    Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "bg-dark",
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw",
          }}
        ></div>
      </div>
    );
  }
}
export default Contact;
