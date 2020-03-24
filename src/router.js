import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
// import NoMatch from './pages/nomatch'
// import { Button } from 'antd'

export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            render={() => (
              <Admin>
                <switch>
                  {/* <Route path='/home' component={Home} /> */}
                  <Route path="/ui/buttons" component={Buttons} />
                </switch>
              </Admin>
            )}
          />
        </App>
      </HashRouter>
    )
  }
}
