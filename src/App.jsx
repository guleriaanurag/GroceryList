import { useState } from 'react'
import List from './components/List'
import './App.css'

function App() {
  const [contentArr, setContentArr] = useState([])
  const [name,setName] = useState('')
  const [quant,setQuant] = useState(0);

  const handleName = (e)=>{
    setName(e.target.value);
  }

  const handleQuant = (e)=>{
    setQuant(e.target.value);
  }

  const handleDelete = (id)=>{
    setContentArr((prevArr)=>{
      return prevArr.filter((item,index)=>index!==id)
    })
  };

  const handleClick = ()=>{
    const product = {name:name,quantity:quant};
    setContentArr((prevArray)=>[...prevArray,product])
    setName('')
    setQuant(0)
  }

  return (
    <div className='main'>
      <h2>Grocery List</h2>
        <div>
          <input type='text' placeholder='Add Item' onChange={handleName} value={name}/>
          <input type="number" placeholder='Add quantity' min={0} step={0.25} value={quant} onChange={handleQuant}/>
          <button className='hover-btn' onClick={handleClick} title='Add Item'>+</button>
        </div>
        <List contentArr={contentArr} deleteClicked={handleDelete}/>
    </div>
  )
}

export default App
