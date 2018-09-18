import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.cf = null; // <-- Conversational Form ref
  }

  componentDidMount() {
    // customize your questions here
    this.refs.name.setAttribute('cf-questions', "What is your name?");
    this.refs.email.setAttribute('cf-questions', "What is your email?");
    this.refs.description.setAttribute('cf-questions', "Describe your requirement");
    //this.refs.message.setAttribute('cf')
  }

  componentDidMount() {
    // customize your questions here
    this.refs.name.setAttribute('cf-questions', "What is your name?");
    this.refs.email.setAttribute('cf-questions', "What is your email?");
    this.refs.description.setAttribute('cf-questions', "Describe your requirement");

    this.cf = window.cf.ConversationalForm.startTheConversation({
      formEl: this.refs.form,
      context: document.getElementById("cf-context"), // <-- bind this to an element instead of html body
      flowStepCallback: (dto, success, error) => {
        success();
      },
      submitCallback: () => {
        // action when form submitted
        console.log("Form submitted...");
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <body>
          <div class='form-outer'></div>
          <div>
            <h2>Conversational Form</h2>
            <div id="cf-context" > {/* <-- the cf form will be bound to this element */}
              <form id="form" className="form" ref="form" style={{paddingTop: 50, height: 400, width: 800}}>
                <input type="text" ref="name" placeholder="Name" defaultValue={this.props.name} />
                <input type="email" ref="email" placeholder="Email" defaultValue={this.props.email} />
                <select ref="description" type="radio" id="links"> {/* <-- using selection for options */}
                  <option value="request_1">Request 1</option>
                  <option value="request_2">Request 2</option>
                </select>
                {/* <text ref='message`' /> */}
              </form>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
