import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import PokemonDetailPage from './pages/PokemonDetailPage';
import HomePage from './pages/HomePage';
import MainHeader from './components/Layout/MainHeader';
import MainFooter from './components/Layout/MainFooter';
import MyPokemons from './pages/MyPokemons';

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/my-pokemons' exact>
            <MyPokemons />
          </Route>
          <Route path='/pokemon-detail/:pokemonId' exact>
            <PokemonDetailPage />
          </Route>
          <Route path='/'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </main>
      <MainFooter />
    </>
  );
}

export default App;