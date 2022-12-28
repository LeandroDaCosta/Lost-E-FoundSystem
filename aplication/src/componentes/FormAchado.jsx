
import "./formAchado.css"

function FormAchado(){
    return(<div className="formaPrincipal">

       <div className="formulario">

        <div className="teste">
            <form className="formu">
                    

                    <input type="text" placeholder="O que encontrou?"/>
                    <input type="text" placeholder="Onde encontrou?"/>
                    <br />
                    <br />
                    <input type="text" placeholder="Contacto Preferencial?"/>
                    <input type='' placeholder="Categoria"/>
                
                    <br />
                    <div className="pai">

                    <div className="carrega"></div>
                    <div className="carrega1"></div>
                    </div>
                    <br /> <br />
                    <button type="submit">Registar Item</button>

            </form>

            </div>
        </div> 

    </div>)
}
export default FormAchado;