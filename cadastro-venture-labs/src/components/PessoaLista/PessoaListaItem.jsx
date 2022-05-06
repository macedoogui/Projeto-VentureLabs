import { ActionMode } from "../../constants";
import "./PessoaListaItem.css";

function PessoaListaItem({
  Pessoa,
  quantidadeSelecionada,
  index,
  clickItem,
  mode,
}) 
    
    return 

<div className="PessoaListaItem" 
  key={`PessoaListaItem-${index}`} 
  onClick={() => clickItem(Pessoa.id)} > 
        
				<div className="PessoaListaItem__titulo"> {Pessoa.titulo} </div>
  
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

      );
   
}

export default PessoaListaItem;
	