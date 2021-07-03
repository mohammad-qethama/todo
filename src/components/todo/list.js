import React ,{useContext,useState,useEffect}from 'react';
import {Toast , Badge,Button} from 'react-bootstrap';
import './list.scss';
import {SettingContext} from  '../../context/todo/settings-context.js' ;


const TodoList = (props) =>{
  const settingContext = useContext(SettingContext);
  const [firstIndex, setFirstIndex] = useState(0);
  let x = props.list.length

  const [stopIndex, setStopIndex] = useState(settingContext.itemPerPage);

  const nextPage = () => {
    if(stopIndex < x ){

    setFirstIndex(firstIndex+settingContext.itemPerPage);
    setStopIndex(stopIndex+settingContext.itemPerPage);
  }

  }
  const prevPage = () => {
    if(firstIndex > 0){
    setFirstIndex(firstIndex-settingContext.itemPerPage);
    setStopIndex(stopIndex-settingContext.itemPerPage);
  }
}

useEffect(()=>{
  setStopIndex(firstIndex+settingContext.itemPerPage);


},[settingContext.itemPerPage,firstIndex])
    return (
      <div>
        <div hidden>

        {x = props.list.length}
        </div>
        {props.list
        .filter(item=>(settingContext.showCompleted)? true : !item.complete)
        .sort((a,b) =>{
          let x;
          (settingContext.difficulty === 'Ascending') ? x = -1 : x = 1 ;
          if (a.difficulty>b.difficulty) {return x}
          if (a.difficulty<b.difficulty) {
            return(x*(-1));
          }else{ return 0}
        }).slice(firstIndex,stopIndex)
        .map(item => (
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

        <div className = 'buttons'>

        <Button onClick={nextPage} > Next </Button>
        <Button onClick={prevPage}> Previous </Button>

        </div>

      </div>
    );
}

export default TodoList;
