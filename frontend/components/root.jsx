import { Provider } from 'react-redux';
import React from 'react';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import { Router, Route, hashHistory } from 'react-router';
import Actions from '../actions/pokemon_actions';


const Root = ({ store }) => {
  const requestPokemonOnEnter = (nextState) => {
		store.dispatch(Actions.requestAllPokemon(nextState.params.pokemon));
	};
  const requestOnePokemonOnEnter = (nextState) => {
		store.dispatch(Actions.requestOnePokemon(nextState.params.id ,nextState.params.pokemon));
	};
  return (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/"
        component={PokemonIndexContainer}
         onEnter={requestPokemonOnEnter} >
         <Route path='pokemon/:id'
           component={PokemonDetailContainer}
           onEnter={requestOnePokemonOnEnter}
           />
      </Route>
    </Router>
  </Provider>
  );
};

export default Root;
