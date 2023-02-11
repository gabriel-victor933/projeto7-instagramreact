import { useState } from "react"

export default function Usuario(props){

    const [nome, setNome] = useState(props.nomeUsuario)
    const [foto, setFoto] = useState(props.imagem)

    function mudarNome(){
        const newnome = prompt("Qual o seu nome?")

        if(newnome != "" && newnome != undefined){
            setNome(newnome)
        }
        
    }

    function mudarFoto(){
        const newfoto = prompt("Qual o link da nova foto?")

        if(newfoto != "" && newfoto != undefined){
            setFoto(newfoto);
        }
        
    }


    return <>
        <div className="usuario">
                        <img  data-test="profile-image" src={foto} alt={nome} onClick={mudarFoto}/>
                        <div className="texto">
                            <span>
                                <strong data-test="name" >{nome}</strong>
                                <ion-icon data-test="edit-name" name="pencil" onClick={mudarNome}></ion-icon>
                            </span>
                        </div>
                    </div>
    </>
}