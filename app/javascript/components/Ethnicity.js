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
    <div>
      <div className='header'>
          <h1>Rutgers Data Entry</h1>
      </div>
      <form className='answer'>
          <h2 className='question'>2. What is the patient's ethnicity?</h2>
          <label className='container'>Hipanic/Latino
            <input 
              type="radio"
              value="Hipanic/Latino"
              checked={ values.ethnicity === "Hipanic/Latino" }
              onChange={handleChange("ethnicity")}
            />
            <span class='checkmark'></span>
          </label>
          <label className='container'>non-Hipanic/non-Latino
            <input 
              type="radio"
              value="non-Hipanic/non-Latino"
              checked={ values.ethnicity === "non-Hipanic/non-Latino" }
              onChange={handleChange("ethnicity")}
            />
            <span class='checkmark'></span>
          </label>
          <label className='container'>other
            <input 
              type="radio"
              value="other"
              checked={ values.ethnicity === "other" }
              onChange={handleChange("ethnicity")}
            />
            <span class='checkmark'></span>
          </label>
          {/* <label className='radios'>
              <input 
                      type="radio"
                      value="Hipanic/Latino"
                      checked={ values.ethnicity === "Hipanic/Latino" }
                      onChange={handleChange("ethnicity")}
                      className='radio'
                  />Hipanic/Latino
              <br/>
              <input 
                      type="radio"
                      value="non-Hipanic/non-Latino"
                      checked={ values.ethnicity === "non-Hipanic/non-Latino" }
                      onChange={handleChange("ethnicity")}
                      className='radio'
                  />non-Hipanic/non-Latino
              <br/>
              <input 
                      type="radio"
                      value="unknown"
                      checked={ values.ethnicity === "unknown" }
                      onChange={handleChange("ethnicity")}
                      className='radio'
                  />unknown
          </label> */}
          <input 
              type="submit" 
              value="Submit" 
              onClick={onContinue}
              className="btn-primary" />
          <input 
              type="button" 
              value="Back" 
              onClick={onBack}
              className='btn' />
      </form>
    </div>
  )


}

export default Ethnicity