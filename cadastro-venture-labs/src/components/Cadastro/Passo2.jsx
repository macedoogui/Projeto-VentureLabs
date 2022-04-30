import React from "react";

function Passo2(){
    return <div className="Cadastro_Passo2">

                <form className="Formulario2">

                    <label>CEP: </label>
                    <input type="text" name="cep" className="cep"></input>

                    <label >Endereço 1: </label>
                    <input type="text" name="endereço1" className="endereço1"></input>

                    <label >Endereço 2: </label>
                    <input type="text" name="endereço2" className="endereço2"></input>


                </form>

             </div>
}

export default Passo2;