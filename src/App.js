import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import { element } from 'prop-types';
function App() {
  return (
    <Router>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/movie/:id`}>
          <Detail />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
