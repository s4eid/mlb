import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const initialValues = {
  email: "",
  full_name: "",
  message: "",
  phone_number: "",
};
export const contactSchema = Yup.object().shape({
  email: Yup.string()
    .max(255, "Too Long!")
    .email("Invalid Email")
    .required("Required"),
  full_name: Yup.string().max(255, "Too Long!").required("Required"),
  message: Yup.string().required("Required"),
  phone_number: Yup.string()
    .required("Required")
    .matches(phoneRegExp, "Phone number is not valid"),
});
