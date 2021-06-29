import React,{useState} from 'react';

export const SettingContext = React.createContext();

const SettingProvider = (props)=>{
  const [showCompleted, setShowCompleted] = useState(false)
  const [difficulty, setDifficulty] = useState('Ascending')
  const [itemPerPage,setItemPerPage] = useState(3)

  const setting = {
    showCompleted,
    difficulty,
    itemPerPage,
    setShowCompleted,
    setDifficulty,
    setItemPerPage
  }

  return(
    <SettingContext.Provider value={setting}>
      {props.children}
    </SettingContext.Provider>
  )
}

export default SettingProvider;