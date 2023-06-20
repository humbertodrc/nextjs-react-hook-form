// Yup
import * as yup from "yup";

export const schema = yup.object({
  firstName: yup
    .string()
    .required("")
    .min(3, "Debe ser mayor a 3 caracteres")
    .max(10, "Debe ser menor a 10 caracteres"),
  lastName: yup.string().required().min(5, "Debe ser mayor a 5 caracteres"),
  email: yup
    .string()
    .required()
    .email()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ser un email valido"),
  gender: yup.string().required("Debe seleccionar un genero"),
});

export type FormData = yup.InferType<typeof schema>;