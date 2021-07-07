import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import styled from 'styled-components';
import axios from 'axios';

const CharacterDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: whitesmoke;
  border: black solid 2px;
`

const CenteredText = styled.h2`
  text-align: center;
  padding: 4%;
`

export default function CharacterList() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        const character = response.data.results.filter(
          character =>
            character.name
              .toLowerCase()
              .includes(query.toLowerCase())
        );
        setData(character);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      <CenteredText>Characters</CenteredText>
      <section>
        <form>
          <label>Search a Character: </label>
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            placeholder="search by name"
            autoComplete="off"
          />
        </form>
      </section>
      <CharacterDiv>
        {data.map(data => (
          <CharacterCard key={data.id} name={data.name} status={data.status} species={data.species} />
        ))}
      </CharacterDiv>
    </section>
  );
}
