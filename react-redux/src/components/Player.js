import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: space-evenly;

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