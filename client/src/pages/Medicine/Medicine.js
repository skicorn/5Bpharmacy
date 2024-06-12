import { useEffect } from "react";
function Medicine(){
    useEffect(()=>{
        document.title="Medicine Management"
    })
    return(
        <div>
            <h2>MEDICINE</h2>
        </div>
    )
}
export default Medicine;