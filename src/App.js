import React, {useState} from 'react';
import './App.css';

function App() {
  const [data, setdata] = useState('')
  const [state, setstate] = useState([])
  const add =()=>{
        setstate([...state,data]);
        setdata('');
  }
  const eventHandler=(event)=>{
    setdata(event.target.value)
  }
  const deleteitem=(key)=>{
    setstate(state.filter((s,k)=>{return k!==key}))
  }
  return (
    <div className="App">
    <h1 style={{color:'#05386B', textAlign:'center'}}> To-DO LISTS</h1>
    <div className="input-group mb-3">
  <input type="text" onChange={eventHandler} value={data} className="form-control" placeholder="ADD ITEM IN THE LIST" aria-label="Recipient's username" aria-describedby="button-addon2" />
  
  <button onClick={add} className="btn btn-outline-secondary " style={{backgroundColor:'brown', color:'white', marginLeft:'1em'}} type="button" id="button-addon2">+</button>
  </div>
     <ul style={{listStyleType:'square'}}>
       {
         state.map((i,key)=>{
           return <li className="text-monospace" style={{textAlign:'left' ,marginBottom:'2em', border:'3px solid black', backgroundColor:'#EDF5E1'}}><button style={{backgroundColor:'#8EE4AF', border:'3px solid brown'}} className='btn  btn-xs pull-right'  onClick={()=>{deleteitem(key)}}>DELETE</button><br />{i}</li> 
         })
       }
     </ul>DDD dd
     </div>
   

  );
}

export default App;
