import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import "./AdicionaEditaPessoaModal.css";
import { PessoaService } from "../../services/PessoaService";

function AdicionaEditaPessoaModal({
  closeModal,
  onCreatePessoa,
  mode,
  PessoaToUpdate,
  onUpdatePessoa,
}) {
  const form = {
    nome : "",
    sobrenome : "",
    email : "",
    telefone : "",
    cep : "",
    endereço1 : "",
    endereço2 : "",
    nascimento : "",
    cpf : "",
    renda : "",
    nome : PessoaToUpdate?.nome ??  "",
    sobrenome : PessoaToUpdate?.sobrenome ?? "",
    email : PessoaToUpdate?.email ?? "",
    telefone : PessoaToUpdate?.telefone ?? "",
    cep : PessoaToUpdate?.cep ?? "",
    endereço1 : PessoaToUpdate?.endereço1 ?? "",
    endereço2 : PessoaToUpdate?.endereço2 ?? "",
    nascimento : PessoaToUpdate?.nascimento ?? "",
    cpf : PessoaToUpdate?.cpf ?? "",
    renda : PessoaToUpdate?.renda ?? "",
  };

  const [state, setState] = useState(form);
  const [canDisable, setCanDisable] = useState(false);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.nome.length &&
      state.sobrenome.length &&
      state.email.length &&
      state.telefone.length &&
      state.cep.length &&
      state.endereço1.length &&
      state.endereço2.length &&
      state.nascimento.length &&
      state.cpf.lenght &&
      String(state.renda).length
    );

    setCanDisable(response);
  };

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const handleSend = async () => {

    const { nome , sobrenome , email , telefone , cep , endereço1 , endereço2 , nascimento , cpf , renda } = state;

    const titulo = nome + sobrenome;

    const Pessoa = {
      ...(PessoaToUpdate && { _id: PessoaToUpdate?.id }),
      nome: titulo,
      sobrenome,
      email,
      telefone,
      cep,
      endereço1,
      endereço2,
      nascimento,
      cpf,
      renda,
    };

    const serviceCall = {
      [ActionMode.NORMAL]: () => PessoaService.create(Pessoa),
      [ActionMode.ATUALIZAR]: () =>
        PessoaService.updtateById(PessoaToUpdate?.id, Pessoa),
    };

    const response = await serviceCall[mode]();

    const actionResponse = {
      [ActionMode.NORMAL]: () => onCreatePessoa(response),
      [ActionMode.ATUALIZAR]: () => onUpdatePessoa(response),
    };

    actionResponse[mode]();

    const reset = {
      nome: "",
      sobrenome: "",
      email: "",
      telefone: "",
      cep: "",
      endereço1: "",
      endereço2: "",
      nascimento: "",
      cpf: "",
      renda: "",
    };

    setState(reset);

    closeModal();
  };

  useEffect(() => {
    canDisableSendButton();
  });

  return (
    <Modal closeModal={closeModal}>
      
      <div className="AdicionaPessoaModal">
        
        <form autoComplete="off">
          <h1>
            {ActionMode.ATUALIZAR === mode ? "Atualizar" : "Adicionar"}{" "}
            Clientes
          </h1>
          <div>
            <label className="AdicionaPessoaModal__text" htmlFor="nome">
              {" "}
              Nome:{" "}
            </label>
            <input
              id="nome"
              placeholder="Nome"
              type="text"
              value={state.nome}
              onChange={(e) => handleChange(e, "nome")}
              required
            />
          </div>
          <div>
            <label className="AdicionaPessoaModal__text" htmlFor="sobrenome">
              {" "}
              Sobrenome:{" "}
            </label>
            <input
              id="sobrenome"
              placeholder="Sobrenome"
              type="text"
              value={state.sobrenome}
              onChange={(e) => handleChange(e, "sobrenome")}
              required
            />
          </div>
          <div>
            <label className="AdicionaPessoaModal__text" htmlFor="email">
              {" "}
              E-mail:{" "}
            </label>
            <input
              id="email"
              placeholder="exemplo@exemplo.com"
              type="text"
              value={state.email}
              onChange={(e) => handleChange(e, "email")}
              required
            />
          </div>
          <div>
            <label className="AdicionaPessoaModal__text" htmlFor="telefone">
              {" "}
              Telefone:{" "}
            </label>
            <input
              id="telefone"
              placeholder="(DDD)9xxxx-xxxx"
              type="text"
              value={state.telefone}
              onChange={(e) => handleChange(e, "telefone")}
              required
            />
          </div>
          
          <div>
            <label className="AdicionaPessoaModal__text" htmlFor="cep">
              {" "}
              Cep:{" "}
            </label>
            <input
              id="cep"
              placeholder="xxxxx-xxx"
              type="text"
              value={state.cep}
              onChange={(e) => handleChange(e, "cep")}
              required
            />
          </div>

    <div>
            <label className="AdicionaPessoaModal__text" htmlFor="endereço1">
              {" "}
              Endereço 1:{" "}
            </label>
            <input
              id="endereço1"
              placeholder="Rua, avenida, praça, etc..."
              type="text"
              value={state.endereço1}
              onChange={(e) => handleChange(e, "endereço1")}
              required
            />
          </div>

          <div>
            <label className="AdicionaPessoaModal__text" htmlFor="endereço2">
              {" "}
              Endereço 2:{" "}
            </label>
            <input
              id="endereço2"
              placeholder="Rua, avenida, praça, etc..."
              type="text"
              value={state.endereço2}
              onChange={(e) => handleChange(e, "endereço2")}
            />
          </div>

          <div>
            <label className="AdicionaPessoaModal__text" htmlFor="nascimento">
              {" "}
              Data de nascimento:{" "}
            </label>
            <input
              id="nascimento"
              placeholder="DD/MM/AAAA"
              type="text"
              value={state.nascimento}
              onChange={(e) => handleChange(e, "nascimento")}
              required
            />
          </div>

    <div>
            <label className="AdicionaPessoaModal__text" htmlFor="cpf">
              {" "}
              CPF:{" "}
            </label>
            <input
              id="cpf"
              placeholder="XXX.XXX.XXX-XX"
              type="text"
              value={state.cpf}
              onChange={(e) => handleChange(e, "cpf")}
              required
            />
          </div>

          <div>
            <label className="AdicionaPessoaModal__text" htmlFor="renda">
              {" "}
              Renda Mensal:{" "}
            </label>
            <input
              id="renda"
              placeholder="R$XXXX,XX"
              type="text"
              value={state.renda}
              onChange={(e) => handleChange(e, "renda")}
            />
          </div>

          <button
            className="AdicionaPessoaModal__enviar"
            type="button"
            disabled={canDisable}
            onClick={handleSend}
          >
            Enviar
                        {ActionMode.NORMAL === mode ? "Enviar" : "Atualizar"}
          </button>
          
        </form>
              
      </div>
      
    </Modal>
  );
}

export default AdicionaEditaPessoaModal;