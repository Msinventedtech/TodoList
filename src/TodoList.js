import React, {Component, useState} from 'react';
import From from './Page 1/From';
import './App.css';
import Create from './Page 2/Todo';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      route : 'completed',
      valueChange :''
    }
  }


  onRouteChange = (route) => {
    this.setState({route: route});
    }

  onInputChange = (event) => {
      this.setState({valueChange: event.target.value});
    }
   

  render(){
    return(
      <div>
        {this.state.route === 'completed' ? 
        <From  onInputChange={this.onInputChange}  onRouteChange={this.onRouteChange}  /> :
        <Create  inputList = {this.state.valueChange} onRouteChange={this.onRouteChange}/>
      }
      </div>
    );
    
  }
  }

export default App;