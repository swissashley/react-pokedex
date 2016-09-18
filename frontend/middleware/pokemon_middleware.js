import Actions from '../actions/pokemon_actions';
import { fetchAllPokemon, fetchOnePokemon } from '../util/api_util.js';

window.fetchAllPokemon = fetchAllPokemon;

export default ({ dispatch }) => next => action => {
  switch (action.type) {
    case Actions.REQUEST_ALL_POKEMON: {
      const success = (pokemon) => dispatch(Actions.receiveAllPokemon(pokemon));
      fetchAllPokemon(success);
      return next(action);
    }

    case Actions.REQUEST_ONE_POKEMON: {
      const success = (onePokemon) => dispatch(Actions.receiveOnePokemon(onePokemon));
      fetchOnePokemon(action.id,success);
      return next(action);
    }

    default:
      return next(action);
  }
};
