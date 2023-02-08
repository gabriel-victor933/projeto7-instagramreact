import Usuario from "./usuario.js"
import Sugestoes from "./sugestoes.js"

export default function Sidebar(){

    let arr = [{imagem:"./assets/img/catanacomics.svg", alt:"imagem de perfil", nomeUsuario:"catanacomics"}];

    return <>
    <div class="sidebar">
                    {arr.map(Usuario)}
                    
                    <Sugestoes />
          
                    <div class="links">
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                        Hashtags • Idioma
                    </div>

                    <div class="copyright">
                        © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
        </>
}