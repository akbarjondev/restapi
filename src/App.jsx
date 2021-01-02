import { Switch, Route } from 'react-router-dom';
import './App.css';

import Nav from './Components/Nav/Nav'
import Home from './Pages/Home/Home'
import Photos from './Pages/Photos/Photos'

function App() {
  return (
    <>
      <Nav />
      App.

      <Switch>
        <Route path='/' component={Home} />

        <Route path='/photos' component={Photos} exact />
      </Switch>
    </>
  );
}

export default App;
