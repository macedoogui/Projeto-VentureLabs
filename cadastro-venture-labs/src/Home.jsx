import "./Home.css";
import PessoaLista from "./PessoaLista";
import logo from "./assets/logo.webp"
import list from "./assets/list.svg"

function Home() {
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
          width="30px" alt="Ícone menu"></img>
        </div>

      </div>
      
      
      <div className="Home__container">
        <PessoaLista />
      </div>
    </div>
  );
}

export default Home;