export default function Navbar(){
    return <>
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Icone name="logo-instagram"></Icone>
                    <div className="separador"></div>
                    <img src="assets/img/logo.png" alt="logo" />
                </div>

                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div className="icones">
                    <Icone name="paper-plane-outline"></Icone>
                    <Icone name="compass-outline"></Icone>
                    <Icone name="heart-outline"></Icone>
                    <Icone name="person-outline"></Icone>
                </div>

                <div className="icones-mobile">
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
