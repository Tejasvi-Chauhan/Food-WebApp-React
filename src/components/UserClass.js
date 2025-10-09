/**
 * UserClass is a React class-based component that demonstrates the lifecycle methods:
 * 
 * 1. constructor: Initializes state and binds methods.
 * 2. componentDidMount: Invoked immediately after the component is mounted. Used here to fetch user data from the GitHub API and update the state.
 * 3. componentDidUpdate: Called immediately after updating occurs. Used here to log updates.
 * 4. componentWillUnmount: Invoked immediately before a component is unmounted and destroyed. Used here to log unmounting.
 * 5. render: Renders the component UI based on the current state.
 * 
 * @class
 * @extends React.Component
 * @property {Object} state - Contains userInfo object with user details.
 * @method constructor - Initializes the component state.
 * @method componentDidMount - Fetches user data after component mounts.
 * @method componentDidUpdate - Logs when the component updates.
 * @method componentWillUnmount - Logs when the component is about to unmount.
 * @method render - Renders the user information.
 */

import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      userInfo:{
        name: "Dummy Name",
        location: "Dummy Location",
        contact: "Dummy Contact",
        },
    }

  }

   async componentDidMount() {
       
      /* 
       componentDidMount is a lifecycle method which is called after the component is rendered. It is used to fetch data from an API and update the state of the component.
      **/
       const data=await fetch("https://api.github.com/users/Tejasvi-Chauhan");
        const json=await data.json();
        console.log(json);
    
       this.setState({
        userInfo: json,
       })
  }

  componentDidUpdate(){
    console.log("Component Did Update");
  }
  componentWillUnmount(){
    console.log("Component Will Unmount");
  }
  render() {
  
    return (
      <div className="user">
        <h1>Name : {this.state.userInfo.login}</h1>
        <h2>Location :{this.state.userInfo.location}</h2>
        <h3>Contact : 1234567890</h3>
      </div>
    );
  }
}
export default UserClass;

/* 
    Lifecycle of Class Components
    
**/



