import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Nevronas from './components/pages/Nevronas';
import Spardhak from './components/pages/Spardhak';
import CybSec from './components/pages/CybSec';
import GBit from './components/pages/GBit';
import People from './components/pages/People';
import Events from './components/pages/Events';
import PI from './components/pages/P&I';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/people' exact component={People} />
          <Route path='/events' exact component={Events} />
          <Route path='/pi' exact component={PI} />
          <Route path='/nevronas' exact component={Nevronas} />
          <Route path='/spardhak' exact component={Spardhak} />
          <Route path='/cybsec' exact component={CybSec} />
          <Route path='/gbit' exact component={GBit} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
