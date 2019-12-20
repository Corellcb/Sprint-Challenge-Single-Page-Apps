import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';


export default function App() {
  return (
      <main>
        <Header />
        <Link to='/'>Home</Link>
        <Link to='/characters'>Characters</Link>
        <Switch>
          <Route exact path='/' component={WelcomePage} />
          <Route path='/characters' component={CharacterList} />
        </Switch>
      </main>
  );
}
