import React from 'react'
import {useState, useEffect} from "react";
function MainForm({setTodos, todolist, setCurrentList, currentList}) {

    const defaultInput = {todo: "", isDone: false, id:1}
    const [form, setForm] = useState(defaultInput)
    
    const onSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(form.todo === ""){
            alert("Boş form submitleyemezsiniz")
            return false;
        }else{
            setTodos([...todolist, form])
            setCurrentList([...todolist, form]);
            setForm(defaultInput)
        }
       
    }


    const deleteTask = currentId => {
        let removoTodoItem = [...todolist].filter(todo => todo.id !== currentId);
        setTodos(removoTodoItem);
        let removoCurrentListItem = [...currentList].filter(todo => todo.id !== currentId);
        setCurrentList(removoCurrentListItem);
    }

    const onChangeInput = (e) => {
        e.preventDefault();

        setForm({
            todo: e.target.value,
            isDone:false,
            id: Math.floor(Math.random()*1000)
        });
    }
    
    const compFunc = (currentId) => {
        // e.preventDefault();
        let updatedTodos = todolist.map(todo => {
            if(todo.id === currentId ) {
                todo.isDone = !todo.isDone
              }
              return todo
          })
          setTodos(updatedTodos);
        
    }

    return (
        <>
            <header className='header'>
                <h1>todos</ h1>
                <form onSubmit={onSubmit}>
                    <input className="new-todo"  onChange={onChangeInput}  placeholder="What needs to be done?" value={form.todo} name='content' autoFocus/>
                </form>
            </header>


            <section className='main'>

                <input className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all">
			    {"Mark all as complete"}
		        </label>
                <ul className="todo-list">
                    
               
                    
                        
                    {todolist.map((t) => (
                        (<li key={t.id} className={t.isDone ? "completed": "active"}> 
                            <div className="view">
                                <input className="toggle" type="checkbox" onClick={()=> compFunc(t.id)}/>
                                <label>{t.todo}</label>
                                <button onClick={()=> deleteTask(t.id)} className='destroy'></button>
                            </div>
                        </li>)
                    ))}
		        </ul>

            </section>
            

        </>  
        
    )
}

export default MainForm