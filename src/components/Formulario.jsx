import { useState } from "react";
import Card from './Card';
import style from '../style.module.css'

function Formulario () {
    const [name, setName] = useState("");
    const [book, setbook] = useState("");

   
    const [isError, setIsError] = useState(false);
    const [showCardMessage, setShowCardMessage] = useState(false);

    const onChangeName = (e) => setName(e.target.value);
    const onChangebook = (e) => setbook(e.target.value);

    const validateName = (name) => {

        if ((name.trim()).length >= 3){
            return true;
        }else{
            return false;
        }
    }

    const validatebook = (book) => {
        if ((book.trim()).length >= 6){
            return true;
        }else{
            return false;
        }
    }


    function onSubmitForm(e){
        e.preventDefault();

        if(validateName(name) && validatebook(book)){
            setIsError(false);
            console.log("Nombre guardado")
            setShowCardMessage(true)
        }else{
            setIsError(true);
            console.log("Error al guardar nombre")
            setShowCardMessage(false)
        }
    }

    return(
        <>
            <form className={style.form} onSubmit={onSubmitForm}>
                <div className={style.space}>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="Escriba su nombre"
                        value={name}
                        onChange={onChangeName}
                    />
                </div>
                <div className={style.space}>
                    <input
                        className={style.input}
                        type="book"
                        placeholder="Escriba su libro favorito"
                        value={book}
                        onChange={onChangebook}
                    />
                </div>
 
                <div>
            <button className={style.button} type="submit">Enviar</button>
            </div>
            </form>
            {isError && <p className={style.error}>Por favor chequea que la información sea correcta.</p>}
            {showCardMessage ? <Card name={name} book={book}  /> : null}
        </>
    );
};
            

export default Formulario;
