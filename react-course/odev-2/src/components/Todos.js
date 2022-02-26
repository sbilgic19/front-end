import React from 'react'
import MainForm from './FormComponents/MainForm'
import FooterForm from './FormComponents/FooterForm'
import {useState, useEffect} from 'react';
function Todos() {

    const inital = [
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
    ]
    const [todos, setTodos] = useState(inital);
    const [currentList,setCurrentList] = useState([...todos])
    
    const setTodoListToLocalStorage = (list) => {
      localStorage.setItem("TODO_STORAGE", JSON.stringify(list));
    };
  
    const getTodoListFromLocalStorage = () => {
      return localStorage.getItem("TODO_STORAGE");
    };
  
    useEffect(() => {
      let TODO_LIST = getTodoListFromLocalStorage();
      if (TODO_LIST === null || TODO_LIST === '[]') {
        setTodos(inital);
        setTodoListToLocalStorage(inital);
      } else {
        try {
          setTodos(JSON.parse(TODO_LIST));
        } catch (error) {
          console.log("We can not get Todo List Data from Local Storage");
        }
      }
    }, []);
    useEffect(() => {
      setTodoListToLocalStorage(todos);
    }, [todos]);

  return (
    
    <>
    <section className='todoapp'>
        <MainForm setTodos={setTodos} todolist={todos} setCurrentList={setCurrentList} currentList={currentList}/>
        <FooterForm todolist={todos} setTodos={setTodos} setCurrentList={setCurrentList} currentList={currentList}/>
    </section>
    <footer>
        {"Created by Serkan Berk "}&#169;
    </footer>
    </>
  )
}

export default Todos