import "./Home.css";
import PessoaLista from "../PessoaLista";
import Cadastrar from "../Cadastrar";
import logo from "./assets/logo.webp"
import list from "./assets/list.svg"
import { useState} from 'react';
import { useRef} from 'react';

function Home() {

  const dropDownRef = useRef(null);
  const [isActive,setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive)

  return (
    <div className="Home">

      <div className="Header">

        <div className="Header__Logo">
          <img src={logo} width="70px" alt="Logo VentureLabs"></img>
        </div>

        <div className="titulo">VentureLabs
        </div>

        <div className="Header__icone">
          <img src={list}
          width="30px" alt="Ícone menu" onClick={onClick}></img>
        </div>
        
      </div>

      <div className={`menu ${isActive ? "active" : "inactive"}`} ref={dropDownRef}>

        <ul>
          <li>Cadastrar</li>
          <li>Exibir</li>
        </ul>

      </div>

      

      

      <div className="Home__cadastro">
        <Cadastrar/>
      </div>
      
      
      <div className="Home__container">
        <PessoaLista />
      </div>
    </div>
  );
}


export default Home;