import React, { useState } from 'react';

export const Bmi = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBmi = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      const bmiValue = (w / (h * h)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <div className='app-container'>
        <h1 classname='head'>Body Mass Index Calculator</h1>
      <div>
        <label htmlFor='height' className='height'>
          Enter Your Height (cm):
        </label>
        <input
          type='number'
          value={height}
          placeholder='Enter your height'
          className='inputlabel'
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='weight' className='weight'>
          Enter Your Weight (kg):
        </label>
        <input
          type='number'
          value={weight}
          placeholder='Enter your weight'
          className='inputlabel'
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBmi} className='calc'>Calculate BMI</button>
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
};
