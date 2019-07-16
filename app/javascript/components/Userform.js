import React, {Component} from 'react';
import ClinicId from './ClinicId';
import Ethnicity from './Ethnicity';
import STIServices from './STIServices';
import Confirm from './Confirm'
import Success from './Success'

export class Userform extends Component {
    state = {
        step: 1,
        clinicId: '',
        ethnicity: '',
        stiServices: {
            harmReduction: false,
            condomDistribution: false,
            partnerNotification: false
        }
    }

    nextStep = () => this.setState((prevState) => ({ step: prevState.step + 1}))

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step -1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    // Handle checkbox change?
    checkChange = (type, checked) => {
      this.setState({
        ...this.state,
        stiServices: {
          ...this.state.stiServices, 
          [type]: checked
        }
      });
      // console.log('>>>', this.state)
    }


    render() {
        const { step } = this.state;
        const { clinicId, ethnicity, stiServices } = this.state;
        const values = { clinicId, ethnicity, stiServices }
        let appPage;
        switch(step) {
            case 1:
                appPage = (
                    <ClinicId
                       nextStep={this.nextStep}
                       handleChange={this.handleChange}
                       values={values}
                    />
                )
                break;
            case 2:
                appPage = (
                    <Ethnicity
                       nextStep={this.nextStep}
                       prevStep={this.prevStep}
                       handleChange={this.handleChange}
                       values={values}
                    />
                )
                break;
            case 3:
                appPage = (
                    <STIServices
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      setCheckbox={this.checkChange}
                      values={values}
                    />
                )
                break;
                case 4:
                appPage = (
                    <Confirm
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      values={values}
                    />
                )
                break;
                case 5:
                    appPage = (
                        <Success
                          nextStep={this.nextStep}
                          prevStep={this.prevStep}
                          values={values}
                        />
                    )
                    break;
        }
        return appPage;
    }

}

export default Userform;

//     render() {
//         const { step } = this.state;
//         const { clinicId, patientId, patientAge, visitType, ethnicity, race, intercourseTypes } = this.state;
//         const values = { clinicId, patientId, patientAge, visitType, ethnicity, race, intercourseTypes }
//         let appPage;
//         switch(step) {
//             case 1:
//                 appPage = (
//                     <ClinicId
//                       nextStep={this.nextStep}
//                       handleChange={this.handleChange}
//                       values={values}
//                     />
//                 )
//                 break;
//             case 2:
//                 appPage = (
//                   <PatientId
//                      nextStep={this.nextStep}
//                      prevStep={this.prevStep}
//                      handleChange={this.handleChange}
//                      values={values}
//                   />
//                 )
//                 break;
//             case 3: 
//                 appPage = (
//                     <PatientAge
//                        nextStep={this.nextStep}
//                        prevStep={this.prevStep}
//                        handleChange={this.handleChange}
//                        values={values}
//                     />
//                   )
//                   break;
//             case 4: 
//                   appPage = (
//                       <VisitType
//                          nextStep={this.nextStep}
//                          prevStep={this.prevStep}
//                          handleChange={this.handleChange}
//                          values={values}
//                       />
//                     )
//                     break;
//             case 5: 
//                     appPage = (
//                         <Ethnicity
//                            nextStep={this.nextStep}
//                            prevStep={this.prevStep}
//                            handleChange={this.handleChange}
//                            values={values}
//                         />
//                       )
//                       break;
//             case 6: 
//                     appPage = (
//                         <Race
//                            nextStep={this.nextStep}
//                            prevStep={this.prevStep}
//                            handleChange={this.handleChange}
//                            values={values}
//                         />
//                       )
//                       break;
//             case 7: 
//                       appPage = (
//                           <IntercourseTypes
//                              nextStep={this.nextStep}
//                              prevStep={this.prevStep}
//                              setCheckbox={this.checkChange}
//                              values={values}
//                           />
//                         )
//                         break;
//             case 8: 
//             appPage = (
//                 <Confirm
//                    nextStep={this.nextStep}
//                    prevStep={this.prevStep}
//                    values={values}
//                 />
//               )
//               break;
//             case 9:
//                 appPage = <Success />
//                 break;
//                 // no default
//         }
        
        
//         return appPage;
//     }
// }

// export default UserForm;

