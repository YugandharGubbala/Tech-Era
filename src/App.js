import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import CourseItemDetails from './components/Details'

import NotFound from './components/Notfound'

import './App.css'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseItemDetails} />
      <Route exact path="/bad-path" component={NotFound} />
    </Switch>
  </div>
)
export default App
