import React, { Component } from 'react';

class LoginPage extends Component {
   

  render() {
    return (
      <div class="container">
        <h1>Login Page</h1>
        <p>Please enter your email and password.</p>
        <hr/>

        <label for="uname"><b>Username</b></label>
        <input id = "userinput" type="text" placeholder="Enter Username" name="uname" required/>

        <label for="psw"><b>Password</b></label>
        <input id = "userpassword" type="password" placeholder="Enter Password" name="psw" required/>
              
        <a href="javascript:check()">Submit</a>
        <br/>
        <br/>
        <a href="sign_up.html">Don't have an account? Sign up now!</a>
        <br/>
        <a href="homepage.html">Back to homepage</a>

        <div class="jumbotron">
          <div>
            <h3>I know its cheesy but I feel grate!</h3>
          </div>
        </div>
    </div>
    );
  }
}

export default LoginPage;
