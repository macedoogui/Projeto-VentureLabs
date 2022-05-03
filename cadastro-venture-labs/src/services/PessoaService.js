import { Api } from "../helpers/Api";

const parseResponse = (response) => response.json();

const transformPessoa = (Pessoa) => {
  const [nome] = Pessoa.nome.split(" com ");

  return {
    ...Pessoa,
    id: Pessoa._id,
    titulo: Pessoa.nome,
    nome,
  };
};

const parseTransformLista = (response) =>
  parseResponse(response).then((Pessoas) => Pessoas.map(transformPessoa));

export const PessoaService = {
  getLista: () =>
    fetch(Api.PessoaLista(), { method: "GET" }).then(parseTransformLista),
  getById: (id) =>
    fetch(Api.PessoaById(id), { method: "GET" }).then(parseResponse),
  create: () =>
    fetch(Api.createPessoa(), { method: "POST" }).then(parseResponse),
  updtateById: (id) =>
    fetch(Api.updatePessoaById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deletePessoaById(id), { method: "DELETE" }).then(parseResponse),
};