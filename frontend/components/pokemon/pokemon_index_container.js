import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index';
import Actions from '../../actions/pokemon_actions';

const mapStateToProps = (state) => ({
  pokemon: state.pokemon
});

// const mapDispatchToProps = (dispatch) => ({
//   requestAllPokemon: () => (dispatch(Actions.requestAllPokemon()))
// });

export default connect(mapStateToProps, null)(PokemonIndex);
