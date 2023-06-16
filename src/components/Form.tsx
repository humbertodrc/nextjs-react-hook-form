import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import { SubmitHandler, useForm, Controller } from "react-hook-form";

// Yup
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// interface Inputs {
// 	firstName: string;
// 	lastName: string;
// 	email: string;
// 	gender: string;
// }

export const Form = () => {

  const schema = yup.object({
    firstName: yup.string().required().min(3, "Debe ser mayor a 3 caracteres").max(10, "Debe ser menor a 10 caracteres"),
    lastName: yup.string().required().min(5, "Debe ser mayor a 5 caracteres"),
    email: yup.string().required().email().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ser un email valido"),
    gender: yup.string().required("Debe seleccionar un genero")
  })

  type FormData = yup.InferType<typeof schema>;

	const {
		register,
		handleSubmit,
		formState: {errors},
		control,
	} = useForm<FormData>({ resolver: yupResolver(schema)});

	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	console.log(errors);

	const onsubmit: SubmitHandler<FormData> = (data: FormData) => {
		console.log(data);
	};

	return (
		<Box sx={{maxWidth: 500}}>
			<Paper
				elevation={1}
				sx={{p: "32px", display: "flex", flexDirection: "column", gap: 3}}
			>
				<form onSubmit={handleSubmit(onsubmit)}>
					<Controller
						name="firstName"
						control={control}
						// rules={{required: true, minLength: 3, maxLength: 10}}
						defaultValue=""
						render={({field}) => (
							<TextField
								{...field}
								label="Nombre"
								variant="outlined"
								fullWidth
								sx={{mb: 2}}
							/>
						)}
					/>
					<Typography variant="caption" color="error">
						{/* {errors.firstName?.type === "required" && (
							<span>Este campo es requerido</span>
						)}
						{errors.firstName?.type === "minLength" && (
							<span>El nombre debe tener al menos 3 caracteres</span>
						)}
						{errors.firstName?.type === "maxLength" && (
							<span>El nombre debe tener menos de 10 caracteres</span>
						)} */}
            {errors.firstName?.message}
					</Typography>

					<Controller
						name="lastName"
						control={control}
						// rules={{required: true, minLength: 5}}
						defaultValue=""
						render={({field}) => (
							<TextField
								{...field}
								label="Apellido"
								variant="outlined"
								fullWidth
								sx={{mb: 2}}
							/>
						)}
					/>

					{/* <Typography variant="caption" color="error">
						{errors.lastName?.type === "required" && (
							<span>Este campo es requerido</span>
						)}

						{errors.lastName?.type === "minLength" && (
							<span>El apellido debe tener al menos 5 caracteres</span>
						)}
					</Typography> */}

					<Controller
						name="email"
						control={control}
						rules={{required: true, pattern: regex}}
						defaultValue=""
						render={({field}) => (
							<TextField
                {...field}
                type="email"
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
							/>
						)}
					/>

					<Typography variant="caption" color="error">
						{/* {errors.email?.type === "required" && (
							<span>Este campo es requerido</span>
						)} */}
            {errors.email?.message}
					</Typography>

					<FormControl fullWidth sx={{mb: 2}}>
						<InputLabel id="demo-simple-select-helper-label">Genero</InputLabel>
						<Controller
							name="gender"
							control={control}
							rules={{required: true}}
							defaultValue=""
							render={({field}) => (
                <Select
                  {...field}
									labelId="demo-simple-select-helper-label"
									id="demo-simple-select-helper"
									label="Age"
									defaultValue=""
								>
									<MenuItem value="female">Femenino</MenuItem>
									<MenuItem value="male">Masculino</MenuItem>
									<MenuItem value="other">Otro</MenuItem>
								</Select>
							)}
						/>
          </FormControl>
          
          <Typography variant="caption" color="error">
						{/* {errors.gender?.type === "required" && (
							<span>Este campo es requerido</span>
						)} */}
            {errors.gender?.message}
					</Typography>

					<button type="submit" style={{marginTop: "50px"}}>
						Enviar
					</button>
				</form>
			</Paper>
		</Box>
	);
};
