import React from 'react';
import logo from './logo.svg';
import './App.css';
import profilePicture from './me.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, I'm Kairsten</h1>
        <nav>
          <li>home</li>
          <li>about</li>
          <li>cv</li>
          <li>blog</li>
          <li>email</li>
          <li>github</li>
          <li>linked in</li>
        </nav>
        <img id="profile-pic" src={profilePicture} alt="My face" />
      </header>

    </div>
  );
}

export default App;
