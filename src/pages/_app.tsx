import Footer from '@/components/footer/Footer';
import MobileNavbar from '@/components/navbar/MobileNavbar';
import customTheme from '@/theme';
import { Box, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Nav from 'src/components/navbar/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ChakraProvider theme={customTheme}>
				<Head>
					<title>Sebazz - Bot developer - Web developer</title>
					<meta name="title" content="Sebazz - Bot developer - Web developer" />
					<meta name="description" content="Im a guy who likes to create pages and bots for people." />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://sebazz.me/" />
					<meta property="og:title" content="Sebazz - Bot developer - Web developer" />
					<meta property="og:description" content="Im a guy who likes to create pages and bots for people." />
					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:url" content="https://sebazz.me/" />
					<meta property="twitter:title" content="Sebazz - Bot developer - Web developer" />
					<meta property="twitter:description" content="Im a guy who likes to create pages and bots for people." />
				</Head>
				<Nav />
				<Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
					<Component {...pageProps} />
				</Box>
				<MobileNavbar />
				<Footer />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
