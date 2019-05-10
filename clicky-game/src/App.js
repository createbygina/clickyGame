import React, {Component} from 'react';
import Card from "./components/Card";
import Jumbo from "./components/Jumbo";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import data from "./data.json"
import Wrapper from "./Wrapper"
import './App.css';



class App extends Component {
  state = {
    data
  }

  
  render() {
  
    return (
   <Wrapper>
    <Nav />
    <Jumbo />
  
  <div className="grid">
  {
    this.state.data.map(data => (
    <Card 
        id = {data.id}
        img = {data.img}
        key = {data.id}
  
  />
  )) 
   }
  </div>

  </Wrapper>
    
  )
}
}

export default App;
