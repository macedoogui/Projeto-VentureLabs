import "./Home.css";
import PessoaLista from "./PessoaLista";

function Home() {
  return (
    <div className="Home">
      <div className="Home__container">
        <PessoaLista />
      </div>
    </div>
  );
}

export default Home;