import Sidebar from "./sidebar.js"
import Stories from "./stories.js"
import Posts from "./posts.js"

export default function Corpo(){
    return (
        <>
        <div className="corpo">
                <div className="esquerda">

                    <Stories ></Stories>
                    
                    <Posts />
                    
                </div>
                <Sidebar />
                
            </div>
        </>
    )
}