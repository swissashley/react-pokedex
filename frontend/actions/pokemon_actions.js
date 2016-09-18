const Actions = {
  RECEIVE_ALL_POKEMON: "receiveAllPokemon",
  REQUEST_ALL_POKEMON: "requestAllPokemon",
  RECEIVE_ONE_POKEMON: "receiveOnePokemon",
  REQUEST_ONE_POKEMON: "requestOnePokemon",

  requestAllPokemon: () => ({
    type: Actions.REQUEST_ALL_POKEMON
  }),

  receiveAllPokemon: (pokemon) => ({
    type: Actions.RECEIVE_ALL_POKEMON,
    pokemon
  }),

  requestOnePokemon: (id) => ({
    type: Actions.REQUEST_ONE_POKEMON,
    id
  }),

  receiveOnePokemon: (onePokemon) => ({
    type: Actions.RECEIVE_ONE_POKEMON,
    onePokemon
  })

};

export default Actions;
