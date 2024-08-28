/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [totalScore, setTotalScore] = useState(0);

  const [currentDice, setCurrentDice] = useState(1);

  const [error, setError] = useState();

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number ");
      return;
    }

    let randomNumber = generateRandomNumber(1, 6);
    setCurrentDice(randomNumber);

    if (selectedNumber !== null && randomNumber === selectedNumber) {
      setTotalScore(totalScore + randomNumber);
    } else {
      setTotalScore(totalScore - 2);
    }
    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore totalScore={totalScore} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RoleDice
        currentDice={currentDice}
        rollDice={rollDice}
        setTotalScore={setTotalScore}
      />
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;
