import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pesquisa from '../pages/pokemons/pesquisa'
import { informacaoPokemon } from '../pages/pokemons/redux/pokemonsActions'

export default ({ style }) => {
  const dispatch = useDispatch()
  const pokemonsMenu = useSelector(state => state.pokemonsState.pokemonsMenu)
  const sidebarLeft = useSelector(state => state.appState.sidebarLeft)

  const ajustText = t => {
    const upercase = t.charAt(0).toUpperCase() + t.slice(1)
    return upercase.replace('-', ' ').replace('-', ' ').replace('-', ' ')
  }

  return (
    <div id='box-sidebar-left' className={sidebarLeft ? 'open-sidebar' : ''} style={style}>
      <Pesquisa />
      <div className='menu'>
        {pokemonsMenu.map(pokemon => (
          <button key={pokemon.name} onClick={() => dispatch(informacaoPokemon(pokemon.url))}>
            {ajustText(pokemon.name)}
          </button>
        ))}
      </div>
    </div>
  )
}
