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
import { Controller, FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';

import { ErrorMessage } from '@hookform/error-message';
import PersonalData from './PersonalData';

export const Form = () => {

	const {handleSubmit, control, formState:{errors}, reset, getValues} = useFormContext();

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
					
					<PersonalData  />

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
						<ErrorMessage errors={errors} name='gender'/>
					</Typography>

					<Box>
						<Button variant="contained" type="submit" sx={{marginTop: "10px"}}>
							Enviar
						</Button>
						<Button variant="outlined" onClick={() => reset({...getValues(), firstName: ""})} type="reset" sx={{ marginTop: "10px", marginLeft: "20px" }}>
							Reset
						</Button>
					</Box>
				</form>
			</Paper>
		</Box>
	);
};
