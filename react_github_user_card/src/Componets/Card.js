import React from 'react';

function Card(props)
{
    return(
        <div className='card'>
            <div className='card-info'>
                <h3>name</h3>
                <p className='username'>username</p>
                <p>Profile: <a href='address here'>address here too</a></p>
                <p>Followers: followers</p>
                <p>Following: follow count</p>
            </div>
        </div>
    );
}

export default Card;