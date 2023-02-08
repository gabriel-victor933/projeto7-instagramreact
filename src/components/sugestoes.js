import Sugestao from "./sugestao.js"

export default function Sugestoes(){

    let arr = [
        {imagem: "assets/img/bad.vibes.memes.svg",alt: "bad.vibes.memes.svg",nome: "ad.vibes.memes",razao: "Segue você"},
        {imagem: "assets/img/chibirdart.svg",alt: "chibirdart",nome: "chibirdart",razao: "Segue você" },
        {imagem: "assets/img/razoesparaacreditar.svg",alt: "razoesparaacreditar",nome: "azoesparaacreditar",razao: "Novo no Instagram" },
        {imagem: "assets/img/adorable_animals.svg",alt: "adorable_animals",nome: "adorable_animals",razao: "Segue você" },
        {imagem: "assets/img/smallcutecats.svg",alt: "smallcutecats",nome: "smallcutecats",razao: "Segue você" }
    ]
    return <>
    <div class="sugestoes">
                        <div class="titulo">
                            Sugestões para você
                            <div>Ver tudo</div>
                        </div>

                        {arr.map(Sugestao)}

                    </div></>
}