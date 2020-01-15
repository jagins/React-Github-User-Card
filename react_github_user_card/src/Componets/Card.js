import React from 'react';

function Card(props) {
    let { img, username, name, location, profile, followersCount, followingCount, bio } = props;
    if(bio === null)
        bio = `${name} must fill this in on their github`;
    return (
        <div className='card'>
            <img src={img} alt={name}/>
            <div className='card-info'>
                <h3>{name}</h3>
                <p className='username'>{username}</p>
                <p>{location}</p>
                <p>Profile: <a href={profile} target='_blank' rel='noopener noreferrer'>{profile}</a></p>
                <p>Followers: {followersCount}</p>
                <p>Following: {followingCount}</p>
                <p>Bio: {bio}</p>
            </div>
        </div>
    );
}

export default Card;