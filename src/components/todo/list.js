import React from 'react';
import {ListGroup} from 'react-bootstrap';

const TodoList = (props) =>{

    return (
      <ListGroup>
        {props.list.map(item => (
          <ListGroup.Item
            variant = {item.complete?'danger':'primary'}
            className={`complete-${item.complete.toString()}`}
            key={item._id}
            action
          >
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text} <strong> {item.assignee} </strong>
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
}

export default TodoList;
