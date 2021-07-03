import React,{useState} from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import axios from 'axios';

const API ="https://api-js401.herokuapp.com";
// console.log('API',API)

export const LoginContext = React.createContext();

const LoginProvider = (props)=>{
  const [loggedIn, setLoggedIn] = useState(false)

  const [user, setUser] = useState({})

  
  const login = (username,password)=>{
    axios.post(`${API}/signin`,{ } ,{
      headers:{
              mode:'cors',
              cache:'no-cache',
              
            },
            auth: {
              username: `${username}`,
              password: `${password}`
            }
      })
        .then(response => validateToken(response.data.token))
        .catch(console.error);
      }

      
  
  const signup = (username,password,email,role)=>{
    let newUser = {
      username: username,
      password: password,
      email:`${email}`,
      role: role,
    }
    // console.log('fromContext',newUser)
    axios.post(`${API}/signup`, newUser ,{
     
      headers:{ 
        mode: 'cors',
        cache: 'no-cache',
        'Content-Type': 'application/json' }
    })
  
 
        .then(response => validateToken(response.data.token))
        .catch(console.error);
      }



  const validateToken = token => {
    try {
      // console.log(token)
      let user = jwt.decode(token);
      // console.log(user);
      setLoginState( !!user, token, user);
    }
    catch (e) {
      setLoginState(false, null, {});
      console.log('Token Validation Error', e);
    }

  };
  const logout = () => {
    setLoginState(false, null, {});
  };
  
  const setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    setLoggedIn(loggedIn)
    setUser(user)
    
  };
  
  
  const state = {
    loggedIn,
    login,
    logout,
    user,
    signup,
  }
  return (
    <LoginContext.Provider value={state}>
        {props.children}
      </LoginContext.Provider>
    );
    
    
  }

export default LoginProvider;
