import  { Component } from 'react';




class Input extends Component {
    constructor() {
      super();
      this.state = {
        value: ""
      };
    }
  inputCopy =(form) => {
    this.setState({value: form.target.value})
  }
    render(){
    return (
      <div >
        <input value={this.state.value} type="text"onChange={this.inputCopy} />
       <input value={this.state.value} type="text" onChange={this.inputCopy}  />
      </div>
    );
  }
  }
  export default Input;