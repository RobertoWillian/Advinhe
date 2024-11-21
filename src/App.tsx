import { InformationCircleIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { Alert } from "./components/alerts/Alert";
import { Grid } from "./components/grid/Grid";
import { Keyboard } from "./components/keyboard/Keyboard";
import { InfoModal } from "./components/modals/InfoModal";
import { WinModal } from "./components/modals/WinModal";
import { isWinningWord, solution } from "./lib/words";
import image from "./images/cobra.png"

function App() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameWon, setIsGameWon] = useState(false);
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isWordNotFoundAlertOpen] = useState(false);
  const [isGameLost, setIsGameLost] = useState(false);

  useEffect(() => {
    if (isGameWon) {
      setIsWinModalOpen(true);
    }
  }, [isGameWon]);

  const onChar = (value: string) => {
    if (currentGuess.length < 5 && guesses.length < 6) {
      setCurrentGuess(`${currentGuess}${value}`);
    }
  };

  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
  };

  const onEnter = () => {


    const winningWord = isWinningWord(currentGuess);
    if (currentGuess.length === 5 && guesses.length < 6 && !isGameWon) {
      setGuesses([...guesses, currentGuess]);
      setCurrentGuess("");

      if (winningWord) {
        return setIsGameWon(true);
      }

      if (guesses.length === 5) {
        setIsGameLost(true);
        return setTimeout(() => {
          setIsGameLost(false);
        }, 2000);
      }
    }
  };

  return (
    <div className="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <Alert message="Palavra não encontrada" isOpen={isWordNotFoundAlertOpen} />
      <Alert
        message={`Você perdeu, sua palavra era: ${solution}`}
        isOpen={isGameLost}
      />
      <div className="flex w-80 mx-auto items-center mb-8">
        <h1 className="text-xl grow font-bold">Advinhe</h1>
        <InformationCircleIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => setIsInfoModalOpen(true)}
        />
      </div>
      <div className="flex items-center justify-center p-1">
        <img src={image} alt="Cobra"></img>
      </div>
      <Grid guesses={guesses} currentGuess={currentGuess} />
      <Keyboard
        onChar={onChar}
        onDelete={onDelete}
        onEnter={onEnter}
        guesses={guesses}
      />
      <WinModal
        isOpen={isWinModalOpen}
        handleClose={() => setIsWinModalOpen(false)}
        guesses={guesses}
      />
      <InfoModal
        isOpen={isInfoModalOpen}
        handleClose={() => setIsInfoModalOpen(false)}
      />
    </div>
  );
}

export default App;
