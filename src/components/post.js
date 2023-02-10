import { useState } from "react"

export default function Post(props) {

    const [icone, setIcone] = useState("bookmark-outline")
    const [like, setLike] = useState("heart-outline")
    const [qtdlikes, setqtdlikes] = useState(props.Ncurtidas)
    const [animacao, setanimacao] = useState("")

    function mudaricone(info){
        
        if(info=="bookmark-outline"){
            setIcone("bookmark")
        } else {
            setIcone("bookmark-outline")
        }
    }

    function mudarLike(info){
        
        if(info=="heart-outline"){

            if(like == "heart") return;

            setLike("heart");
            setqtdlikes(qtdlikes+1)

        } else {
            setLike("heart-outline")
            setqtdlikes(qtdlikes-1)
            setanimacao("");

        }
    }

    function clickImagem(){
        mudarLike("heart-outline")

        setanimacao("animacao");

        setTimeout(() => {
            setanimacao("");
        }, 500);
    }

    return <>
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagemUsuario} alt={props.nomeUsuario}/>
                    {props.nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" src={props.imagem} alt={props.altimagem} onDoubleClick={()=> clickImagem()}/>
                <ion-icon name="heart" class={`heartclicked ${animacao}`}></ion-icon>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" name={like} onClick={()=> mudarLike(like)} class={like}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                    <ion-icon data-test="save-post" name={icone} onClick={()=> mudaricone(icone)}></ion-icon>
                        
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imagemQuemCurtiu} alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>{props.quemCurtiu}</strong> e <strong >outras <span data-test="likes-number">{qtdlikes}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    </>
}