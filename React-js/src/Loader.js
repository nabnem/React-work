import  { Component } from 'react';
import ReactLoading from 'react-loading';




class Loader extends Component {
  
    constructor() {
    super()
    this.state = { loading:false}
  }
 loadData = () =>{
 this.setState({loading : true});
 setTimeout(() => {
    this.setState({loading : false})
 }, 5000);
 }
  render(){
    const {loading} = this.state;
  return (
    <div >
     
      {loading ? "":
        (<button onClick={this.loadData} >Appuie</button>)}
        {loading ? <ReactLoading type={"bars"} color={"white"} />
       : ''}
      
    </div>
  );
}
}
export default Loader;