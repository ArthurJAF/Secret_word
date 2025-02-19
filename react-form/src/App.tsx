
import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
     <h2>Forms</h2>
     <MyForm user={{name: "Arthur", email: "arthur@gmail.com", bio: "sou um programador", role: "admin"}}/>
    </>
  )
}

export default App
