import React, { useState } from 'react'
import styles from './Register.module.css';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';
import StepUsername from '../Steps/StepUsername/StepUsername';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepName from '../Steps/StepName/StepName';
import StepOtp from '../Steps/StepOTP/StepOtp';

const steps={
    1: StepPhoneEmail,
    2: StepOtp,
    3: StepName,
    4: StepAvatar,
    5: StepUsername
}

const Register = () => {
  const [step, setStep]=useState(1);
  const Step=steps[step]; 
  function onNext(){
    setStep(step+1);
  }

  return (
    <div>
      <Step  onNext={onNext}/>
    </div>
  )
}

export default Register
