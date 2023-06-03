import { Roboto } from 'next/font/google';
import ThemeProvider from '@/theme/themeProvider';

export const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	subsets: ['latin'],
	variable: '--roboto-default',
});

export const metadata = {
	title: 'Kabir Hossain',
	description: 'Full-Stack Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={roboto.className} suppressHydrationWarning={true}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
