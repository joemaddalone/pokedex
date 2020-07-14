import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ComponentLoader from './common/ComponentLoader';
import PokemonList from './PokemonList/PokemonList';
import Home from './Home';
import TypeNav from './TypeNav/TypeNav';
import Header from './Header/Header';
import { RecoilRoot } from 'recoil';
import './App.css';
import '../css/export.css';

const App = () => {
  return (
    <RecoilRoot>
      <Router basename="/">
        <Header />
        <main className="app-main">
          <nav className="items">
            <React.Suspense fallback={<div>Loading...</div>}>
              <TypeNav />
            </React.Suspense>
          </nav>
          <div className="details box">
            <Switch>
              <React.Suspense
                fallback={<ComponentLoader label="Loading Pokemon..." />}>
                <Route exact path="/" component={Home} />
                <Route exact path="/type/:name" component={PokemonList} />
              </React.Suspense>
            </Switch>
          </div>
        </main>
      </Router>
    </RecoilRoot>
  );
};

export default App;
