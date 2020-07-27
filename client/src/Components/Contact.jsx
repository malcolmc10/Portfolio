import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xrgyrdbl"
        method="POST"
      className="flex justify-center">
        <div className="my-5 mx-auto max-w-xl shadow-md p-8 bg-white overflow-hidden">
        <label>Name:</label>
        <input type="text" name="name"></input><br></br>
        <label>Email:</label>
        <input type="email" name="email" /><br></br>
        <label>Message:</label>
        <input type="text" name="message" /><br></br>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </div>
      </form>
      
    );
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
}