import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LogIn from './views/login/LogIn';
import Profile from './views/profile/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LogIn />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
