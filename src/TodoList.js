import React, {Component} from 'react';
import From from './Page 1/From';
import './App.css';
import Create from './Page 2/Todo';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      route : 'completed',
      valueChange :'',
      Priority : ''
    }
  }


  onRouteChange = (route) => {
    this.setState({route: route});
    }

  onInputChange = (event) => {
      this.setState({valueChange: event.target.value});
    }

   handleChange = (event)=> {
    this.setState({Priority: event.target.value })
    console.log(this.state.Priority)
   } 
   

  render(){
    return(
      <div>
        {this.state.route === 'completed' ? 
        <From  onInputChange={this.onInputChange} handleChange={this.handleChange} onRouteChange={this.onRouteChange}  /> :
        <Create inputPriority={this.state.Priority} inputList = {this.state.valueChange} onRouteChange={this.onRouteChange}/>
      }
      </div>
    );
    
  }
  }

export default App;