import "./PessoaDetalhesModal.css";
import Modal from "components/Modal/Modal";

function PessoaDetalhesModal({ Pessoa, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="PessoaDetalhesModal">
        <div>
            
          <div className="PessoaDetalhesModal__titulo"> {Pessoa.titulo} 
          </div>

          <div className="PessoaDetalhesModal__sobrenome"> {Pessoa.sobrenome} 
          </div>

          <div className="PessoaDetalhesModal__email"> {Pessoa.email} 
          </div>

          <div className="PessoaDetalhesModal__telefone"> {Pessoa.telefone} 
          </div>

          <div className="PessoaDetalhesModal__cep"> {Pessoa.cep} 
          </div>

          <div className="PessoaDetalhesModal__endereço1"> {Pessoa.endereço1} 
          </div>

          <div className="PessoaDetalhesModal__endereço2"> {Pessoa.endereço2} 
          </div>

          <div className="PessoaDetalhesModal__nascimento"> {Pessoa.nascimento} 
          </div>

          <div className="PessoaDetalhesModal__cpf"> {Pessoa.cpf} 
          </div>

          <div className="PessoaDetalhesModal__renda"> {Pessoa.renda} 
          </div>







        </div>

      </div>
    </Modal>
  );
}

export default PessoaDetalhesModal;
