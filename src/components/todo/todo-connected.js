import React,{useContext} from 'react'
import TodoForm from './form.js';
import TodoList from './list.js';
import Login from '../auth/login.js' ;
import Auth from '../auth/auth.js';
import SignUp from '../auth/signup.js';
import { Navbar } from 'react-bootstrap';
import useAJAX from '../../hooks/todo/AJAX-hook.js';
import { If, Else, Then } from 'react-if';
import {LoginContext} from '../auth/context';

// import {SettingContext} from  '../../context/todo/settings-context.js' ;

import './todo.scss';



const ToDo = () => {

  const [list,, _toggleComplete, _addItem,_deleteComplete]= useAJAX();
  const context = useContext(LoginContext);
  
  const handleNonAuth = () => {
    console.log('Not Authorized')
  }

  return (
    <>
    <Login /> <SignUp/>
     <If condition={context.loggedIn}>
       <Then>
      <header>
      <Navbar bg='dark'>

        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
        </Navbar>

      </header>

      <section className="todo">

        <div>
        <Auth capability="create">

          <TodoForm handleSubmit={_addItem} />
        </Auth>

        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={  (context.user && context.user.capabilities) ? context.user.capabilities.includes('update')?_toggleComplete:handleNonAuth:handleNonAuth}

            handleDelete = { (context.user && context.user.capabilities) ? context.user.capabilities.includes('delete')?_deleteComplete:handleNonAuth:handleNonAuth}
          />
        </div>
      </section>
      </Then>
      <Else>
        <></>
      </Else>
      </If>
    </>
  );
};

export default ToDo;
