import React, {Component} from 'react';
import axios from 'axios';
import Card from './Componets/Card';
import './App.css';

class App extends Component
{
  state = {
    img: '',
    username: '',
    profile: '',
    followers: [],
    followersCount: 0,
    followingCount: 0,
    bio: ''
  }
  componentDidMount()
  {

  }

  fetch = () =>
  {

  }

  render()
  {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
