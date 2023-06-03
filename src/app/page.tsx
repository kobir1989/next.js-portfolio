import Box from '@/components/Atoms/Box/Box';
import Button from '@/components/Atoms/Button/Button';
import StackContainer from '@/components/Atoms/Stack/StackContainer';
import Typography from '@/components/Atoms/Typography/Typography';

export default function Home() {
	return (
		<main>
			<StackContainer direction='row' gap='2rem'>
				<Button variant='contained'>TEsttt</Button>
				<Button variant='outlined'>TEsttt</Button>
			</StackContainer>
			<Typography variant='title' color='#cc2121'>
				fdfdf
			</Typography>
		</main>
	);
}
