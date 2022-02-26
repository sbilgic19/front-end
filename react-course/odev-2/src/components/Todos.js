import React from 'react'
import MainForm from './FormComponents/MainForm'
import FooterForm from './FormComponents/FooterForm'
import {useState, useEffect} from 'react';
function Todos() {

    const [todos, setTodos] = useState([
      {
        todo: "I'm learning React",
        isDone: false,
        id: 1
      },
      {
        todo: "I'm learning JS",
        isDone: false,
        id: 2
      },
    ]);
    const [currentList,setCurrentList] = useState([...todos])
    


  return (
    
    <section className='todoapp'>
        <MainForm setTodos={setTodos} todolist={todos} setCurrentList={setCurrentList} currentList={currentList}/>
        <FooterForm todolist={todos} setTodos={setTodos} setCurrentList={setCurrentList} currentList={currentList}/>
    </section>
  )
}

export default Todos