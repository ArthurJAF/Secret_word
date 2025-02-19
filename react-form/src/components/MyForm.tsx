import { useState } from "react";
import "./MyForm.css";

type UserProps = {
    user: {
        name: string;
        email: string;
        bio: string;
        role: string;
    };
};

const MyForm = ({user}:UserProps) => {
    //3 gerenciamento de dados
    const [name, setName] = useState<string>(user ? user.name : "");
    const [email, setEmail] = useState<string>(user ? user.email : "");
    const [bio, setBio] = useState<string>(user ? user.bio : "")
    const [role, setRole] = useState(user ? user.role : "")

    const handleName = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value);
    };
    // console.log(name);
    // console.log(email)

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        console.log("Eviando o formulario");
        console.log("nome:",name,"Email:", email, "Bio:", bio, "Role:", role);

        // 7 - limpar formulario apos envio
        setName("");
        setEmail("");
        setBio("");
    }


  return (
    
    <div>
        {/* Envio onSubmit*/}
        
        {/* Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome"
                onChange={handleName}
                value={name}
                />
            </div>

            {/* 2 Label envolvendo input */}
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" placeholder="Digite seu email"
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                />
            </label>

            {/* 8 - textarea */}
            <label>
                <span>Bio:</span>
                <textarea
                name="bio" 
                placeholder="Descrição do usuário" 
                onChange={(e)=> setBio(e.target.value)} 
                value={bio}></textarea>
            </label>

            {/* 9 - select */}
            <label>
                <span>Função no sistema</span>
                <select name="role" 
                onChange={(e) => {setRole(e.target.value)}}
                value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Adiministrador</option>
                </select>
            </label>
            
            <input type="submit" value="enviar"/>
        </form>
    </div>
  )
}

export default MyForm