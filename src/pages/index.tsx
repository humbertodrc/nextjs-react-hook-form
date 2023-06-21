import { Form } from "@/components/Form";
import { schema } from '@/components/rules';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";


export default function Home() {

	type FormData = yup.InferType<typeof schema>;

	const methods = useForm<FormData>({resolver: yupResolver(schema)});

	return (
		<main>
			<Container maxWidth={'md'}>
				<h1>React Hook Form</h1>
				<FormProvider {... methods}>
					<Form />
				</FormProvider>
			</Container>
		</main>
	);
}
