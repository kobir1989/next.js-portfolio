import Box from '@/components/Atoms/Box/Box';
import Button from '@/components/Atoms/Button/Button';
import StackContainer from '@/components/Atoms/Stack/StackContainer';

export default function Home() {
	return (
		<main>
			<StackContainer direction='row' gap='2rem'>
				<Button variant='contained'>TEsttt</Button>
				<Button variant='outlined'>TEsttt</Button>
			</StackContainer>
		</main>
	);
}
