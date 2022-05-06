import "./PessoaLista.css";
import { useState, useEffect, usaCallback } from "react";
import PessoaListaItem from "./PessoaListaItem";
import { PessoaService } from "../../services/PessoaService";
import PessoaDetalhesModal from "../Modal/Modal";
import { ActionMode } from "../../constants/index";
 

function PessoaLista({
  PessoaCriada,
  mode,
  updatePessoa,
  deletePessoa,
  PessoaEditada,
  PessoaRemovida,
}) {
  
  const [Pessoas, setPessoas] = useState([]);
  const [PessoaSelecionada, setPessoaSelecionada] = useState({});
  const [PessoaModal, setPessoaModal] = useState(false)

  const getLista = async () => {
    const response = await PessoaService.getLista();
    setPessoas(response);
  };

    const getPessoaById = async (PessoaId) => {
    const response = await PessoaService.getById(PessoaId);
    setPessoaModal(response);
    const mapper = {
      [ActionMode.NORMAL]: () => setPessoaModal(response),
      [ActionMode.ATUALIZAR]: () => updatePessoa(response),
      [ActionMode.DELETAR]: () => deletePessoa(response),
    };

    mapper[mode]();
  };

  const onAdd = (PessoaIndex) => {
    const Pessoa = {
      [PessoaIndex]: +(PessoaSelecionada[PessoaIndex] || 0) + 1,
    };
    setPessoaSelecionada({ ...PessoaSelecionada, ...Pessoa });
    console.log(PessoaSelecionada);
  };

  const onRemove = (PessoaIndex) => {
    const Pessoa = {
      [PessoaIndex]: +(PessoaSelecionada[PessoaIndex] || 0) - 1,
    };
    setPessoaSelecionada({ ...PessoaSelecionada, ...Pessoa });
    console.log(PessoaSelecionada);
  };

  const adicionaPessoaNaLista = useCallback(
    (Pessoa) => {
      const lista = [...Pessoas, Pessoa];
      setPessoas(lista);
    },
    [Pessoas]
  );

  useEffect(() => {
    if (
      PessoaCriada &&
      !Pessoas.map(({ id }) => id).includes(PessoaCriada.id)
    ) {
      adicionaPessoaNaLista(PessoaCriada);
    }
  }, [adicionaPessoaNaLista, PessoaCriada, Pessoas]);

  useEffect(() => {
    getLista();
  }, [PessoaEditada]);


  return (
    <div className="PessoaLista">
      <h1>Lista de Clientes</h1>
      {Pessoas.map((Pessoa, index) => (
        <PessoaListaItem
          mode={mode}
          key={`PessoaListaItem-${index}`}
          Pessoa={Pessoa}
          quantidadeSelecionada={PessoaSelecionada[index]}
          index={index}
          clickItem={(PessoaId) => getPessoaById(PessoaId)}
        />
      ))}
      {PessoaModal && (
        <PessoaDetalhesModal
          Pessoa={PessoaModal}
          closeModal={() => setPessoaModal(false)}
        />
      )}
    </div>
  );
}
  
  export default PessoaLista;
