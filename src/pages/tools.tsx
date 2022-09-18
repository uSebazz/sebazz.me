import PageTransition from '@/components/transitions/PageTransitions';
import Hero from '@/components/utils/Hero';
import Section from '@/components/utils/Section';
import ToolCard from '@/components/utils/ToolCard';
import { tools } from '@/data';
import { HStack, Icon, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { GoogleChromeLogo, WindowsLogo } from 'phosphor-react';
const Tools = () => {
	return (
		<PageTransition>
			<VStack spacing={8}>
				<Hero title="Tools" subtitle="A list of my favorite tools." />
				<Section>
					<Tabs variant="soft-rounded" colorScheme="green" align="center" w="100%">
						<TabList display="flex" flexWrap="wrap">
							<Tab
								bg={useColorModeValue('neutralG.300', 'neutralG.800')}
								color={useColorModeValue('neutralG.900', 'neutralG.600')}
								_selected={{
									color: 'blue.900',
									bg: 'blue.100'
								}}
								mr={2}
								mt={2}
							>
								<HStack spacing={1}>
									<Icon as={WindowsLogo} weight="fill" />
									<Text>Windows</Text>
								</HStack>
							</Tab>
							<Tab
								bg={useColorModeValue('neutralG.300', 'neutralG.800')}
								color={useColorModeValue('neutralG.900', 'neutralG.600')}
								_selected={{
									color: 'red.800',
									bg: 'red.100'
								}}
								mr={2}
								mt={2}
							>
								<HStack spacing={1}>
									<Icon as={GoogleChromeLogo} weight="fill" />
									<Text>Chrome</Text>
								</HStack>
							</Tab>
						</TabList>
						<TabPanels>
							<TabPanel px={0}>
								<SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
									{tools.windows.map((tool, key) => (
										<ToolCard key={key} name={tool.name} description={tool.description} image={tool.image} link={tool.link} />
									))}
								</SimpleGrid>
							</TabPanel>
							<TabPanel px={0}>
								<SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
									{tools.chrome.map((tool, key) => (
										<ToolCard key={key} name={tool.name} description={tool.description} image={tool.image} link={tool.link} />
									))}
								</SimpleGrid>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Section>
			</VStack>
		</PageTransition>
	);
};

export default Tools;
