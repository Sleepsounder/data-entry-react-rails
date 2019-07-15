import React from 'react'

export const ClinicId = (props) => {
    // const onContinue = e => {
    //     e.preventDefault();
    //     props.nextStep();
    // }

    // const { values, handleChange } = props;

    return (
        <form>
          <h1>1. What is your Clinic ID Number?</h1>
          <input/>
        </form>
    )


}

export default ClinicId



// export const ClinicId = (props) => {
//     const onContinue = e => {
//         e.preventDefault();
//         props.nextStep();
//     }

//     const { values, handleChange } = props;
//     const classes = useTheme()
//     return (
//         <>
//             <AppBar>Rutgers Data Entry</AppBar>
//             <h1>1. What is your Clinic ID Number?</h1>
//             <TextField 
//                 // hintText="Enter Your Clinic's ID"
//                 // floatingLabelText="Clinic ID"
//                 onChange={handleChange("clinicId")}
//                 defaultValue={values.clinicId}
//             />
//             <br/>
//             <Button
//                 primary={'true'}
//                 style={StyleSheet.button}
//                 onClick={onContinue}
//                 className={classes.root}
//             >
//                 Continue
//             </Button>
//         </>
        
//     )
// }

// export default ClinicId