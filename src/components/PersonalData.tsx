import { ErrorMessage } from '@hookform/error-message';
import { TextField, Typography } from "@mui/material";
import { Controller, useFormContext } from 'react-hook-form';

export default function PersonalData() {

  const { control, formState: { errors } } = useFormContext();
  
	return (
		<>
			<Controller
				name="firstName"
				control={control}
				defaultValue=""
				render={({field}) => (
					<TextField
						{...field}
						label="Nombre"
            variant="outlined"
            name='firstName'
						fullWidth
						sx={{mb: 2}}
					/>
				)}
			/>
			<Typography variant="caption" color="error">
        {/* {errors.firstName?.message} */}
        <ErrorMessage errors={errors} name="firstName" />
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
            name='lastName'
						fullWidth
						sx={{mb: 2}}
					/>
				)}
      />
      <Typography variant="caption" color="error">
        {/* {errors.lastName?.message} */}
        <ErrorMessage errors={errors} name="lastName" />
      </Typography>
		</>
	);
}
