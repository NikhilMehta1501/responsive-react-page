import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import GroupPage from './pages/GroupPage'
import SignupLogin from './components/Authentication/SignupLogin'

function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      <SignupLogin isLoggedIn={isLoggedIn} setIsLoggedIn={ (value)=>setIsLoggedIn(value) }/>
      <Header isLoggedIn={isLoggedIn}/>
      <GroupPage/>
    </div>
  );
}

export default App;
