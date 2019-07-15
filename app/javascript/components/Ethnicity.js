import React from 'react'

export const Ethnicity = (props) => {
  const onContinue = e => {
    e.preventDefault();
    props.nextStep();
  }

  const onBack = e => {
    e.preventDefault();
    props.prevStep();
  }

  const { values, handleChange } = props;

  return (
    <form>
        <h1>Rutgers Data Entry</h1>
        <h2>2. What is the patient's ethnicity?</h2>
        <label>
            <input 
                    type="radio"
                    value="Hipanic/Latino"
                    checked={ values.ethnicity === "Hipanic/Latino" }
                    onChange={handleChange("ethnicity")}
                />Hipanic/Latino
            <input 
                    type="radio"
                    value="non-Hipanic/non-Latino"
                    checked={ values.ethnicity === "non-Hipanic/non-Latino" }
                    onChange={handleChange("ethnicity")}
                />non-Hipanic/non-Latino
            <input 
                    type="radio"
                    value="unknown"
                    checked={ values.ethnicity === "unknown" }
                    onChange={handleChange("ethnicity")}
                />unknown
        </label>
        <input 
             type="submit" 
             value="Submit" 
             onClick={onContinue} />
        <input 
             type="button" 
             value="Back" 
             onClick={onBack} />
    </form>
  )


}

export default Ethnicity