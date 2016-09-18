import React from 'react';
import { withRouter } from 'react-router';

class PokemonDetail extends React.Component {

  render() {
    const onePokemon = this.props.onePokemon;
    console.log("POKEMON!!!");
    console.log(onePokemon);

    return (
      <div>
          {onePokemon.name}
      </div>
    );
  }
}

export default PokemonDetail;
