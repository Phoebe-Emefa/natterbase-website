import * as Yup from "yup";

export const StartProjectSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  fullName: Yup.string().required("Full Name is Required!"),
  company: Yup.string().required("Company is Required!"),
  teamCount: Yup.string().required("Team Count is Required!"),
  projectName: Yup.string().required("Project Name is Required!"),
  projectDescription: Yup.string().required("Project Description is Required!"),
  phoneNumber: Yup.string()
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, {
      message: "Invalid Phone Number!",
    })
    .required("Phone Number is Required!"),
  teamMembers: Yup.array()
    .min(1, "Select at least one member")
    .required("Team members is required"),
  skills: Yup.array()
    .min(1, "Select at least one skill")
    .required("Skills is required"),
  hiringNeed: Yup.object().notRequired(),
  devices: Yup.object()
    .required("Select at least one device")
    .shape({
      desktop: Yup.boolean().required("Select at least one device"),
      mobile: Yup.boolean(),
      others: Yup.boolean(),
    })
    .required("Select at least one device"),
});

export const JobSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  fullName: Yup.string().required("Full Name is Required!"),
  linkedInUrl: Yup.string().required("LinkedIn Url is Required!"),
  message: Yup.string(),
  documents: Yup.mixed().required("Upload your resume!"),
});

export const HelpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  fullName: Yup.string().required("Full Name is Required!"),
  message: Yup.string().required("Message is Required!"),
});
