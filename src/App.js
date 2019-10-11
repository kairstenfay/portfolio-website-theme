import React from 'react';
import logo from './logo.svg';
import './App.css';
import profilePicture from './me.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header thumbnail">
        <h1>Hi, I'm Kairsten</h1>
        <nav>
          <li>home</li>
          <li>about</li>
          <li>cv</li>
          <li>blog</li>
          <li><a href="mailto:kairsten.fay@gmail.com">email</a></li>
          <li><a href="https://github.com/kairstenfay">github</a></li>
          <li><a href="https://linkedin.com/in/kairsten-fay">linked in</a></li>
          <li><a href="https://twitter.com/databae_">twitter</a></li>
        </nav>
        <img id="profile-pic" src={profilePicture} alt="My face" />
      </header>

      <div id="thumbnails">
        <div className="thumbnail-shadow">
          <div id="about" className="thumbnail">
            <p>
                My name's Kairsten (<em>CARE-stin</em>).
                I'm a full stack developer interested in data visualization and UI/UX design.
                I currently work at <a href="http://fredhutch.org">Fred Hutch</a> in the
                <a href="http://bedford.io">Bedford Lab</a> as a contributor to both <a href="http://nextstrain.org">Nextstrain</a>
                and the <a href="http://seattleflu.org">Seattle Flu Study</a>.
                I previously worked at <a href="http://www.healthdata.org">IHME</a> as a full stack developer and a
                data analyst on the <a href="http://nutrition.healthdata.org">dietary risk factors</a> team.
            </p>
            <p>
                I am an autodidact who used free and online resources to learn to code after receiving a Bachelor's degree in Biology.
                When I'm not programming, I enjoy cooking, playing tabletop games, weightlifting, climbing, and reading sci-fi or fantasy.
                I grew up on the East coast and am currently based in Seattle.
            </p>
            <p>
                I occasionally do freelance Tableau dashboard development.
                Please <a href="mailto:kairsten.fay@gmail.com">email me</a> to schedule an informational.
                Thanks for visiting my website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
