import "./Home.css";
import PessoaLista from "../components/PessoaLista/PessoaLista";
import Cadastrar from "../components/Cadastro/Cadastrar";
import logo from "../assets/logo.webp"
import list from "../assets/list.svg"
import { useState} from 'react';
import { useRef} from 'react';

function Home() {

  const dropDownRef = useRef(null);
  const [isActive,setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive)

  const dropDownRef2 = useRef(null);
  const [isActive2,setIsActive2] = useState(false);
  const onClick2 = () => setIsActive2(!isActive2)

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
          <li onClick={onClick2}>Novo Cliente</li>
          <li>Lista de Clientes</li>
        </ul>

      </div>

      <div className={`Home__cadastro ${isActive2 ? "active" : "inactive"}`} ref={dropDownRef2}>
        <Cadastrar/>
      </div>
      
      
      <div className="Home__container">
        <PessoaLista/>
      </div>
    </div>
  );
}


export default Home;