import React, { Component } from 'react';
import axios from 'axios';
import Card from './Componets/Card';
import './App.css';

class App extends Component {
  state = {
    img: '',
    username: '',
    name: '',
    location: '',
    profile: '',
    followersCount: 0,
    followingCount: 0,
    bio: '',
    cardArray: [],
    followerArray: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/jagins')
      .then(response => {
        this.setState({
          cardArray: [{
            img: response.data.avatar_url,
            username: response.data.login,
            name: response.data.name,
            location: response.data.location,
            profile: response.data.html_url,
            followersCount: response.data.followers,
            followingCount: response.data.following,
            bio: response.data.bio
          }]
        });
      })
      .catch(err => console.log('Something went wrong: ', err));

    this.createFollowerCard();
  }

  createFollowerCard = () => {
    let followerLinks = [];
    axios.get('https://api.github.com/users/jagins/followers')
      .then(response => {
        this.setState({ followerArray: response.data });
        followerLinks = this.state.followerArray.map(person => {
          return person.url;
        })
        followerLinks.forEach(el => {
          axios.get(el)
            .then(response => {
              this.setState({
                cardArray: [...this.state.cardArray, {
                  img: response.data.avatar_url,
                  username: response.data.login,
                  name: response.data.name,
                  location: response.data.location,
                  profile: response.data.html_url,
                  followersCount: response.data.followers,
                  followingCount: response.data.following,
                  bio: response.data.bio
                }]
              })
            })
            .catch(err => console.log('Something went wrong: ', err));
        })
      })
      .catch(err => console.log('Something went wrong: ', err));

  }
  render() {
    return (
      <div className="App">
        <div className='container'>
          {this.state.cardArray.map(card => {
            return <Card
              key={card.username}
              img={card.img}
              username={card.username}
              name={card.name}
              profile={card.profile}
              followersCount={card.followersCount}
              followingCount={card.followersCount}
              bio={card.bio}
            />
          })}
        </div>
      </div>
    );
  }
}

export default App;
