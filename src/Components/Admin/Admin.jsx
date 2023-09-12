
import { useState } from "react";
import Login from "./Login";
import Panel from "./Panel";


const Admin = () => {

    const [isAdmin,setIsAdmin]=useState(false);
   
    return (
        <div>
            {
                isAdmin ?(<Panel/>):( <Login setIsAdmin={setIsAdmin} />)
            }
        
        </div>
    )
}

export default Admin;