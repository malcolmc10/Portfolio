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
        <div className="my-5 mx-auto max-w-xl shadow-md p-8 bg-white overflow-hidden content-center rounded-l-md rounded-r-lg">
            <h1 className="font-bold text-xl text-center mb-4">Let's Stay in Contact!</h1>
        <label className="text-lg font-bold ">Name:</label><br></br>

        <input type="text" name="name" className="border-2 "></input><br></br>

        <label className="text-lg font-bold mt-2">Email:</label><br></br>

        <input type="email" name="email" className="border-2 mt-2"/><br></br>

        <label className="text-lg font-bold mt-2">Message:</label><br></br>

        <textarea type="text" name="message" className="h-32 border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none mt-2"/><br></br>

        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline">Submit</button>}
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