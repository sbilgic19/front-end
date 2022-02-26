import React from 'react'
import {useState, useEffect} from "react";

function FooterForm({todolist, setTodos, setCurrentList, currentList}) {

    
    // useEffect(()=>{

    //     setCurrentList(todolist)
    
    //   },[todolist])
    const filterFuncComp = (e) => {
        e.preventDefault();
        let complets = currentList.filter(comp => {
            return comp.isDone === true;
        })
        setTodos(complets)
    }
    const filterFuncAct = (e) => {
        let actives = currentList.filter(act => {
            return act.isDone === false;
        })
        setTodos(actives);
    }
    
    
   
    return (
        <footer className='footer'>
      
            <span className="todo-count">
			    <strong>{todolist.length}</strong>
			    {" items left"}
		    </span>

            <ul className="filters">
                <li>
                    <a onClick={() => setTodos([...currentList])} className="selected">All</a>
                </li>
                <li>
                    <a onClick={filterFuncAct} className="active">Active</a>
                </li>
                <li>
                    <a onClick={filterFuncComp} className="completed">Completed</a>
                </li>
		    </ul>

            <button className="clear-completed">
			Clear completed
		    </button>
        </footer>
    )
}

export default FooterForm