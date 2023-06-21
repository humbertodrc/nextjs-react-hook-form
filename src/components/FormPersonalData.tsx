import { ErrorMessage } from '@hookform/error-message';
import { TextField, Typography } from '@mui/material';
import React from "react";
import { Controller, useFormContext } from 'react-hook-form';

export const FormPersonalData = () => {

  const {control, formState: {errors}} = useFormContext();

	return (
		<>
			{/* Nombre */}
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
            name='firstName'
						sx={{mb: 2}}
					/>
          // <input
          //   {...field}
          //   type="text"
          //   name="firstName"
          //   id="firstName"
          //   placeholder="Nombre"
          //   className="form-control"
          // />
				)}
			/>
			<Typography variant="caption" color="error">
        {/* {errors.firstName?.message} */}
        <ErrorMessage errors={errors} name="firstName" />
			</Typography>

			{/* Apellido */}
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
            name='lastName'
						sx={{mb: 2}}
					/>
				)}
			/>
			<Typography variant="caption" color="error">
				<ErrorMessage errors={errors} name="lastName" />
			</Typography>
		</>
	);
};
