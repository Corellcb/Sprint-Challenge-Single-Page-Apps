import React from "react";
import styled from 'styled-components';

const CharDiv = styled.div`
  width: 40%;
  margin: auto;
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
