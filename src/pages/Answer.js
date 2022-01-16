import correct from '../img/oh-yeah-dance.gif';
import wrong from '../img/oh-no-centilia.gif';
import cheering from '../img/cheering.mp3';
import oh_no from '../img/oh-no.mp3';
import React, { Component } from 'react'
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      rewards: '',
      playAudio: ''
    };
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

      this.setState({
        rewards: <img key={this.state.value} src={correct} className="" alt="item" />,
        playAudio: new Audio(cheering).play()
      });

    } else {

      console.log("wrong");

      this.setState({
        rewards: <img key={this.state.value} src={wrong} className="" alt="item" />,
        playAudio: new Audio(oh_no).play()
      });

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
        {this.state.rewards}
        {/* The result from parent is:{this.props.dataFromParent} */}
        {this.playAudio}
      </div>
    );
  }
}



export default NameForm;