import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FacilityList from 'containers/FacilityList'
import FacilityDetails from 'containers/FacilityDetails'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={FacilityList} />
      <Route path='/details/:id' render={({ match }) => (
        <FacilityDetails id={match.params.id} />
      )}/>
    </Switch>
  </Router>
)

export default App
