import { Route, Switch } from 'react-router-dom';

import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites'
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>

      <Switch>
        <Route path='/' exact>
          <AllMeetups />
        </Route>

        <Route path='/new-meetup' exact >
          <NewMeetup />
        </Route>

        <Route path='/favorites' exact >
          <Favorites />
        </Route>
      </Switch>

    </Layout>
  
  );
}

export default App;
