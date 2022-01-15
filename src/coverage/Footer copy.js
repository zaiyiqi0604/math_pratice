import dog from '../img/dog.png';
import React, { Component } from 'react'
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    //var total ;
    //alert('A answer was submitted: ' + this.state.value);
    //console.log(<Content total={total} />);
    if(this.state.value = 23 ){
      console.log("correct");
    }
    event.preventDefault();
  }

  render() {
    const greeting = 'Welcome to React';
    return (
      <div>
     <Greeting greeting={greeting} />
     <Content />
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
const Greeting = props => <h1>{props.greeting}</h1>;

class Content extends Component {
  
  render() {
    var RandomNumber1 = Math.floor(Math.random() * 9) + 1;
    var RandomNumber2 = Math.floor(Math.random() * 9) + 1;
    console.log(RandomNumber1);
    console.log(RandomNumber2);
    //var total = RandomNumber1 * RandomNumber2;
    const total =  RandomNumber1 * RandomNumber2;
  
    //console.log(total);
    const rows = [];
    for (let i = 0; i < total; i++) {
      if (i % RandomNumber2 == 0) {
        rows.push(<div key={total + i} id={total + i} className='clear'></div>);
      }
      rows.push(<img key={i} id={i} src={dog} className="item" alt="item" />);
    }
    return (
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
    )
  }
}


export default NameForm;