import Link from '@/components/navbar/Link';
import Image from '@/components/utils/Image';
import { Box, HStack, Tag, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { usePalette } from 'react-palette';

const ProjectCard = ({ title, description, logo, link, type }: Props) => {
	const { data } = usePalette(logo);
	const colorTypes = {
		bot: 'red',
		website: 'green',
		other: 'yellow'
	};

	const getTypeColor = (type: string) => {
		return colorTypes[type as keyof typeof colorTypes];
	};

	return (
		// @ts-ignore
		<Link href={link} unstyled="true">
			<HStack
				p={4}
				bg={useColorModeValue('neutralG.300', 'neutralG.900')}
				rounded="lg"
				borderWidth="1px"
				borderColor={useColorModeValue('neutralG.400', 'neutralD.400')}
				w="100%"
				h="100%"
				textAlign="left"
				align="start"
				spacing={4}
				transition="all 0.25s"
				transition-timing-function="spring(1 100 10 10)"
				_hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
			>
				<Box rounded="lg" p={2} position="relative" overflow="hidden" lineHeight={0} boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.04)">
					<Box bg={data.lightVibrant} position="absolute" top={0} bottom={0} left={0} right={0} opacity={0.25}></Box>
					<Image src={logo ? logo : '/'} alt="Image" height={36} width={36} layout="fixed" rounded="md" />
				</Box>

				<VStack align="start" justify="flex-start" spacing={1}>
					<VStack spacing={0} align="start">
						<HStack>
							<Text fontWeight="bold" fontSize="md" noOfLines={2}>
								{title}
							</Text>
							<Tag size="sm" colorScheme={getTypeColor(type)}>
								{type}
							</Tag>
						</HStack>
						<Text fontSize="sm" color={useColorModeValue('neutralG.900', 'neutralG.500')}>
							{description}
						</Text>
					</VStack>
				</VStack>
			</HStack>
		</Link>
	);
};

type Props = {
	title: string;
	description: string;
	logo: string;
	link: string;
	type: string;
};

export default ProjectCard;
