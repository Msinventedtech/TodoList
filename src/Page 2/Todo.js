import React from "react";

class Todo extends React.Component {
constructor(props) {
  super(props);
    this.state ={
      signInEmail:'',
    }
}


onSubmitSignIn =() => {
  }

onSubmitRemove =() => {
  }

  render() {
    const {onRouteChange} = this.props;
    return (

        <div className="content-container"> 
        <div className="row">      
            <div className="left-panel box">
              <h1 className='ma0 pa0 tc  fw5 txt'>Completed List</h1>          
            </div> 
  
            <div className="right-panel box">
                <article className="br3 ba b--black-10 mv4  w-75-l mw6 shadow-3 center">
                  <main className="pa4 black-80">
                    <div className="measure">
                    <legend className="f3 fw6 ph0 mh0">Name of the List</legend>
                
                    </div>
                    <div className="mv3">
                    <label className="db fw6 lh-copy f6">1.Pencil</label>
                    <input 
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    name="password"  
                    id="password"
                    onChange={this.onPasswordChange}
                    />
                    </div>
                
                    <div className="">
                    <input 
                            onClick={this.onSubmitSignIn}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Add"/>
                       <input 
                            onClick={this.onSubmitRemove}
                            className="b ma2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Remove"/>
                    </div>
                    <p onClick={()=>onRouteChange ('completed')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Completed</p>
                  </main>
                </article>     
            </div>      
        </div>
    </div>    
    );
  }
}

export default Todo;