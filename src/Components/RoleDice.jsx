/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import styled from "styled-components";
import dice1 from "../assets/Images/Dices/dice_1.png";
import dice2 from "../assets/Images/Dices/dice_2.png";
import dice3 from "../assets/Images/Dices/dice_3.png";
import dice4 from "../assets/Images/Dices/dice_4.png";
import dice5 from "../assets/Images/Dices/dice_5.png";
import dice6 from "../assets/Images/Dices/dice_6.png";

const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

const RoleDice = ({ rollDice, currentDice,setTotalScore }) => {
  const [showRules, setShowRules] = useState(false);

  const resetScore = () => {
    setTotalScore(0)
  };

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <Container>
      <DiceSection>
        <Dice onClick={rollDice}>
          <img src={dices[currentDice - 1]} alt={`dice ${currentDice}`} />
        </Dice>
        <p>Click on Dice to roll</p>
      </DiceSection>
      <ButtonSection>
        <button onClick={resetScore}>Reset Score</button>
        <button onClick={toggleRules}>Show Rules</button>
      </ButtonSection>
      {showRules && (
        <RulesSection>
          <h2>How to play dice game</h2>
          <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>
              after click on dice if selected number is equal to dice number you
              will get same point as dice{" "}
            </p>
            <p>if you get wrong guess then 2 point will be dedcuted </p>
          </div>
        </RulesSection>
      )}
    </Container>
  );
};

export default RoleDice;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
`;

const DiceSection = styled.div`
  text-align: center;
  margin: 20px 0;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;

const Dice = styled.div`
  cursor: pointer;
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 10px;
  button {
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    background-color: black;
    color: white;
    font-size: 16px;
    border-radius: 4px;
    transition: 0.4s background ease-in;
  }
  button:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.4s background ease-in;
  }
`;

const RulesSection = styled.div`
  max-width: 800px;
margin: 0 auto;
margin-top: 40px;
border-radius: 10px;

background-color:#fbf1f1;
padding: 20px;
h2{
    font-size: 24px;
    
}
.text{
    margin-top:24px ;
}
`;
