export default function validation(values) {
    let errors = {};
  
    if (!values.id.trim()) {
      errors.id = "ID required";
    }
  
    if (!values.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password1) {
      errors.password1= "Password is required";
    } else if (values.password.length < 6) {
      errors.password1 = "Password needs to be 6 characters or more";
    }
  
    if (!values.password2) {
      errors.password2 = "Password is required";
    } else if (values.password2 !== values.password) {
      errors.password2 = "Passwords do not match";
    }
    return errors;
  }