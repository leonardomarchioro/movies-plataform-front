import * as yup from "yup";

export const CreateUserSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório")
    .matches(/[a-zA-Z\u00C0-\u00FF ]+/i, "Deve conter apenas letras"),
  email: yup.string().required("Campo obrigatório").email("Email inválido"),
  password: yup.string().required("Campo obrigatório"),
});

export const SignInUserSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });