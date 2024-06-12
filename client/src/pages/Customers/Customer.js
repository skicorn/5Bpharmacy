import { useEffect } from "react";

function Customer(){
    useEffect(()=>{
        document.title="Customer Management"
    })
    return(
        <div>
            <h2>CUSTOMER</h2>
        </div>
    )
}
export default Customer;