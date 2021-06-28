import React from 'react';
import {Toast , Badge} from 'react-bootstrap';
import './list.scss';

const TodoList = (props) =>{
    return (
      <div>
        {props.list.map(item => (
          <Toast
            onClose = {()=>props.handleDelete(item._id)}
            // className={`complete-${item.complete.toString()}`}
            key={item._id}
            
          >
            <Toast.Header closeLabel = 'DeleteTask'>
              <Badge pill 
              variant = {item.complete?'danger':'success'}  
              onClick={() => props.handleComplete(item._id)}
              >  
              {item.complete?'Completed':'Pending'}
              </Badge>
              <strong>{item.assignee}</strong>
            </Toast.Header>
            <Toast.Body>
            <div className = 'toastBody'>
              <span>
                {item.text}
                </span>
              <small>
              Difficulty:{item.difficulty}
              </small>
            </div>
            </Toast.Body>
          </Toast>
        ))}
      </div>
    );
}

export default TodoList;
