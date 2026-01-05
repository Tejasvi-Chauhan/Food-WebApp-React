import { useRouteError } from "react-router-dom";

const Error=()=>{
    const e=useRouteError();
    console.log(e);
    return(
        <div>
            <h1>OOPS!!</h1>
            <h1>Something went Wrong</h1>
            <h3>{e.status} {e.statusText}</h3>
            
        </div>
    )
}

export default Error;