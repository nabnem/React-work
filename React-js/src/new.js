import  { Component } from 'react';

class App extends Component {
  constructor(){
    super();
      this.state={skake:true};
      }
    

  Neymar=()=>{
    console.log('hello')
  }


  render(){
    return(
    <div>
      <button onClick={this.Neymar}>click</button>
      <input type="checkbox"checked={this.state.skake}></input>
    </div>
    )
   } 
}