import React from "react";
import './From.css';


const options =[
    {
        label: '',
        value: ''
    },
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
     <div> 
       <div>
         <h1 className='ma0 pa0 tc f3 fw6'>Create Your Todo Task List</h1>
           <div className= 'tc'>
             <input className ='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50' 
               type='text' 
               placeholder="Create Your Category"  
               onChange={onInputChange}  
             /></div>
        <div className='tc pa2'>
                <span className='ma2 f5'> Priority
                <select 
                onChange={handleChange}>
                    {options.map((option) => (<option value={options.value}>{option.label}</option>))}
                </select>
                </span>
                <button className='tc btn btn-primary btn-xl' onClick={()=>onRouteChange ('home')} >Create</button> 
            </div>
        </div>      
       </div>
    );
}

export default From;