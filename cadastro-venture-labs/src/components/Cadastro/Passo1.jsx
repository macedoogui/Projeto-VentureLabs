import React from "react";

function Passo1(){
    return <div className="Cadastro_Passo1">

                <form className="Formulario1">

                    <label>Nome: </label>
                    <input type="text" name="nome" className="nome"></input>

                    <label>Sobrenome: </label>
                    <input type="text" name="sobrenome" className="sobrenome"></input>

                    <label>E-mail: </label>
                    <input type="text" name="email" className="email"></input>

                    <label>Telefone: </label>
                    <input type="text" name="telefone" className="telefone"></input>

                </form>

             </div>
}

export default Passo1;