import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import Actions from '../../actions/pokemon_actions';

const mapStateToProps = (state) => ({
  onePokemon: state.onePokemon
});

// const mapDispatchToProps = (dispatch) => ({
//   requestAllPokemon: () => (dispatch(Actions.requestAllPokemon()))
// });

export default connect(mapStateToProps, null)(PokemonDetail);
