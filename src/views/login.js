import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="login-login">
        
        <div className="login-header">
        <div class="menuIcon"><img class="menuIconImg" src="/playground_assets/hamburgerIcon.png"></img></div>
          <div className="headingTitle">
              IBM IDBP
          </div>
        </div>
        <div className="login-page">
          <div className="login-block">
              
            <div className="login-text14 productiveheading-05">
              <span>Log in</span>
            </div>
            <div className="login-text16 body-Short-01">
              <span>
                Don't have an account?
              </span>
            </div>
            <div className="login-link">
              <span className="login-text12 linkbody-Short-01">
                <span>Create an IBMid</span>
              </span>
            </div>

            
            <div className="login-textinput">
              <div className="login-labelmargin">
                <span className="login-text06 utilitystyleslabel-01">
                  <span>IBMId</span>
                </span>
              </div>
              <div className="login-link1">
                <span className="login-text18 label-01">
                  <span>Forgot ID?</span>
                </span>
              </div>
              <div class="userNameTextBox">
                <input type="text" className="usernameInput" name="title" />
              </div>
            </div>

            <div className="login-textinput2">
              <div className="login-labelmargin">
                <span className="login-text06 utilitystyleslabel-01">
                  <span>Password</span>
                </span>
              </div>
              <div className="login-link2">
                <span className="login-text18 label-01">
                  <span>Forgot password?</span>
                </span>
              </div>
              <div class="passwordTextBox">
                <input type="text" className="passwordInput" name="title" />
              </div>
            </div>

            <button className="logInStyle">Log In</button>

          </div>
          
          <div className="login-rightLane">
            <img src="/playground_assets/rightLaneImg.png"  alt="Rectangle21448" className="login-rightStyle"/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
