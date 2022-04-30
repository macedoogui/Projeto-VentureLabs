import { pessoas } from "../mocks/pessoas.js";
import "./PessoaLista.css"

function pessoaLista() {
    return <div className="pessoaLista">
	{pessoas.map((pessoa, index) => (
		<div className="pessoaListaItem" key={`PessoaListaItem-${index}`}>
			<div>
				<div className="PessoaListaItem__nome"> {pessoa.nome} </div>
				<div className="PessoaListaItem__sobrenome"> {pessoa.sobrenome} </div>
				<div className="PessoaListaItem__email"> {pessoa.email} </div>
                <div className="PessoaListaItem__telefone"> {pessoa.telefone} </div>
                <div className="PessoaListaItem__cep"> {pessoa.cep} </div>
                <div className="PessoaListaItem__endereço1"> {pessoa.endereço1} </div>
                <div className="PessoaListaItem__endereço2"> {pessoa.endereço2} </div>
                <div className="PessoaListaItem__nascimento"> {pessoa.nascimento} </div>
                <div className="PessoaListaItem__cpf"> {pessoa.cpf} </div>
                <div className="PessoaListaItem__renda"> {pessoa.renda} </div>
                
				
			</div>
			
		</div>
	))}
</div>;
  }
  
  export default pessoaLista;

