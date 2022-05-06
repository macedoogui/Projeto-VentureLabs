import { Api } from "../helpers/Api";

const parseResponse = (response) => response.json();

export const PessoaService = {
  getLista: () =>
    fetch(Api.PessoaLista(), { method: "GET" }).then(parseTransformLista),
  getById: (id) => fetch(Api.PessoaById, { method: "GET" }).then(parseResponse),
  create: () => fetch(Api.createPessoa, { method: "POST" }).then(parseResponse),
  update: (id) =>
    fetch(Api.updatePessoaById, { method: "PUT" }).then(parseResponse),
  delete: (id) =>
    fetch(Api.deletePessoaById, { method: "DELETE" }).then(parseResponse),
};

const transformPessoa = (Pessoa) => {
  const [nome, sobrenome] = Pessoa.nome.split(" ");

  return {
    ...Pessoa,
    id: Pessoa._id,
    titulo: Pessoa.nome,
    nome,
  };
};

const parseTransformLista = (response) =>
  parseResponse(response).then((Pessoas) => Pessoas.map(transformPessoa));

const parseTransformItem = (response) =>
  parseResponse(response).then(transformPessoa);

export const PessoaService = {
  getLista: () =>
    fetch(Api.PessoaLista(), { method: "GET" }).then(parseTransformLista),

  getById: (id) =>
    fetch(Api.PessoaById(id), { method: "GET" }).then(parseTransformItem),

  create: (Pessoa) =>
    fetch(Api.createPessoa(), {
      method: "POST",
      body: JSON.stringify(Pessoa),
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }).then(parseResponse),

  updtateById: (id, Pessoa) =>
    fetch(Api.updatePessoaById(id), {
      method: "PUT",
      body: JSON.stringify(Pessoa),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(parseResponse),

                                         
  deleteById: (id) =>
    fetch(Api.deletePessoaById(id), { method: "DELETE" }).then(parseResponse),
};