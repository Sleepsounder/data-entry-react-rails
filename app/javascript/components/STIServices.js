import React from 'react'

export const STIServices = (props) => {
  const onContinue = e => {
    e.preventDefault();
    props.nextStep();
  }

  const onBack = e => {
    e.preventDefault();
    props.prevStep();
  }

  const checkChange = type => event => {
    props.setCheckbox(type, event.target.checked);
  }


  return (
    <div>
       <div className='header'>
          <h1>Rutgers Data Entry</h1>
      </div>
      <form className='answer'>
          <h2 className='question'>3. For each patient with a positive STI result, which of the following services were provided in clinic:</h2>
          <label className='radios'>
              <input 
                      type="checkbox"
                      value="harmReduction"
                      checked={ props.values.stiServices.harmReduction }
                      onChange={checkChange("harmReduction")}
                      className='radio'
                  />Harm reduction, safer sex counseling
              <br/>
              <input 
                      type="checkbox"
                      value="condomDistribution"
                      checked={ props.values.stiServices.condomDistribution }
                      onChange={checkChange("condomDistribution")}
                      className='radio'
                  />Condom distribution
              <br/>
              <input 
                      type="checkbox"
                      value="partnerNotification"
                      checked={ props.values.stiServices.partnerNotification }
                      onChange={checkChange("partnerNotification")}
                      className='radio'
                  />Partner(s) notification and treatment in clinic
              <br/>
          </label>
          <input 
              type="submit" 
              value="Submit" 
              onClick={onContinue}
              className="btn-primary" />
          <input 
              type="button" 
              value="Back" 
              onClick={onBack}
              className="btn" />
      </form>
    </div>
  )

  

}

export default STIServices