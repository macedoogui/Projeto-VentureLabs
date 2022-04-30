import React from "react";

function Passo3(){
    return <div className="Cadastro_Passo3">

                <form className="Formulario3">

                    <label>Data de nascimento: </label>
                    <input type="text" name="nascimento" className="nascimento"></input>

                    <label>CPF: </label>
                    <input type="text" name="cpf" className="cpf"></input>

                    <label>Renda Mensal: </label>
                    <input type="text" name="renda" className="renda"></input>

                </form>

             </div>
}

export default Passo3;