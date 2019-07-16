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

  const { values: { 
    clinicId,  
    ethnicity, 
     }} = props; 

  const findSTIServices = props.values.stiServices;
  const keys = Object.keys(findSTIServices);
  const checkedService = keys.filter(function(key) {
        return findSTIServices[key]
    });

  return (
    <>
        <h1>Rutgers Data Entry</h1>
        <h2>Confirm data and submit</h2>
        <ul>
                    <li>
                        Clinic ID: { clinicId }
                    </li>
                    <li>
                        Ethnicity: { ethnicity }
                    </li>
                    <li>
                        Service Types: { checkedService.join(", ") }
                    </li>
                    
                </ul>
                <br/>
        <input 
             type="submit" 
             value="Confirm" 
             onClick={onContinue} />
        <input 
             type="button" 
             value="Back" 
             onClick={onBack} />
    </>
  )
}

export default STIServices