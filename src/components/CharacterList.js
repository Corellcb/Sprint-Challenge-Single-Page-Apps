import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import styled from 'styled-components';
import axios from 'axios';

const CharacterDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: whitesmoke;
`

const CenteredText = styled.h2`
  text-align: center;
  padding: 4%;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res.data.results);
      const data = res.data.results;
      const results = data.filter(e => {
        console.log(e.name);
      });
      console.log(results);
      setCharacters(results);
    });
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const SearchForm = () => {

    return (
      <section>
        <form>
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            placeholder="search by name"
            autoComplete="off"
            tabIndex="0"
          />
        </form>
      </section>
    );
  }

  return (
    <section className="character-list">
      <CenteredText>Characters</CenteredText>
      <SearchForm />
      <CharacterDiv>
        {characters.map(characters => (
          <CharacterCard key={characters.id} name={characters.name} status={characters.status} species={characters.species} />
        ))}
      </CharacterDiv>
    </section>
  );
}
