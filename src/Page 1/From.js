import React from "react";
import './From.css';


const options =[
    {
        label: 'High',
        value: 'high'
    },
    {
        label: 'Medium',
        value: 'medium'
    },{
        label: 'Low',
        value: 'low',
    },
]



const From = ({onInputChange, handleChange, onRouteChange}) => {
    return (    
     <div className="content-container"> 
      <div className="row">      
       <div className="left-panel box">
       <h1 className='ma0 pa0 tc  fw5 txt'>Completed List</h1>          
        </div> 

       <div className="right-panel box">
         <h1 className='ma0 pa0 tc f3 fw6'>Create Your Shopping List</h1>
           <div className= 'tc'>
             <input className ='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50' 
               type='text' 
               placeholder="Create Your Category"  
               onChange={onInputChange}  
             /></div>
        <div className='tc pa2'>
                <span className='ma2 f5'> Priority
                <select onChange={handleChange}>
                    {options.map((option) => (<option value={options.value}>{option.label}</option>))}
                </select>
                </span>
                <button className='tc btn btn-primary btn-xl' onClick={()=>onRouteChange ('home')} >Create</button> 
            </div>
        </div>      
       </div>
      </div>
    );
}

export default From;