import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonList from './PokemonList/PokemonList';
import Home from './Home/Home';
import TypeNav from './TypeNav/TypeNav';
import Header from './Header/Header';
import FavoritesList from './FavoritesList/FavoriteList';
import { RecoilRoot } from 'recoil';
import { Loader } from 'semantic-ui-react';
import { translate } from 'poke-i18n';
import './App.css';
import '../css/export.css';

const t = translate(['common']);

const App = () => {
  return (
    <RecoilRoot>
      <Router basename="/">
        <React.Suspense fallback={<></>}>
          <Header />
        </React.Suspense>
        <main className="app-main">
          <React.Suspense fallback={<div className="nav-area" />}>
            <TypeNav />
          </React.Suspense>
          <div className="content-area">
            <Switch>
              <React.Suspense
                fallback={
                  <Loader active inverted>
                    {t('loading')}
                  </Loader>
                }>
                <Route exact path="/type/:type" component={PokemonList} />
                <Route component={Home} />
              </React.Suspense>
            </Switch>
          </div>
          <FavoritesList />
        </main>
      </Router>
    </RecoilRoot>
  );
};

export default App;
