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
import { Controller, SubmitHandler, useFormContext, FieldValues, useWatch } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

// Yup
import { FormPersonalData } from './FormPersonalData';
import { useEffect } from 'react';


export const Form = () => {
	

	const { handleSubmit, formState: { errors }, control, reset, getValues, setFocus } = useFormContext();
	
	console.log(useWatch({ name: 'firstName' }));
	
	useEffect(() => {
		setFocus('firstName')
	}, [setFocus])
	
	


	const onsubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
	};

	return (
		<Box sx={{maxWidth: 500}}>
			<Paper
				elevation={1}
				sx={{p: "32px", display: "flex", flexDirection: "column", gap: 3}}
			>
				<form onSubmit={handleSubmit(onsubmit)}>

					{/* Personal Data */}

					<FormPersonalData />
					
					{/* Email */}
					<Controller
						name="email"
						control={control}
						defaultValue=""
						render={({field}) => (
							<TextField
								{...field}
								type="email"
								label="Email"
								variant="outlined"
								name='email'
								fullWidth
								sx={{mb: 2}}
							/>
						)}
					/>

					<Typography variant="caption" color="error">
						{/* {errors.email?.message} */}
						<ErrorMessage errors={errors} name="email" />
					</Typography>

					{/* Genero */}
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
									name='gender'
								>
									<MenuItem value="female">Femenino</MenuItem>
									<MenuItem value="male">Masculino</MenuItem>
									<MenuItem value="other">Otro</MenuItem>
								</Select>
							)}
						/>
					</FormControl>

					<Typography variant="caption" color="error">
						{/* {errors.gender?.message} */}
						<ErrorMessage errors={errors} name='gender' />
					</Typography>

					<Box>
						<Button variant="contained" type="submit" sx={{marginTop: "10px"}}>
							Enviar
						</Button>
						<Button variant="outlined" onClick={() => reset({...getValues(), firstName: ""})} sx={{ marginTop: "10px", marginLeft: "20px" }}>
							Reset
						</Button>
					</Box>
				</form>
			</Paper>
		</Box>
	);
};
