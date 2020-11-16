import 'antd/dist/antd.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import SignIn from './screens/SignIn'
import NoMatch from './screens/NoMatch'
import Layout from './screens/Layout'


function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path='/signin' component={SignIn} />
        <Route path='/404' component={NoMatch} />
        <Route path='/' component={Layout} />
      </Switch>
    </Router>
  )
}

export default App