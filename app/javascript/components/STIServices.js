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
    <form>
        <h1>Rutgers Data Entry</h1>
        <h2>3. For each patient with a positive STI result, which of the following services were provided in clinic:</h2>
        <label>
            <input 
                    type="checkbox"
                    value="harmReduction"
                    checked={ props.values.stiServices.harmReduction }
                    onChange={checkChange("harmReduction")}
                />Harm reduction, safer sex counseling
            <input 
                    type="checkbox"
                    value="condomDistribution"
                    checked={ props.values.stiServices.condomDistribution }
                    onChange={checkChange("condomDistribution")}
                />Condom distribution
            <input 
                    type="checkbox"
                    value="partnerNotification"
                    checked={ props.values.stiServices.partnerNotification }
                    onChange={checkChange("partnerNotification")}
                />Partner(s) notification and treatment in clinic
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

export default STIServices