import { useState} from 'react'
import { useNavigate } from 'react-router-dom';

import {validarEmail} from "../helpers/validarEmail";

const LoginPage = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const navigate = useNavigate();
  


const onInputChange = (event) => {
    const {name, value} = event.target;
    if (name==='userEmail') {

      setEmail(value);
     } else if ( name==='userPassword'){
      setPassword(value);
      }
    }

const onFormSubmit = (event)=> {
  event.preventDefault();
  if(!validarEmail(email)) return;
  if(password.trim().length <6 ) return;
  console.log( `Email: ${email} password: ${password}`); 



  customFetch('http://localhost:3000/api/usuario/login', [email, password])
  .then(
    (response)=>  response.json()
    )
    .then(data => {
      const {tokenReturn, user  } = data;
      console.log(data);
      localstorage.setItem('token', tokenReturn);
      localstorage.setItem('token-date', new Date().getDate());
      
      navigate('/admin', {replace:true});

      })

  


//const onLoginClick = (event)=>{


const customFetch = async (url, options)=>{
  const [localEmail, localPassword] = options;

  const userData = await fetch (url,{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      },
      mode: 'cors',
    body: JSON.stringify({
      email: localEmail,
      password: localPassword 
      })
  });
  return userData;

} 
}

return (
    <>
      <h2>
        Login Page
      </h2>
      <hr />
      <form onSubmit={onFormSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                name="userEmail"
                value={ email} 
                onChange={ onInputChange }

          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                name="userPassword"
                value={ password} 
                onChange={ onInputChange }      
          />
        </div>
        <button 
        className="btn btn-outline-primary"
        onClick={onInputChange}
        >Login </button>
      </form>

    </>
  )
}
export default LoginPage