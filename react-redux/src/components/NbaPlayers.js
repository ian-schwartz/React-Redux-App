import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions';
import Player from './Player';

const NbaPlayers = props => {
    useEffect(() => {
        props.fetchPlayers();
    }, []);

    if (props.isFetching) {
        return <h1>NBA Players Loading...</h1>
    }

    return (
        <div>
          {props.error && <p>{props.error}</p>}
          {props.ballPlayers.map(player => (
              <Player key={player.id} player={player} />
          ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ballPlayers: state.ballPlayers,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchPlayers }
)(NbaPlayers);
