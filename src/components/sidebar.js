import Usuario from "./usuario.js"
import Sugestoes from "./sugestoes.js"
import { useState } from "react";

export default function Sidebar(){


    let arr = [{imagem:"./assets/img/catanacomics.svg", alt:"imagem de perfil", nomeUsuario:"catanacomics"}];




    return <>
    <div className="sidebar">
                    {arr.map((p)=> <Usuario key ="usuario" imagem={p.imagem} nomeUsuario={p.nomeUsuario}/>)}
                    
                    <Sugestoes />
          
                    <div className="links">
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                        Hashtags • Idioma
                    </div>

                    <div className="copyright">
                        © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
        </>
}