import { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [bmiValue, setBmiValue] = useState({})
  const [bmiResult, setBmiResult] = useState('');
  const handleInputValue = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setBmiValue((preValue) => {
      return { ...preValue, [name]: value }
    })
  }
  const submited = (event) => {
    event.preventDefault()
    console.log('----$$', bmiValue)
    bmiCalculator()
  }


  const bmiCalculator = () => {

    const weight = bmiValue.weight;
    const height = bmiValue.height;
    const bmi = weight / Math.sqrt(height)
    // const bmi = weight / (height * height)
    console.log('Bmi Value', bmi);

    let result = ''

    if (bmi < 18.5) {
      result = 'Under Weight'
    } else if (bmi >= 18.5 && bmi < 25) {
      result = 'Normal'
    } else if (bmi >= 25 && bmi < 30) {
      result = 'Over Weight'

    } else if (bmi > 30) {
      result = 'Obesity'
    }

    else {
      result = 'Please Enter Correct Value';
    }
    setBmiResult(result);
    console.log('result', result)
  }


  return (
    <div className="container">
      <h1 className='h1tag'>BMI Calculator</h1> <br />
      <div className='input'>

        <form onSubmit={submited}>
          <label> Enter Your Weight in Kg :
            <input className='input' type='text' name='weight'  onChange={handleInputValue} />
          </label> <br />
          <label> Enter Your Height  :
            <input className='input' type='text' name='height' onChange={handleInputValue} />
          </label> <br /> <br />
          <button className='submitButton' type='submit'> Check Your Bmi Value  </button>

          <h5 className='h1tag' >Your BMI Value is : {bmiResult} </h5>
        </form>

      </div>

    </div>
  );
}

export default App;
