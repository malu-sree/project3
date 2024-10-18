import React, { useState } from 'react';
import axios from 'axios';

const OTPValidate = () => {
  const [otp, setOtp] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle OTP Validation
  const handleOTPValidate = async () => {
    try {
      const response = await axios.post('http://localhost:5000/validate-otp', {
        phoneNumber,
        otp,
      });

      if (response.data.valid) {
        setMessage('OTP validated successfully!');
      } else {
        setMessage('Invalid OTP.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to validate OTP.');
    }
  };

  return (
    <div>
      <h2>Validate OTP</h2>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
      />
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={handleOTPValidate}>Validate OTP</button>
      <p>{message}</p>
    </div>
  );
};

export default OTPValidate;
