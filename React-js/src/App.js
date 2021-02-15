import React from 'react'
import './App.css';
import  { Component } from 'react';
import Loader from './Loader';
import Input from './Input';
import Checkbox from './Checkbox';
import Docs from './Components/Docs';
import Tutorial from './Components/Tutorial';
import Community from './Components/Community';
import Menu from './Components/Menu';
import { BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
 
 
 
  render () {
  return (
    
      <div>
    <BrowserRouter>
      <Menu />
      

      <Route  exact path="/" component={Docs} />
      <Route path="/tutorial" component={Tutorial} />
      <Route path="/community" component={Community} />
      
     </BrowserRouter>
    <div className="App" >
      
      <Checkbox />
     <Loader />
    <Input />
</div>
    </div>
    
  );
}
}

export default App;

