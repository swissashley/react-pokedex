import Actions from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const defaultState = {};
const PokemonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Actions.RECEIVE_ALL_POKEMON: {
      console.log(merge({}, {pokemon: action.pokemon}, state));
      return merge({}, {pokemon: action.pokemon}, state);
    }
    case Actions.RECEIVE_ONE_POKEMON: {
      console.log(merge({}, state, {onePokemon: action.onePokemon}));
      return merge({}, state, {onePokemon: action.onePokemon});
    }
    default:
      return state;
  }
};

export default PokemonReducer;
