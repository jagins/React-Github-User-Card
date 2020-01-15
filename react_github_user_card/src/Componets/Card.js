import React from 'react';

function Card(props) {
    const { img, username, name, location, profile, followersCount, followingCount, bio } = props;
    return (
        <div className='card'>
            <img src={img} />
            <div className='card-info'>
                <h3>{name}</h3>
                <p className='username'>{username}</p>
                <p>{location}</p>
                <p>Profile: <a href={profile} target='_blank'>{profile}</a></p>
                <p>Followers: {followersCount}</p>
                <p>Following: {followingCount}</p>
                <p>Bio: {bio}</p>
            </div>
        </div>
    );
}

export default Card;