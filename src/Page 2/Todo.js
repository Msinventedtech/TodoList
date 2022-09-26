import React from "react";
import TodoItems from "./TodoItems";


class Todo extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    items: []
  };  
  this.addItem = this.addItem.bind(this);
  this.deleteItem = this.deleteItem.bind(this);
}

addItem(e) {
  if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };
 
    this.setState((prevState) => {
      return { 
        items: prevState.items.concat(newItem) 
      };
    });
   
    this._inputElement.value = "";
  }
   
  console.log(this.state.items);
     
  e.preventDefault();
}


deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });
 
  this.setState({
    items: filteredItems
  });
}

  render() {
    const {onRouteChange} = this.props;
    return (

        <div>
            <div>
              <h1 className='ma0 pa0 tc f3 fw6'>Create Your Shopping List</h1>
                  <main className="pa4 black-80">
                    <div className="measure">
                    <legend className="f3 fw6 ph0 mh0">{this.props.inputList} Priority: {this.props.inputPriority}</legend>
                
                    </div>
                    <div className="mv3">
                    <legend className="f5 fw6 ph0 mh0">{this.userInput}</legend>
                    <form onSubmit={this.addItem}>
                    <input 
                    className ='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50'
                    ref={(a) => this._inputElement = a} 
                     placeholder="enter task">
                    </input>
                    <button 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit">Add</button>
                    </form>
                    </div>
                    <TodoItems entries={this.state.items}
                               delete={this.deleteItem}/>
                    <p onClick={()=>onRouteChange ('completed')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Create New TodoList!!!!</p>
                  </main> 
            </div>      
        </div> 
    );
  }
}

export default Todo;