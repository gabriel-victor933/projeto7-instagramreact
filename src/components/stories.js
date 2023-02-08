import Story from "./story.js"

export default function Stories() {

    let arr = [
        {imagem:"assets/img/9gag.svg", alt:"9gag", texto:"9gag"},
        {imagem:"assets/img/meowed.svg", alt:"meowed", texto:"meowed"},
        {imagem:"assets/img/barked.svg", alt:"barked", texto:"barked"},
        {imagem:"assets/img/nathanwpylestrangeplanet.svg", alt:"nathanwpylestrangeplanet", texto:"nathanwpylestrangeplanet"},
        {imagem:"assets/img/wawawicomics.svg", alt:"wawawicomics", texto:"wawawicomics"},
        {imagem:"assets/img/respondeai.svg", alt:"respondeai", texto:"respondeai"},
        {imagem:"assets/img/filomoderna.svg", alt:"filomoderna", texto:"filomoderna"},
        {imagem:"assets/img/memeriagourmet.svg", alt:"memeriagourmet", texto:"memeriagourmet"}
    ]

    return <>
        <div class="stories">

            {arr.map(Story)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    </>
}