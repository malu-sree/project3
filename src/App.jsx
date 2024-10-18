import React from 'react';
import OTPRequest from './otprequest';
import OTPValidate from './otpvalidation';

function App() {
  return (
    <div className="App">
      <h1>OTP Verification</h1>
      <OTPRequest />
      <OTPValidate />
    </div>
  );
}

export default App;
