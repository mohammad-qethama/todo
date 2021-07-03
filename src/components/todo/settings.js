 import React,{useContext} from 'react';
 import {SettingContext} from '../../context/todo/settings-context.js';
 import {Button,Dropdown} from 'react-bootstrap' ;
 import { If, Else, Then } from 'react-if';
 import {LoginContext} from '../auth/context';

// import { render } from 'node-sass';

const SettingsPage = (props)=>{
  const settings= useContext(SettingContext);
  const context = useContext(LoginContext);

  
  const _toggleVisibility= (e)=>{
      e.preventDefault()
      settings.setShowCompleted(!settings.showCompleted)
  }
  const changeOrder = (ek,e)=>{
    e.preventDefault()
    console.log(e.target.value)
    settings.setDifficulty(e.target.value)
}
  const ChangeItemsNum = (e)=>{
    // console.log(typeof parseInt(e.target.value, 10),parseInt(e.target.value, 10) )
    let value = parseInt(e.target.value, 10);
    if(value){
    settings.setItemPerPage(value)
  }

  }
  return(
    
    <div>
        <If condition={context.loggedIn}>
       <Then>
      <div>
       <Button onClick = {_toggleVisibility} > {(settings.showCompleted)? 'Hide Completed':'Show Completed' }</Button>
      </div>
    <div>
   <Dropdown >
     <Dropdown.Toggle variant="success" id="dropdown-basic">
      Order By Difficulty  
    </Dropdown.Toggle>
     <Dropdown.Menu>
      <Dropdown.Item onSelect={changeOrder} as= "button"  value = 'Descending'>Ascending</Dropdown.Item>
      <Dropdown.Item onSelect={changeOrder} as = "button" value = 'Ascending'>Descending</Dropdown.Item>
     </Dropdown.Menu> 
    </Dropdown>
    </div>

    <div>
    <label htmlFor="Rap"> Number of Results Per Page</label>
    <input name='Rap' type="number" min={1} max={10} placeholder="input a number between 1 and 10" onChange={ChangeItemsNum}></input>
    
    </div>
    </Then>
    <Else>
        <></>
      </Else>
      </If>
  
  </div>



    
  )
}

export default SettingsPage ;