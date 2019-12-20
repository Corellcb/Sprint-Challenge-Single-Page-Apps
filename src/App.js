import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  width: 50%;
  margin: auto;
  justify-content: space-between;
`


export default function App() {
  return (
      <main>
        <Header />
        <Nav>
          <Link to='/'>Home</Link>
          <Link to='/characters'>Characters</Link>
        </Nav>
        <Switch>
          <Route exact path='/' component={WelcomePage} />
          <Route path='/characters' component={CharacterList} />
        </Switch>
      </main>
  );
}
