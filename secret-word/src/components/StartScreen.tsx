import "./StartScreen.css"

const StartScreen = ({startGame}:any) => {
  return (
    <div className="Start">
        <h1>Secret <span id="word">Word</span></h1>
        <p>Clique no botão abaixo para começar a jogar!</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen