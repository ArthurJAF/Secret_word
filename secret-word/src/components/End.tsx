import "./End.css"

const end = ({retry, score}: any) => {
  return (
    <div>
        <h1>Fim de Jogo</h1>
        <h2>A sua pontuação foi: <span>{score}</span></h2>
        <button onClick={retry}>Jogar de novo</button>
    </div>
  )
}

export default end