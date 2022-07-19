import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  return (
    <div>
      <form>
        <label htmlfor='id'>ID</label>
        <input type='text' id='id' name='ID'/>
        <br/>
        <label htmlfor='password'>Password</label>
        <input type='password' id='password' name='Password'/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
