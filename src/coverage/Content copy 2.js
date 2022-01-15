import dog from '../img/dog.png';
import React, { Component } from 'react'
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', total:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});

  }

  handleSubmit(event) {
    //alert('A answer was submitted: ' + this.state.value);
    console.log("handleSubmit total is " + this.state.total);
    console.log("handleSubmit value is " + this.state.value);

    if(this.state.value == this.state.total ){
      console.log("correct");
    }else{
      console.log("wrong");
    }
    event.preventDefault();
  }

  render() {
    const RandomNumber1 = Math.floor(Math.random() * 9) + 1;
    const RandomNumber2 = Math.floor(Math.random() * 9) + 1;
    const total =  RandomNumber1 * RandomNumber2;

    this.state.total = total;
    
    console.log("first state total is " + this.state.total);

    const rows = [];
    for (let i = 0; i < total; i++) {
      if (i % RandomNumber2 == 0) {
        rows.push(<div key={total + i} id={total + i} className='clear'></div>);
      }
      rows.push(<img key={i} id={i} src={dog} className="item" alt="item" />);
    }
    return (
      <div>
      <div>
        <div className="container">
          <div className="row">
            <div className="item-wrap col-12 col-md-12">
              <div className="item-content"> {rows} </div>
            </div>
            <div className="col-12 col-md-12">
              <h2> How many dogs ? {total}</h2>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Your Answer is: 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default NameForm;