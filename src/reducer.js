import { combineReducers } from 'redux'
import alerts from './component/alert/alertsRedux'
import appState from './layout/redux/AppReducer'
import usuarioState from './pages/usuario/redux/UsuarioReducer'
import perfisState from './pages/perfis/redux/perfisReducer'
import colaboradoresState from './pages/colaboradores/redux/colaboradoresReducer'
import pokemonsState from './pages/pokemons/redux/pokemonsReducer'

export const rootReducer = combineReducers({
  alerts,
  appState,
  usuarioState,
  perfisState,
  colaboradoresState,
  pokemonsState
})

export default rootReducer
