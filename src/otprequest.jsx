import React, { useState } from 'react';
import axios from 'axios';

const OTPRequest = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle OTP Request
  const handleOTPRequest = async () => {
    try {
      const response = await axios.post('http://localhost:5000/send-otp', {
        phoneNumber,
      });

      if (response.data.success) {
        setMessage('OTP sent successfully!');
      } else {
        setMessage('Error sending OTP.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to send OTP.');
    }
  };

  return (
    <div>
      <h2>Request OTP</h2>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
      />
      <button onClick={handleOTPRequest}>Send OTP</button>
      <p>{message}</p>
    </div>
  );
};

export default OTPRequest;
