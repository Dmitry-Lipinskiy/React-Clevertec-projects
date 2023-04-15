import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppHeader } from '../appHeader';
import { ComicsPage } from '../pages/comicsPage';
import { MainPage } from '../pages/mainPage';

export const App = () => (
  <Router>
    <div className='app'>
      <AppHeader />
      <main>
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route exact path='/comics'>
            <ComicsPage />
          </Route>
        </Switch>
      </main>
    </div>
  </Router>
);

