import React from 'react'
import TodoForm from './form.js';
import TodoList from './list.js';
import { Navbar } from 'react-bootstrap';
import useAJAX from '../../hooks/todo/AJAX-hook.js';

import './todo.scss';



const ToDo = () => {

  const [list,_getTodoItems, _toggleComplete, _addItem,_deleteComplete]= useAJAX()
  return (
    <>
      <header>
      <Navbar bg='dark'>

        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
        </Navbar>

      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            handleDelete = {_deleteComplete}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
