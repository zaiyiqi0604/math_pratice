
import dog from './img/dog.png';
import './App.css';
import React, {Component} from 'react'
class App extends Component{
  render(){
    var RandomNumber1 = Math.floor(Math.random() * 9) + 1; 
    var RandomNumber2 = Math.floor(Math.random() * 9) + 1; 
    console.log (RandomNumber1);
    console.log (RandomNumber2);
    var total= RandomNumber1*RandomNumber2;
    console.log (total);
        const rows = [];
        for (let i = 0; i < total; i++) {
          rows.push(<img key={i} id={i} src={dog} className="item" alt="item" />);
        }
        
      return (
        
          <div>
             {rows}
          </div>
      )
  }
}
// function App() {



//   return (
  
//     <div className="App">
//       <header className="App-header">
//         <img src={dog} className="item" alt="item" />
//         <p>
//           how many dogs?
//         </p>

//       </header>
//     </div>
//   );
// }

export default App;

// export default function App() {
//   const runCallback = (cb) => {
//     return cb();
//   };

//   return (
//     <div className="App">
//       {runCallback(() => {
//         var RandomNumber1 = Math.floor(Math.random() * 9) + 1; 
//         var RandomNumber2 = Math.floor(Math.random() * 9) + 1; 
//         console.log (RandomNumber1);
//        // console.log (typeof RandomNumber1);
//         console.log (RandomNumber2);
//         var total= RandomNumber1*RandomNumber2;
//         //var total= 16;
//         //const total = [1,5,5,7,1,1,1,1,1,1,1,1];
//        // console.log (total);
//         const row = [];
//         const rowpool = [];
//         console.log (row.length);
//         for (var i = 0; i < RandomNumber1; i++) {
//          // console.log ("beofre push  is" + row);
//           console.log (total);
//           console.log ("current i is " + i);
//            row.push(<img key={i} id={i} src={dog} className="item" alt="item" />);
//            rowpool.push(<li key={i}>{i}</li>);
//            console.log (rowpool[i]);
//            //rowpool.push(i)
//           //row.push(<p key={i}>{i}</p>);
//           //console.log ("after push is " +row);
//           //return rowpool;
//         }
//         console.log ("row is "+ row.length);
        
//        //return row;
//         return rowpool;
//       })
//       }
//     </div>
//   );
// }
