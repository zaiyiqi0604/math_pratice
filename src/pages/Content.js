import dog from '../img/dog.png';
import Answer from './Answer';
import React, { Component } from 'react'
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RandomNumber1: '',
      RandomNumber2: '',
      rows: '',
      total: ''
    };

    this.generateDiagram = this.nextQuestion.bind(this);

    this.state.RandomNumber1 = Math.floor(Math.random() * 9) + 1;
    this.state.RandomNumber2 = Math.floor(Math.random() * 9) + 1;
    // console.log(RandomNumber1);
    // console.log(RandomNumber2);
    this.state.total = this.state.RandomNumber1 * this.state.RandomNumber2;
    this.state.rows = [];
    for (let i = 0; i < this.state.total; i++) {
      if (i % this.state.RandomNumber2 === 0) {
        this.state.rows.push(<div key={this.state.total + i} id={this.state.total + i} className='clear'></div>);
      }
      this.state.rows.push(<img key={i} id={i} src={dog} className="item" alt="item" />);
    }

  }
  nextQuestion = () => {
    var RandomNumber1 = Math.floor(Math.random() * 9) + 1;
    var RandomNumber2 = Math.floor(Math.random() * 9) + 1;

    var total = RandomNumber1 * RandomNumber2;
    const rows = [];
    for (let i = 0; i < total; i++) {
      if (i % RandomNumber2 === 0) {
        rows.push(<div key={total + i} id={total + i} className='clear'></div>);
      }
      rows.push(<img key={i} id={i} src={dog} className="item" alt="item" />);
    }
    console.log("gen r1 is " + RandomNumber1);
    console.log("gen r2 is " + RandomNumber2);
    console.log("latest total  is " + total);

    this.setState({
      total: total,
      rows: rows
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2> How many dogs ? {this.state.total}</h2>
          <div className="row">
            <div className="item-wrap col-8 col-md-8">
              <div className="item-content"> {this.state.rows} </div>
            </div>
            <div className="col-4 col-md-4">
              {/* <h2> How many dogs ? {this.state.total}</h2> */}
              You already correct:xxx times
            </div>
            <div className="col-12 col-md-12">
              <Answer dataFromParent={this.state.total} />
              <button className='btn btn-primary' onClick={this.nextQuestion}>
                Next One !
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Content;