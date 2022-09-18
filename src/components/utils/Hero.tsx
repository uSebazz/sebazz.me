import { Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import Section from './Section';

type Props = {
	title: string;
	subtitle?: string;
};

const Hero = ({ title, subtitle }: Props) => {
	return (
		<Section>
			<VStack>
				<Heading as="h1">{title}</Heading>
				{subtitle ? (
					// eslint-disable-next-line react-hooks/rules-of-hooks
					<Text fontSize={['lg', 'xl']} color={useColorModeValue('neutral.1000', 'neutralD.1000')} maxW="lg" textAlign="center">
						{subtitle}
					</Text>
				) : undefined}
			</VStack>
		</Section>
	);
};

export default Hero;
