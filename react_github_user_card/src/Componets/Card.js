import React from 'react';

function Card(props) {
    const { img, username, name, location, profile, followersCount, followingCount } = props;
    return (
        <div className='card'>
            <div className='card-info'>
                <h3>{name}</h3>
                <p className='username'>{username}</p>
                <p>Profile: <a href={profile} target='_blank'>{profile}</a></p>
                <p>Followers: {followersCount}</p>
                <p>Following: {followingCount}}</p>
            </div>
        </div>
    );
}

export default Card;