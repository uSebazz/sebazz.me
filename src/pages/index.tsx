import PageTransition from '@/components/transitions/PageTransitions';
import ProjectCard from '@/components/utils/ProjectCard';
import Section from '@/components/utils/Section';
import { projects } from '@/data';
import { Box, Heading, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Box>
			<PageTransition>
				<VStack spacing={12}>
					<Section>
						<VStack spacing={4} align="start" fontSize="2xl">
							<Heading size="xl" fontWeight="bold">
								Hey there, I&apos;m{' '}
								<Text as="span" color={useColorModeValue('neutralG.600', 'neutralD.600')}>
									Sebazz
								</Text>
								. 🦕
							</Heading>
							<VStack>
								<Text>
									Hello, my name is{' '}
									<Text as="span" color={useColorModeValue('neutralG.600', 'neutralD.600')}>
										Sebastian
									</Text>
									, but many know me as{' '}
									<Text as="span" color={useColorModeValue('neutralG.600', 'neutralD.600')}>
										Sebazz
									</Text>{' '}
									Currently, I am 17 years old and I like to make websites and bots for people{' '}
									<Text as="span" color="red">
										❤️
									</Text>
									.
								</Text>
							</VStack>
						</VStack>
					</Section>
				</VStack>
				<br />
				<Section>
					<VStack align="start" spacing={8}>
						<Heading size="lg">Projects</Heading>
						<SimpleGrid columns={1} spacing={4} mt={8} w="100%">
							{projects.map((project) => {
								return (
									<ProjectCard
										key={project.id}
										title={project.title}
										description={project.desc}
										logo={project.img}
										link={project.link}
										type={project.type}
									/>
								);
							})}
						</SimpleGrid>
					</VStack>
				</Section>
			</PageTransition>
		</Box>
	);
};

export default Home;
