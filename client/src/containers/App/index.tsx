import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FacilityList from 'containers/FacilityList'
import FacilityDetail from 'containers/FacilityDetails'

const App = () => (
  <Router>
    <Switch>
      <Route path='/' component={FacilityList} />
      <Route path='/:id' component={FacilityDetail} />
    </Switch>
  </Router>
)

export default App
