import React from "react";
import styled from 'styled-components';

const CharDiv = styled.div`
  width: 43%;
  padding: 2%;
  background-color: white;
  margin: 1% 0;
`

export default function CharacterCard(character) {
  return (
    <CharDiv>
      <h1>Name: {character.name}</h1>
      <h3>Status: {character.status}</h3>
      <h3>Species: {character.species}</h3>
    </CharDiv>
  )
}
