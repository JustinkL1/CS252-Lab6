import React, { Component } from 'react';
class SignupPage extends Component {

  render() {
    return (
        <div class="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>
    
            <label for="uname"><b>Username</b></label>
                <input id = "userinput" type="text" placeholder="Enter Username" name="uname" required/>
    
                <label for="psw"><b>Password</b></label>
                <input id = "userpassword" type="password" placeholder="Enter Password" name="psw" required/>
    
                <a href="javascript:passInfoDB()">Save</a>
        
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    
                <a href="homepage.html">Back to Home page</a>
                <br/>
                <a href="login.html">Click here to login</a>
        </div>
     
    );
  }
}

export default SignupPage;
