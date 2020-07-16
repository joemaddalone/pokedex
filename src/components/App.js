import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonList from './PokemonList/PokemonList';
import Home from './Home/Home';
import TypeNav from './TypeNav/TypeNav';
import Header from './Header/Header';
import FavoritesList from './FavoritesList/FavoriteList';
import { RecoilRoot } from 'recoil';
import { Loader } from 'semantic-ui-react';
import './App.css';
import '../css/export.css';

const App = () => {
  return (
    <RecoilRoot>
      <Router basename="/">
        <React.Suspense fallback={<></>}>
          <Header />
        </React.Suspense>
        <main className="app-main">
          <div className="left-col">
            <React.Suspense fallback={<></>}>
              <TypeNav />
            </React.Suspense>
          </div>
          <div className="center-col">
            <Switch>
              <React.Suspense
                fallback={
                  <Loader active inverted>
                    Loading Pokemon...
                  </Loader>
                }>
                <Route exact path="/type/:type" component={PokemonList} />
                <Route component={Home} />
              </React.Suspense>
            </Switch>
          </div>
          <div className="right-col">
            <FavoritesList />
          </div>
        </main>
      </Router>
    </RecoilRoot>
  );
};

export default App;
