import React from 'react';
import { withRouter } from 'react-router';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {

  // componentDidMount() {
  //   this.props.requestAllPokemon();
  // }

  render() {
    const pokemonList = this.props.pokemon.map( onePokemon => {
      return (
        <div className='pokedex'>
          <PokemonIndexItem pokemon={onePokemon} />
        </div>
      );
    });

    return (
      <div>
          {pokemonList}
          {this.props.children}
      </div>
    );
  }
}

export default PokemonIndex;
