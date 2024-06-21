import React from 'react';
import '../styles/signin.css';

const SignIn = () => {
  return (
    <>
      <div className='container d-flex justify-content-center align-items-center vh-100'>
        <div className="row w-100">
          <div className="col-md-5 mb-3 mb-md-0 custom-card-1">
            <div className="card-body">
              <p className="card-title">
                <strong style={{ fontSize: '20px' }}>Smile-Tech</strong></p>
              <p className="card-text mt-4">
                <strong style={{ fontSize: '23px' }}>
                  SIGN IN TO YOUR <br />
                  <span style={{ color: '#3F83A0' }}>WORK SPACE !</span>
                </strong>
              </p>
            </div>
          </div>
          <div className="col-md-5 offset-md-1 custom-card-2">
            <div className="card-body">
              <p className="card-title"><strong style={{ fontSize: '25px' }}>Let's Start</strong></p>
              <form className='mt-5'>
                <div className="mb-2 form-input d-flex align-items-center">
                  <i className="fa-solid fa-envelope me-2"></i>
                  <input type="text" placeholder='Enter user id' className='forms-control flex-grow-1' />
                </div>
                <div className="mb-2 form-input d-flex align-items-center">
                  <i className="fa-solid fa-lock me-2"></i>
                  <input type="password" placeholder='Enter Password' className='forms-control flex-grow-1' />
                  <i className="fa-regular fa-eye-slash ms-2"></i>
                </div>
                <button className='btn mt-2' style={{ backgroundColor: '#2F789B', width: '100%', color: 'white' }}>Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
