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
          <label className='container'>Harm reduction, safer sex counceling
            <input 
              type="checkbox"
              value="harmReduction"
              checked={ props.values.stiServices.harmReduction }
              onChange={checkChange("harmReduction")}
            />
            <span class='checkmark'></span>
          </label>
          <br/>
          <label className='container'>Condom distribution
            <input 
              type="checkbox"
              value="condomDistribution"
              checked={ props.values.stiServices.condomDistribution }
              onChange={checkChange("condomDistribution")}
            />
            <span class='checkmark'></span>
          </label>
          <br/>
          <label className='container'>Notification and treatment in clinic
            <input 
              type="checkbox"
              value="partnerNotification"
              checked={ props.values.stiServices.partnerNotification }
              onChange={checkChange("partnerNotification")}
            />
            <span class='checkmark'></span>
          </label>
          <br/>
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