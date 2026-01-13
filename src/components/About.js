import User from "./User";
import UserClass from "./UserClass";

const About=()=>{
    return(
        <div className="about">
            <h1>This is About Us Page</h1>
            <h1 className="text-3xl font-bold underline text-blue-600">
        This is About Us Page
      </h1>
            <div className="user-details">
            <User/>
            </div>
            

            
            <div className="user-details">
            <UserClass/>
            </div>

        </div>
    )
};

export default About;

/* 
    Lifecycle of Class Components

    
   Parent Constructor
   parent render
    Child1 Constructor
    Child1 render
    Child2 Constructor
    Child2 render
    Child1 componentDidMount
    Child2 componentDidMount
    parent componentDidMount


**/