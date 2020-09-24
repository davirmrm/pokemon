import {
  PESQUISA_POKEMON,
  PESQUISAR_POKEMON,
  LIMPAR_PESQUISA,
  LISTA_POKEMON,
  ADD_INFORMACAO_POKEMON,
  INFORMACAO_POKEMON,
  POKEMON
} from './pokemonsActions'

const initialState = {
  campoPesquisa: '',
  pokemonInfo: [],
  pokemon: {},
  pokemons: [],
  pokemonsMenu: [],
  paginacao: {
    count: 0,
    next: null,
    previous: null
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PESQUISA_POKEMON:
      return { ...state, campoPesquisa: payload }
    case LIMPAR_PESQUISA:
      return { ...state, campoPesquisa: '' }
    case PESQUISAR_POKEMON:
      return {
        ...state,
        pokemonsMenu: state.pokemons.filter(s => {
          const name = s.name
          return name.toUpperCase().indexOf(payload.toUpperCase()) !== -1 ? s : null
        })
      }
    case INFORMACAO_POKEMON:
      return { ...state, pokemonInfo: payload }
    case POKEMON:
      return { ...state, pokemon: payload }
    case LISTA_POKEMON:
      return {
        ...state,
        pokemons: payload.results,
        pokemonsMenu: payload.results,
        paginacao: {
          count: payload.count,
          next: payload.next,
          previous: payload.previous
        }
      }
    case ADD_INFORMACAO_POKEMON:
      return {
        ...state,
        pokemons: state.pokemons.filter(addinfo => (addinfo.name === payload.name ? payload : addinfo))
      }
    default:
      return state
  }
}
