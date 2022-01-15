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
    var RandomNumber1 = Math.floor(Math.random() * 9) + 1;
    var RandomNumber2 = Math.floor(Math.random() * 9) + 1;
    // console.log(RandomNumber1);
    // console.log(RandomNumber2);
    this.state.total = RandomNumber1 * RandomNumber2;
    this.state.rows = [];
    for (let i = 0; i < this.state.total; i++) {
      if (i % RandomNumber2 == 0) {
        this.state.rows.push(<div key={this.state.total + i} id={this.state.total + i} className='clear'></div>);
      }
      this.state.rows.push(<img key={i} id={i} src={dog} className="item" alt="item" />);
    }

  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="item-wrap col-12 col-md-12">
              <div className="item-content"> {this.state.rows} </div>
            </div>
            <div className="col-12 col-md-12">
              <h2> How many dogs ? {this.state.total}</h2>
            </div>
          </div>
        </div>
        {/* <Answer /> */}
        <Answer dataFromParent={this.state.total} />
      </div>
    )
  }
}
export default Content;