//CSS
import './App.css'
//REACT
import { useEffect, useState } from 'react'
//DATA
import { wordsList } from './data/words'
//COMPONENTS
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import End from './components/End'


const stages = [
  {id:1, name: "start"},
  {id:2, name: "game"},
  {id:3, name: "end"},
];

function App() {
  const guessesQtd = 3

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)

  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState<string[]>([])
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [wrongLetters, setWrongLetters] = useState<string[]>([])
  const [guesses, setGuesses] = useState<number>(guessesQtd)
  const [score, setScore] = useState<number>(0)

  const pickWordAndCategory = () => {
    //pick random category
    const categories = Object.keys(words) as Array<keyof typeof wordsList>;
    const category = categories[Math.floor(Math.random() * categories.length)];
    // console.log(category)

    //pick random word from category
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    // console.log(word)

    return {word, category}
  }

  //Start Game
  const startGame =() => {
    // console.log("startGame foi chamado!");

    //clear all letters
    clearLettersStates();
    //pick word and pick category
    const { word, category } = pickWordAndCategory();
    
    //create array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map<string>((e) => e.toLowerCase())

    //fill states
    setPickedCategory(category)
    setLetters(wordLetters)
    setGuesses(guessesQtd)
    // console.log(word, category)
    // console.log(wordLetters)

    setGameStage(stages[1].name)
  };

  const verifyLetter = (letter:string) => {
    const normalizedLetter = letter.toLowerCase();

    //check if letter has already been utilized
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }

    // push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter
      ])
    }else{
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizedLetter
      ])
      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  const clearLettersStates = () => {
    setGuessedLetters([])
    setWrongLetters([])

  }

  useEffect(() => {
    if (guesses === guessesQtd) return; // Evita execução na inicialização
    // console.log("guesses mudou:", guesses);
  
    if (guesses <= 0) {
      clearLettersStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  useEffect(()=>{
    if (letters.length === 0) return; // Impede execução antes do jogo começar
  
    const uniqueLetters = [...new Set(letters)];
  
    if(guessedLetters.length === uniqueLetters.length){
      setScore((actualScore) => actualScore + 100);
      startGame();
    }
  }, [guessedLetters, letters]);

  //Restart Game
  const retry = () => {
    setScore(0)
    setGuesses(guessesQtd)
    setGameStage(stages[0].name)
  }

  return (
    <>
      <div className='app'>
        {gameStage === "start" && <StartScreen 
        startGame ={startGame}
        />}

        {gameStage === 'game' && <Game 
        verifyLetter = {verifyLetter} 
        pickedCategory = {pickedCategory}
        letters = {letters}
        guessedLetters ={guessedLetters}
        wrongLetters = {wrongLetters}
        guesses = {guesses}
        score = {score}
        />}

        {gameStage === 'end' && <End 
        retry = {retry} 
        score ={score} 
        />}
      </div>
    </>
  )
}

export default App
