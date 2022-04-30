import "./Cadastro.css"
import { useState} from 'react';
import Passo1 from "./Passo1";
import Passo2 from "./Passo2";
import Passo3 from "./Passo3";


function Cadastrar() {
    
    const [ page, setPage] = useState(0);

    const FormTitles = ["Passo 1" , "Passo 2" , "Passo 3"]

    const PageDisplay = () => {

        if (page === 0) {
            return <Passo1/>
        } 
        else if (page === 1) {
            return <Passo2/>
        }  
        else {
            return <Passo3/>
        }
    }

    return <div className="Cadastro">

    <h1>{FormTitles[page]}</h1>

    <div className="Formulario">{PageDisplay()}</div> 

    <div className="botoes">

        <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
        </button>
        
        <button
            disabled={page == 2}         
            onClick={() => {
                setPage((currPage) => currPage + 1);           
            }}>
                Next
        </button>

    </div>
          
    </div>
}

export default Cadastrar;
