
import "./formAchado.css"

function FormAchado(){
    return(<div className="formaPrincipal">

       <div className="formulario">

        <div className="teste">
            <form className="formu">
                    

                    <input className="inp" type="text" placeholder="O que encontrou?"/>
                    <input className="inp" type="text" placeholder="Onde encontrou?"/>
                    <br />
                    <br />
                    <input className="inp"  type="text" placeholder="Contacto Preferencial?"/>

                    <select name="categoria" id="ctg">
                        <option value="Electronicos">Electronicos</option>
                        <option value="Documentos">Documentos</option>
                        <option value="Outros">Outros</option>
                    </select>
                
                    <br />
                    <div className="pai">


                    <input className="carrega" type="text" placeholder="Descrição"/>

                    <div className="carrega1">
                        <p>Carregar Imagem</p>
                    </div>
                    </div>
                    <br /> <br />
                    <button id="regI" type="submit">Registar Item</button>

            </form>

            </div>
        </div> 

    </div>)
}
export default FormAchado;