import React, {Component} from 'react';
import From from './Page 1/From';
import './App.css';
import Create from './Page 2/Todo';



class App extends Component {
  constructor(){
    super();
    this.state = {
      route : 'completed'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
    }

  render(){

    return(
      <div>
        {this.state.route === 'completed' ? 
        <From onRouteChange={this.onRouteChange} /> :
        <Create onRouteChange={this.onRouteChange}/>
      }
      </div>
    );
    }
  }

export default App;