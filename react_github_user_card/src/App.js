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
        img: response.data.avatar_url,
        username: response.data.login,
        name: response.data.name,
        location: response.data.location,
        profile: response.data.html_url,
        followersCount: response.data.followers,
        followingCount: response.data.following
      });
    })
    .catch(err => console.log('Something went wrong: ', err));
  }

  fetch = () =>
  {

  }

  render()
  {
    return (
      <div className="App">
        <Card 
          img={this.state.img}
          username={this.state.username}
          name={this.state.name}
          location={this.state.location}
          profile={this.state.profile}
          followersCount={this.state.followersCount}
          followingCount={this.state.followingCount}/>
      </div>
    );
  }
}

export default App;
