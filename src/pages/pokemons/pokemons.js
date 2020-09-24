import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IcoPokerBola } from '../../component'
import './pokemons.css'
import { listaPokemons } from './redux/pokemonsActions'

export default () => {
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemonsState.pokemon)

  useEffect(() => {
    dispatch(listaPokemons())
  }, [dispatch])

  const ajustText = t => {
    const upercase = t.charAt(0).toUpperCase() + t.slice(1)
    return upercase.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ')
  }

  return (
    <div className='box-pokemons'>
      {pokemon && pokemon.name ? (
        <div className='card-pokemon'>
          <h2>
            <IcoPokerBola />
            {ajustText(pokemon.name)}
            <IcoPokerBola />
          </h2>
          <div className='card-img'>
            {pokemon.sprites['front_default'] ? (
              <img
                src={pokemon.sprites['front_default']}
                title={ajustText(pokemon.name)}
                alt={ajustText(pokemon.name)}
              />
            ) : (
              <span>&#10056; We are looking for your pokemon &#10056; </span>
            )}
            {pokemon.sprites &&
              Object.keys(pokemon.sprites).map(s =>
                pokemon.sprites[s] ? (
                  <img key={s} src={pokemon.sprites[s]} title={ajustText(s)} alt={ajustText(s)} />
                ) : null
              )}
          </div>
          <div>
            <p>
              <b>Is default:</b> {pokemon.is_default ? 'Yes' : 'Not'}
            </p>
            <p>
              <b>Is battle only:</b> {pokemon.is_battle_only ? 'Yes' : 'Not'}
            </p>
            <p>
              <b>Is mega:</b> {pokemon.is_mega ? 'Yes' : 'Not'}
            </p>
          </div>
          {pokemon.effect_entries &&
            pokemon.effect_entries.map((e, i) => (
              <div key={'efect-' + i}>
                <p>
                  <b>Effect:</b> {e.effect}
                </p>
                <p>
                  <b>Short effect:</b> {e.short_effect}
                </p>
              </div>
            ))}
        </div>
      ) : null}
    </div>
  )
}
