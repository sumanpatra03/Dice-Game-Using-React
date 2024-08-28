/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import dices from "../Components/Image/dices.png";

const Home = ({toggleGameplay}) => {
  return (
    <Container>
      <div>
      <img src={dices} alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggleGameplay}>Play now</Button>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  align-items: center;

  
  .content h1{
    font-size: 96px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  padding: 10px 18px;

  color: white;
  width: 220px;

  background-color: black;
  border-radius: 5px;
  font-size: 18px;
  border: none;
  border:1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.4s background ease-in;
  }
`;
