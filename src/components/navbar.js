export default function Navbar(){
    return <>
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <Icone name="logo-instagram"></Icone>
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" alt="logo" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                    <Icone name="paper-plane-outline"></Icone>
                    <Icone name="compass-outline"></Icone>
                    <Icone name="heart-outline"></Icone>
                    <Icone name="person-outline"></Icone>
                </div>

                <div class="icones-mobile">
                    <Icone name="paper-plane-outline"></Icone>
                </div>
            </div>

        </div>
        </>
    
}

function Icone(props){

    return <>
    <ion-icon name={props.name}></ion-icon>
    </>
}
