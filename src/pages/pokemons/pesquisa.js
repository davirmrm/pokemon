import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionForm, IcoClose, IcoSearch, Input } from '../../component'
import { changeCampoPesquisa, pesquisarPokemon, limparCampoPesquisa, listaPokemons } from './redux/pokemonsActions'

export default () => {
  const dispatch = useDispatch()
  const campoPesquisa = useSelector(state => state.pokemonsState.campoPesquisa)

  return (
    <div className='pesquisar-menu'>
      <Input label='' name='campoPesquisa' action={e => dispatch(changeCampoPesquisa(e))} value={campoPesquisa}>
        {campoPesquisa ? (
          <ActionForm action={e => dispatch([limparCampoPesquisa(), listaPokemons()])} title='Clean'>
            <IcoClose />
          </ActionForm>
        ) : null}

        <ActionForm action={e => dispatch(pesquisarPokemon(campoPesquisa))} title='Search'>
          <IcoSearch />
        </ActionForm>
      </Input>
    </div>
  )
}
