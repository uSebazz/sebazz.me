import { Center, Container, Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const PageNotFound = () => {
	return (
		<Container>
			<Center>
				<VStack>
					<Heading size="2xl" color={useColorModeValue('neutralG.600', 'neutralD.600')}>
						404 - Page not found 😢
					</Heading>
					<Link href="/">back to home</Link>
				</VStack>
			</Center>
		</Container>
	);
};

export default PageNotFound;
