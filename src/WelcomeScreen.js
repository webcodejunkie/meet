import React from "react";
import './css/WelcomeScreen.css';

function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <div className="WelcomeScreen">
        <h1 className="display-3">Welcome to the <span className="meetWelcomeHeader">M</span>eet app!</h1>
        <h4>
          Log in to see upcoming events around the world for
          full-stack
          developers
        </h4>
        <div className="button_cont" align="center">
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
            </div>
            <button onClick={() => { props.getAccessToken() }}
              rel="nofollow noopener"
              className="btn-text"
            >
              <b>Sign in with google</b>
            </button>
          </div>
        </div>
        <a
          href="https://webcodejunkie.github.io/meet/privacy.html"
          rel="nofollow noopener"
        >
          Privacy policy
        </a>
        <div className='movingBallOne ballOne'></div>
        <div className='movingBallTwo ballTwo'></div>
        <div className='movingBallThree ballThree'></div>
        <div className='movingBallFour ballFour'></div>
      </div>
    )
    : null
}
export default WelcomeScreen;