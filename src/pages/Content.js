import dog from '../img/dog.png';
import React, { Component } from 'react'
class Content extends Component {
    render() {
        var RandomNumber1 = Math.floor(Math.random() * 9) + 1;
        var RandomNumber2 = Math.floor(Math.random() * 9) + 1;
        console.log(RandomNumber1);
        console.log(RandomNumber2);
        var total = RandomNumber1 * RandomNumber2;
        //console.log(total);
        const rows = [];
        // for (let i = 0; i < RandomNumber1; i++) { // for (let k=0; k < RandomNumber2; k++) { // rows.push(<img key={k} calss={k} src={dog} className="item" alt="item" />);
        // }
        // rows.push(<div className='clear'></div>);
        // }
        for (let i = 0; i < total; i++) {
            if (i % RandomNumber2 == 0) {
                rows.push(<div key={total + i} id={total + i} className='clear'>
                </div>);
            } rows.push(<img key={i} id={i} src={dog} className="item" alt="item" />);
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="item-wrap col-12 col-md-12">
                            <div className="item-content"> {rows} </div>
                        </div>
                        <div className="col-12 col-md-12">
                            <h2> How many dogs ? </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Content;