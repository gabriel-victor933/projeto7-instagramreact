export default function Usuario(props){

    return <>
        <div class="usuario">
                        <img  src={props.imagem} alt={props.alt}/>
                        <div class="texto">
                            <span>
                                <strong>{props.nomeUsuario}</strong>
                                <ion-icon name="pencil"></ion-icon>
                            </span>
                        </div>
                    </div>
    </>
}