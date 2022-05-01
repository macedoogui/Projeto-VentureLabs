import { Api } from "../helpers/Api";

const parseResponse = (response) => response.json();

export const PessoaService = {
  getLista: () =>
    fetch(Api.PessoaLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.PessoaById(id), { method: "GET" }).then(parseResponse),
  create: () =>
    fetch(Api.createPessoa(), { method: "POST" }).then(parseResponse),
  updtateById: (id) =>
    fetch(Api.updatePessoaById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deletePessoaById(id), { method: "DELETE" }).then(parseResponse),
};