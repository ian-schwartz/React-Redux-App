import React from 'react';

const Player = props => {
    return <div>
        <h3>{props.player.first_name} {props.player.last_name}</h3>
        <p>{props.player.position}, {props.player.team.abbreviation}</p>
        </div>
};

export default Player;