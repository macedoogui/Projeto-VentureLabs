const PessoaContext = {
    PessoaEndpoint: () => `${Api.baseUrl}/Pessoas`,
    PessoaLista: () => `${PessoaContext.PessoaEndpoint()}/all-Pessoas`,
    PessoaById: (id) => `${PessoaContext.PessoaEndpoint()}/one-Pessoa/${id}`,
    createPessoa: () => `${PessoaContext.PessoaEndpoint()}/create-Pessoa`,
    updatePessoaById: (id) =>
      `${PessoaContext.PessoaEndpoint()}/update-Pessoa/${id}`,
    deletePessoaById: (id) =>
      `${PessoaContext.PessoaEndpoint()}/delete-Pessoa/${id}`,
  };
  
  export const Api = {
    baseUrl: "http://localhost:3333",
    ...PessoaContext,
  };