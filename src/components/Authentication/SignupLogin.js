import React from 'react';
import cross_icon from '../../assets/img/cross_icon.svg';
import signup_login_illustration from '../../assets/img/signup_login_illustration.svg';
import facebook_logo from '../../assets/img/facebook_logo.svg';
import google_logo from '../../assets/img/google_logo.svg';

const SignupLogin = ({setIsLoggedIn}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  }

  return (
    <>
    <div className="modal" id="login-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h5>
            <button type="button" className="btn close-login-modal-btn" data-bs-dismiss="modal" aria-label="Close">
              <img src={cross_icon} alt="cross_icon" />
            </button>
          </div>
          <div className="modal-body">
            <div className='left-side'>
              <div className='login-heading'>
                <span>Log In</span>
              </div>
              <form className='login-header-form' onSubmit={handleSubmit}>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'/>
                <button className="login-modal-login-btn btn btn-primary">Submit</button>
              </form>
              <div className='login-footer'>
                <button className='sign-in-with-btn-facebook'>
                  <img src={facebook_logo} alt="facebook_logo" />
                  <span className='ms-2'>Sign In with Facebook</span>
                </button>
                <button className='sign-in-with-btn-google mt-2'>
                  <img src={google_logo} alt="google_logo" />
                  <span className='ms-2'>Sign In with Google</span>
                </button>
              </div>
            </div>
            <div className='right-side'>
              <div className='signup-message'>
                <span>Don’t have an account yet? </span>
                <button className='login-modal-signup-btn' data-bs-toggle="modal" data-bs-target="#signup-modal" data-bs-dismiss="modal" aria-label="Close">Create new for free!</button>
              </div>
              <div className='signup_login_illustration'>
                <img src={signup_login_illustration} alt="signup_login_illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="modal" id="signup-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h5>
            <button type="button" className="btn close-signup-modal-btn" data-bs-dismiss="modal" aria-label="Close">
              <img src={cross_icon} alt="cross_icon" />
            </button>
          </div>
          <div className="modal-body">
            <div className='left-side'>
              <div className='login-heading'>
                <span>Sign Up</span>
              </div>
              <form className='login-header-form' onSubmit={handleSubmit}>
                <div className='signup-name-div'>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder='First Name'/>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Last Name'/>    
                </div>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email'/>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'/>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Confirm Password'/>
                <button className="login-modal-login-btn btn btn-primary">Submit</button>
              </form>
              <div className='login-footer'>
                <button className='sign-in-with-btn-facebook'>
                  <img src={facebook_logo} alt="facebook_logo" />
                  <span className='ms-2'>Sign In with Facebook</span>
                </button>
                <button className='sign-in-with-btn-google mt-2'>
                  <img src={google_logo} alt="google_logo" />
                  <span className='ms-2'>Sign In with Google</span>
                </button>
              </div>
            </div>
            <div className='right-side'>
              <div className='signup-message'>
                <span>Already have an account? </span>
                <button className='login-modal-signup-btn' data-bs-toggle="modal" data-bs-target="#login-modal" data-bs-dismiss="modal" aria-label="Close">Sign In</button>
              </div>
              <div className='signup_login_illustration'>
                <img src={signup_login_illustration} alt="signup_login_illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default SignupLogin
