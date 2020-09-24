import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { history } from './helpers'

import AuthLayout from './layout/App'

import Pokemons from './pages/pokemons/pokemons'

const PrivateRoute = ({ component: Component }) => {
  return (
    <Route
      exact
      render={props =>
        true ? (
          <AuthLayout>
            <Component {...props} />
          </AuthLayout>
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default () => (
  <Router history={history}>
    <Switch>
      <Route path='/' exact={true} component={Pokemons} />

      <PrivateRoute path='/' exact component={Pokemons} />
      <PrivateRoute path='/pokemon' exact={true} component={Pokemons} />

      <Redirect from='*' to='/' />
    </Switch>
  </Router>
)
