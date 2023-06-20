import {
	Box,
	Button,
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
            {errors.firstName?.message}
					</Typography>

					<Controller
						name="lastName"
						control={control}
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
									label="genero"
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
            {errors.gender?.message}
					</Typography>

					<Button variant='contained' type="submit" sx={{marginTop: "10px"}}>
						Enviar
					</Button>
				</form>
			</Paper>
		</Box>
	);
};
