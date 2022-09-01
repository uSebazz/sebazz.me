import PageTransition from '@/components/transitions/PageTransitions';
import Section from '@/components/utils/Section';
import { Heading, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';

const About = () => {
	return (
		<PageTransition>
			<VStack spacing={8}>
				<Section>
					<VStack align="start">
						<Heading as="h1" size="2xl" color={useColorModeValue('neutralG.600', 'neutralD.600')}>
							{' '}
							About
						</Heading>
						<Text>
							Currently studying, when I get out of school I like to clear my mind for a while before starting some of my projects. In
							the evenings I like to listen to songs to fall asleep and think of ideas for other new and innovative projects.
						</Text>
					</VStack>
				</Section>
				<Section>
					<VStack align="stretch" spacing={4}>
						<Heading as="h1" size="lg" color={useColorModeValue('neutralG.600', 'neutralD.600')}>
							Skills
						</Heading>
						<Image
							alt="skills"
							src="https://skillicons.dev/icons?i=js,ts,lua,html,css,vue,react,nextjs,express,tailwind,windicss,git,linux,mongodb,prisma"
						/>
					</VStack>
				</Section>
			</VStack>
		</PageTransition>
	);
};

export default About;
