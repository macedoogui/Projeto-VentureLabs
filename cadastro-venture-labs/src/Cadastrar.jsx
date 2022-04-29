import "./Cadastro.css"
import "./script.js"
import { useState} from 'react';
import { useRef} from 'react';

function Cadastrar() {

    const dropDownRef = useRef(null);
    const [isActive,setIsActive] = useState(false);

    const onClick = () => {        
        setIsActive(!isActive)
      }
    return <div className={`Cadastro ${isActive ? "active" : "inactive"}`} ref={dropDownRef}>

        <div className="Fechar" onClick={onClick} >X</div>

        <form className="Formulario">

            <label for="nome">Nome: </label>
            <input type="text" name="nome" class="nome"></input>

            <label for="nome">Sobrenome: </label>
            <input type="text" name="sobrenome" class="sobrenome"></input>

            <label for="email">E-mail: </label>
            <input type="text" name="email" class="email"></input>

            <label for="telefone">Telefone: </label>
            <input type="text" name="telefone" class="telefone"></input>

            <label for="cep">CEP: </label>
            <input type="text" name="cep" class="cep"></input>

            <label for="endereço1">Endereço 1: </label>
            <input type="text" name="endereço1" class="endereço1"></input>

            <label for="endereço2">Endereço 2: </label>
            <input type="text" name="endereço2" class="endereço2"></input>

            <label for="nascimento">Data de nascimento: </label>
            <input type="text" name="nascimento" class="nascimento"></input>

            <label for="cpf">CPF: </label>
            <input type="text" name="cpf" class="cpf"></input>

            <label for="renda">Renda Mensal: </label>
            <input type="text" name="renda" class="renda"></input>

            <button className="btnCadastrar">Cadastrar</button>

        </form>

    </div>
}

export default Cadastrar;
