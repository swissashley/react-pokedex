import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = ({pokemon, router }) => (
<li className="pokemon-index-item" onClick={() => {
						router.push(`/pokemon/${pokemon.id}`);
					}}>
    <span>{pokemon.id}</span>
    <img src={pokemon.image_url} alt={"Pokemon Image"}/>
    <span>{pokemon.name}</span>
</li>
);

export default withRouter(PokemonIndexItem);
