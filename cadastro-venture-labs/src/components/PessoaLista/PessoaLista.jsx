import "./PessoaLista.css";
import { useState, useEffect } from "react";
import PessoaListaItem from "./PessoaListaItem";
import { PessoaService } from "../../services/PessoaService";

import PessoaDetalhesModal from "../Modal/Modal";
 

function PessoaLista() {
  const [Pessoas, setPessoas] = useState([]);

  const [PessoaSelecionada, setPessoaSelecionada] = useState({});

  const Pessoa = {
    nome : "Guilherme",
    sobrenome : "Macedo",
    email : "macedoogui@gmail.com",
    telefone : "(11)98911-0565",
    cep : "03144-070",
    endereço1 : "Rua das Clemates, 27",
    endereço2 : " ",
    nascimento : "28/01/1997",
    cpf : "481.315.778-56",
    renda : "R$4000,00"
    };

  const getLista = async () => {
    const response = await PessoaService.getLista();
    setPessoas(response);
  };

  useEffect(() => {
    getLista();
  }, []);


  return (
    <div className="PessoaLista">
      <h1>Lista de Clientes</h1>
      {Pessoas.map((Pessoa, index) => (
        <PessoaListaItem
          key={`PessoaListaItem-${index}`}
        />
      ))}


    </div>
  );
}
  
  export default PessoaLista;
