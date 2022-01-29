import correct from '../img/oh-yeah-dance.gif';
import welldone from '../img/great-job-well-done.gif';
import wrong from '../img/oh-no-centilia.gif';
import cheering from '../img/cheering.mp3';
import oh_no from '../img/oh-no.mp3';
import React, { Component } from 'react'
class AnswerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      rewards: '',
      playAudio: '',
      correct: '',
      rewardsInRow: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state.correct = 0;
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    //console.log(this.props.dataFromParent);

    console.log(this.state.correct);

    if (this.state.value == this.props.dataFromParent) {

      // console.log("correct");

      this.setState({
        rewards: <img key={this.state.value} src={correct} className="" alt="item" />,
        //playAudio: new Audio(cheering).play(),
        correct: this.state.correct + 1
      }, function () {
        // console.log(this.state.value);
        console.log("latest correct" + this.state.correct);
        let speech = new SpeechSynthesisUtterance();
        speech.lang = "en-US";
        speech.text = 'Well done Emily. you already correct ' + this.state.correct + 'times';
        speech.volume = 2;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
        if (this.state.correct === 3) {
          this.setState({
            rewardsInRow: <img key={this.state.correct + 1} src={welldone} className="" alt="item" />
          });
        }

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
        <h2>  You already correct: {this.state.correct} times!</h2>
        <form onSubmit={this.handleSubmit} className='d-flex align-items-center'>
          <div className="col-auto">
            <label>Your Answer is:</label>
          </div>
          <div className="col-auto">
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div className="col-auto">
            <button className='btn btn-primary' type="submit"> Submit</button>
          </div>
        </form>
        {this.state.rewards}
        {/* The result from parent is:{this.props.dataFromParent} */}
        {this.playAudio}
        {this.state.rewardsInRow}
      </div>
    );
  }
}
export default AnswerForm;