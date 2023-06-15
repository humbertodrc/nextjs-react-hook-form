import { Form } from '@/components/Form';
import { Inter } from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
		>
			<h1>React Hook Form</h1>
			<Form />
		</main>
	);
}
