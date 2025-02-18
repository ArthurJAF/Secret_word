import "./MyForm.css";
const MyForm = () => {
  return (
    <div>
        {/* Criação de form */}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome"/>
            </div>
            {/* Label envolvendo input */}
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" placeholder="Digite seu email"/>
            </label>
            <input type="submit" value="enviar"/>

        </form>
    </div>
  )
}

export default MyForm