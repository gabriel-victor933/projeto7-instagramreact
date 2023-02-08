import Sidebar from "./sidebar.js"
import Stories from "./stories.js"
import Posts from "./posts.js"

export default function Corpo(){
    return (
        <>
        <div class="corpo">
                <div class="esquerda">

                    <Stories ></Stories>
                    
                    <Posts />
                    
                </div>
                <Sidebar />
                
            </div>
        </>
    )
}