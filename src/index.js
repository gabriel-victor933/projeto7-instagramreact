import ReactDOM from "react-dom"
import App from "./components/app.js"
import Usuario from "./components/usuario.js"

ReactDOM.render(<App />, document.querySelector(".root"));

let button = document.getElementsByName("pencil");
button[0].addEventListener("click",alterarUsuario);

function alterarUsuario(){
    let newName = prompt("Qual é o seu nome?");

    
    console.log(newName);
}