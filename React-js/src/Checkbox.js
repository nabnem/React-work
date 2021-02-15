import  { Component } from 'react';



class Checkbox extends Component {
constructor() {
  super()
  this.state = {
    check : true

  }
}

Hello = () => {
  console.log('Hello!')
}

checkBoxTest= () =>{
  this.setState ({
    check:!this.state.check 
  })
  console.log(!this.state.check)
}
 render() {
  return (
    <div >
      
      <button onClick={this.checkBoxTest}>Press!</button>
        <input type="checkbox" checked={this.state.check}
        onChange={this.checkBoxTest}></input>
      
    </div>
  );
  }
}
export default Checkbox;