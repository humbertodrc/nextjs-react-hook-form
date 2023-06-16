import {Form} from "@/components/Form";
import {Container} from "@mui/material";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
	return (
		<main>
			<Container maxWidth={'md'}>
				<h1>React Hook Form</h1>
				<Form />
			</Container>
		</main>
	);
}
