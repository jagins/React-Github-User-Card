import React, {Component} from 'react';
import axios from 'axios';
import Card from './Componets/Card';
import './App.css';

class App extends Component
{
  state = {
    img: '',
    username: '',
    name: '',
    location: '',
    profile: '',
    followersCount: 0,
    followingCount: 0,
    bio: ''
  }
  componentDidMount()
  {
    axios.get('https://api.github.com/users/jagins')
    .then(response =>{
      this.setState({
        img: response.data.avatar_url
        
      });
    })
    .catch()
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
