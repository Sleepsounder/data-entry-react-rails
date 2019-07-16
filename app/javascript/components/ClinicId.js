import React from 'react';
import './styles'

export const ClinicId = (props) => {
    const onContinue = e => {
        e.preventDefault();
        props.nextStep();
    }

    const { values, handleChange } = props;

    return (
        <div>
          <div className='header'>
            <h1>Rutgers Data Entry</h1>
          </div>
          <form className='main'>
            <h2 className='question'>1. What is your Clinic ID Number?</h2>
            <div className='answer'>
              <input
                onChange={handleChange("clinicId")}
                defaultValue={values.clinicId}
                className='input'
              />
              <br/>
              <input 
                type="submit" 
                value="Submit" 
                onClick={onContinue} 
                className="btn-primary"/>
            </div>
          </form>
        </div>

    );
}

export default ClinicId