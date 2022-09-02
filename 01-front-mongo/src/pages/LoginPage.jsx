import { useState} from 'react'

const LoginPage = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const onInputChange = (event) => {
    const {name, value} = event.target;
    if (name==='userEmail') {
      setEmail(value);
     } else if ( name==='userPassword'){
      setPassword(value);
      }
    }


  return (
    <>
      <h2>
        Login Page
      </h2>
      <hr />
      <form>
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
                name="userpassword"
                value={ password} 
                onChange={ onInputChange }      
          />
        </div>
        <div className="mb-3 form-check">
        </div>
        <button className="btn btn-outline-primary">Login</button>
      </form>

    </>
  )
}

export default LoginPage