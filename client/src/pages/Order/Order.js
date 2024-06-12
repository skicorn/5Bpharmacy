import { useEffect } from "react";
function Order(){
    useEffect(()=>{
        document.title="Order Management"
    })
    return(
        <div className="Order">
            <h2>ORDER</h2>
        </div>
    )
}
export default Order;   