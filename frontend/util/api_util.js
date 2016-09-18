export const fetchAllPokemon = (success) => {
  $.ajax({
    type: "GET",
    url: "api/pokemon",
    success
  });
};

export const fetchOnePokemon = (id, success) => {
  $.ajax({
    type: "GET",
    url: `api/pokemon/${id}`,
    success
  });
};
