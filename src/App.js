
import React from 'react'
import "./index.css"
function App() {
  return (
    <div>
    <h1>Login</h1>
    <h3>Login into your account</h3>
      <form>
        <label htmlfor='id'>ID</label>
        <input type='text' id='id' name='ID'/>
        <br/>
        <label htmlfor='password'>Password</label>
        <input type='password' id='password' name='Password'/>
        <br/>
        <button>Login</button>
      </form>
    </div>
  );
}

export default App;
