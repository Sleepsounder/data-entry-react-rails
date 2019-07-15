import React from 'react'

export const ClinicId = (props) => {
    const onContinue = e => {
        e.preventDefault();
        props.nextStep();
    }

    const { values, handleChange } = props;

    return (
        
        <form>
          <h1>Rutgers Data Entry</h1>
          <h2>1. What is your Clinic ID Number?</h2>
          <input
            onChange={handleChange("clinicId")}
            defaultValue={values.clinicId}
          />
          <br/>
          <input 
             type="submit" 
             value="Submit" 
             onClick={onContinue} />
        </form>

    );
}

export default ClinicId