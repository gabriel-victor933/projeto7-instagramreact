import Post from "./post.js"

export default function Posts() {

    let arr = [
        { imagemUsuario: "assets/img/meowed.svg", nomeUsuario: "meowed", imagem: "assets/img/gato-telefone.svg", altimagem: "gato-telefone", imagemQuemCurtiu: "assets/img/respondeai.svg", quemCurtiu: "respondeai", Ncurtidas: 101523},
        { imagemUsuario:"assets/img/barked.svg" , nomeUsuario: "barked", imagem: "assets/img/dog.svg", altimagem: "dog", imagemQuemCurtiu: "assets/img/adorable_animals.svg", quemCurtiu: "adorable_animals", Ncurtidas: 99159},
        { imagemUsuario: "assets/img/meowed.svg", nomeUsuario: "meowed", imagem: "assets/img/gato-telefone.svg", altimagem: "gato-telefone", imagemQuemCurtiu: "assets/img/respondeai.svg", quemCurtiu: "respondeai", Ncurtidas: 101523},
        { imagemUsuario:"assets/img/barked.svg" , nomeUsuario: "barked", imagem: "assets/img/dog.svg", altimagem: "dog", imagemQuemCurtiu: "assets/img/adorable_animals.svg", quemCurtiu: "adorable_animals", Ncurtidas: 99159},
    ];

    return <>

        <div class="posts">

            {arr.map(Post)}

        </div>

    </>
}