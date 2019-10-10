import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    border-bottom: 1px solid blue;
    display: flex;
    justify-content: space-evenly;
    margin: 10px 0;
    background-color: rgba(255, 65, 54, 0.8);
`;

const Styledh3 = styled.h3`;
    
`;

const Player = props => {
    return <StyledDiv>
        <Styledh3>{props.player.first_name} {props.player.last_name}</Styledh3>
        <p>Position: {props.player.position} | Team: {props.player.team.abbreviation}</p>
        </StyledDiv>
};

export default Player;