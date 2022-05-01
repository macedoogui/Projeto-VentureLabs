import "./PessoaLista.css"
import PessoaListaItem from "./PessoaListaItem"
import { useState, useEffect } from "react";
import { PessoaService } from "../../services/PessoaService";

function PessoaLista() {

    const [Pessoas , setPessoas] = useState([]);

    const getLista = async () => {
        const response = await PessoaService.getLista();
        setPessoas(response);
    };

      useEffect(() => {
        getLista();
      }, []);

    return (
    <div className="PessoaLista">
	{Pessoas.map((Pessoa, index) => (
        <PessoaListaItem
            key={`PessoaListaItem-${index}`}
            Pessoa={Pessoa}
            index={index}
            />		
        ))}
</div>
    );
  }
  
  export default PessoaLista;











