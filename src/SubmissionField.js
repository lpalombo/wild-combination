import React, { Component } from 'react';
import './SubmissionField.css';
//import Card from './Card';

class SubmissionField extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = () => {this.props.submitHandler(this.state.value) }

  render() {
    return (
      <div className="submissionfield">
        <textarea className="input-field" value={this.state.value} onChange={this.handleChange} />
        <button className="submit-button" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default SubmissionField;
