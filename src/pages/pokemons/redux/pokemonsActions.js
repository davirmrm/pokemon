import axios from 'axios'
// import { AddAlert } from '../../../component'
// import textoDefault from '../nls/pt-BR.json'

export const PESQUISA_POKEMON = 'PESQUISA_POKEMON'
export const changeCampoPesquisa = e => ({
  type: PESQUISA_POKEMON,
  payload: e.target.value
})
export const LIMPAR_PESQUISA = 'LIMPAR_PESQUISA'
export const limparCampoPesquisa = e => ({
  type: LIMPAR_PESQUISA
})

export const PESQUISAR_POKEMON = 'PESQUISAR_POKEMON'
export const pesquisarPokemon = e => ({
  type: PESQUISAR_POKEMON,
  payload: e.replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-')
})

export const LISTA_POKEMON = 'LISTA_POKEMON'
export const setListaPokemons = e => ({
  type: LISTA_POKEMON,
  payload: e
})

export const listaPokemons = e => {
  return dispatch => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=1050`) //?limit=5&offset=5)
      .then(resposta => {
        dispatch(setListaPokemons(resposta.data))
      })
      .catch(error => {
        // dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}

export const ADD_INFORMACAO_POKEMON = 'ADD_INFORMACAO_POKEMON'
export const setAddInformacaoPokemon = e => ({
  type: ADD_INFORMACAO_POKEMON,
  payload: e
})

export const addInformacaoPokemon = e => {
  return dispatch => {
    axios
      .get(e)
      .then(resposta => {
        dispatch(setAddInformacaoPokemon(resposta.data))
      })
      .catch(error => {
        // dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}

export const INFORMACAO_POKEMON = 'INFORMACAO_POKEMON'
export const setInformacaoPokemon = e => ({
  type: INFORMACAO_POKEMON,
  payload: e
})
export const POKEMON = 'POKEMON'
export const setPokemon = e => ({
  type: POKEMON,
  payload: e
})

export const informacaoPokemon = e => {
  return dispatch => {
    axios
      .get(e)
      .then(resposta => {
        dispatch([pokemon(resposta.data), setInformacaoPokemon(resposta.data)])
      })
      .catch(error => {
        // dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}

const infoFilterLanguage = (e, l) =>
  e.filter(info => {
    return info.language.name === l ? info : null
  })

const infoFilterpokemon = e =>
  e.filter(info => {
    return info.is_hidden ? info : null
  })

export const pokemon = e => {
  const habilidade = e.abilities[0].ability.url
  return dispatch => {
    axios
      .get(habilidade)
      .then(resposta => {
        const poke = {
          id: resposta.data.id,
          effect_entries: infoFilterLanguage(resposta.data.effect_entries, 'en'),
          flavor_text_entries: infoFilterLanguage(resposta.data.flavor_text_entries, 'en'),
          pokemon: infoFilterpokemon(resposta.data.pokemon)
        }

        dispatch(pokemonForm(poke, e))
      })
      .catch(error => {
        // dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}

export const pokemonForm = (poke, e) => {
  const fomr = e.forms[0].url
  return dispatch => {
    axios
      .get(fomr)
      .then(resposta => {
        const pokeForm = {
          ...poke,
          sprites: resposta.data.sprites,
          is_battle_only: resposta.data.is_battle_only,
          is_default: resposta.data.is_default,
          is_mega: resposta.data.is_mega,
          version_group: resposta.data.version_group,
          name: resposta.data.name
        }
        dispatch(setPokemon(pokeForm))
      })
      .catch(error => {
        // dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}
