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

  const dropDownRef3 = useRef(null);
  const [isActive3,setIsActive3] = useState(false);
  const onClick3 = () => setIsActive3(!isActive3)

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
          <li onClick={onClick3}>Lista de Clientes</li>
        </ul>

      </div>

      <div className={`Home__cadastro ${isActive2 ? "active" : "inactive"}`} ref={dropDownRef2}>
        <Cadastrar/>
      </div>
      
      
      <div className={`Home__container ${isActive3 ? "active" : "inactive"}`} ref={dropDownRef3}>
        <PessoaLista/>
      </div>

      <section>
        <h1>Venture Labs</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ex harum in quidem, doloribus modi odit ipsam quas aperiam sit eos porro, dolore perspiciatis facilis ut quaerat doloremque ad dignissimos nisi perferendis? Placeat dolor voluptatibus quasi rem reprehenderit possimus voluptate incidunt nostrum nesciunt modi quae dolore, blanditiis repudiandae quaerat ex voluptatem quos assumenda similique quam aliquam fugit autem magni? Eum, nemo obcaecati modi rerum nihil error voluptatum magni officia quo ab possimus, eligendi cum accusantium tenetur. Exercitationem quam alias deserunt nihil aspernatur. Cupiditate, assumenda, officia quae aliquid voluptate magni maiores voluptates natus ullam nostrum dolor sed quam nemo ea repellat, impedit voluptatibus cum a. Fugiat recusandae saepe facere cumque quo quasi eum repudiandae magni earum corporis? Quam sit, nesciunt autem dolorum illum sint, qui accusamus praesentium mollitia consequuntur deserunt. Ipsam, fugit libero, illum velit voluptatibus eos ratione, dolorum excepturi nobis exercitationem laborum eveniet aliquam dolor suscipit tempore. Maiores impedit perspiciatis dicta ducimus? Quia accusamus rerum quas iusto! Eveniet sequi, porro reiciendis molestias quibusdam expedita doloribus fuga unde, minima illo animi illum accusantium soluta non quos sit. Earum veniam ipsum obcaecati eos molestias facere tenetur itaque corporis quae. Architecto explicabo sequi ratione, asperiores suscipit perspiciatis minus rem, reprehenderit ullam ab quam.</p>
      </section>
      
    </div>

    
  );
}


export default Home;