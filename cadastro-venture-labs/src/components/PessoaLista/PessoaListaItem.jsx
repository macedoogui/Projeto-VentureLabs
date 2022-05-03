import "./PessoaListaItem.css";
import { Pessoas } from "../mocks/Pessoas"

function PessoaListaItem() {

    const index = 0;
    const Pessoa = [
        {
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
        }
    ];

    return 

<div className="PessoaListaItem"> 
      {Pessoas.map((Pessoa, index) => (

			<div key={`PessoaListaItem-${index}`}>
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
      ))};

</div>
   
}

export default PessoaListaItem;
	