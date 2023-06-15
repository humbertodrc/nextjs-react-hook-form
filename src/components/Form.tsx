import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

// Yup
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface Inputs {
	firstName: string;
	lastName: string;
	email: string;
	gender: string;
}

export const Form = () => {

  const schema = yup.object({
    firstName: yup.string().required().min(3, "Debe ser mayor a 3 caracteres").max(10),
    lastName: yup.string().required(),
    email: yup.string().email("Ingrese un correo valido").required().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Ingrese un correo valido"),
    gender: yup.string().required()
  })

  type FormData = yup.InferType<typeof schema>;

	const {
		register,
		handleSubmit,
		formState: {errors},
		control,
	} = useForm<FormData>({resolver: yupResolver(schema)});

	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	console.log(errors);

	const onsubmit: SubmitHandler<FormData> = (data: FormData) => {
		console.log(data);
	};

	return (
		<Box sx={{width: "800px"}}>
			<form onSubmit={handleSubmit(onsubmit)} style={{width: "100%"}}>
				<Controller
					name="firstName"
					control={control}
					defaultValue=""
					rules={{required: true, minLength: 3, maxLength: 10}}
					render={({field}) => (
						<TextField
							{...field}
							id="firstName"
							label="Nombre"
              variant="outlined"
              fullWidth
						/>
					)}
				/>
				<Typography variant="body2" color="error">
					{errors.firstName?.type === "required" && (
						<span>Este campo es requerido</span>
					)}
					{errors.firstName?.type === "minLength" && (
						<span>El nombre debe tener al menos 3 caracteres</span>
					)}
					{errors.firstName?.type === "maxLength" && (
						<span>El nombre debe tener menos de 10 caracteres</span>
					)}
          {errors.firstName?.message}
				</Typography>
				<Controller
					name="lastName"
					control={control}
					defaultValue=""
					rules={{required: true, minLength: 5}}
					render={({field}) => (
						<TextField
							{...field}
							id="firstName"
							label="Nombre"
              variant="outlined"
              fullWidth
						/>
					)}
				/>
				<Typography variant="body2" color="error">
					{errors.lastName?.type === "required" && (
						<span>Este campo es requerido</span>
					)}
					{errors.lastName?.type === "minLength" && (
						<span>El apellido debe tener al menos 5 caracteres</span>
					)}
				</Typography>
				<Controller
					name="email"
					control={control}
					defaultValue=""
					rules={{required: true, pattern: regex}}
					render={({field}) => (
            <TextField
              {...field}
              id="email"
              type='email'
              label="Email"
              variant="outlined"
              fullWidth
            />
					)}
				/>
				<Typography variant="body2" color="error">
					{errors.email?.type === "required" && (
						<span>Este campo es requerido</span>
					)}
					{errors.email?.type === "pattern" && (
						<span>El email debe tener un formato válido</span>
					)}
				</Typography>
				<FormControl sx={{m: 1, minWidth: 80}}>
					<InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
					<Controller
						name="gender"
						control={control}
						defaultValue=""
						render={({field}) => (
							<Select
								{...field}
								autoWidth
								defaultValue=""
                labelId="demo-simple-select-autowidth-label"
							>
								<MenuItem value="female">Femenino</MenuItem>
								<MenuItem value="male">Masculino</MenuItem>
								<MenuItem value="other">Otro</MenuItem>
							</Select>
						)}
					/>
				</FormControl>
				<button type="submit">Enviar</button>
			</form>
		</Box>
	);
};
