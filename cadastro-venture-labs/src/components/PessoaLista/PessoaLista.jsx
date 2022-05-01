import { Pessoas } from "../mocks/Pessoas.js";
import "./PessoaLista.css"

function PessoaLista() {
    return <div className="PessoaLista">
      <h1>Lista de Clientes</h1>
	{Pessoas.map((Pessoa, index) => (
		<div className="PessoaListaItem" key={`PessoaListaItem-${index}`}>
			<div>
				<div className="PessoaListaItem__nome"> {Pessoa.nome} </div>
				<div className="PessoaListaItem__sobrenome"> {Pessoa.sobrenome} </div>
				<div className="PessoaListaItem__email"> {Pessoa.email} </div>
                <div className="PessoaListaItem__telefone"> {Pessoa.telefone} </div>
                <div className="PessoaListaItem__cep"> {Pessoa.cep} </div>
                <div className="PessoaListaItem__endereço1"> {Pessoa.endereço1} </div>
                <div className="PessoaListaItem__endereço2"> {Pessoa.endereço2} </div>
                <div className="PessoaListaItem__nascimento"> {Pessoa.nascimento} </div>
                <div className="PessoaListaItem__cpf"> {Pessoa.cpf} </div>
                <div className="PessoaListaItem__renda"> {Pessoa.renda} </div>
                
				
			</div>
			
		</div>
	))}
</div>;
  }
  
  export default PessoaLista;
