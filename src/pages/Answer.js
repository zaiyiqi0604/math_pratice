import dog from '../img/dog.png';
import React, { Component } from 'react'
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.props.dataFromParent);
    if (this.state.value == this.props.dataFromParent) {
      console.log("correct");
    } else {
      console.log("wrong");
    }
    event.preventDefault();
  }

  render() {

    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <label>
            Your Answer is:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        The result from parent is:{this.props.dataFromParent}
      </div>
    );
  }
}



export default NameForm;