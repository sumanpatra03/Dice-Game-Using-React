import { useState } from "react";
import Home from "./Components/Home";
import GamePlay from "./Components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameplay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GamePlay /> : <Home toggleGameplay={toggleGameplay} />}
    </>
  );
}

export default App;
