import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchPlayers = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axios
      .get('https://www.balldontlie.io/api/v1/players')
      .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.data }))
      .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
}