import Link from '@/components/navbar/Link';
import { Box, HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { usePalette } from 'react-palette';
const ToolCard = ({ name, image, link, description }: Props) => {
	const { data } = usePalette(image);

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
				textAlign="left"
				align="start"
				spacing={4}
				transition="all 0.25s"
				transition-timing-function="spring(1 100 10 10)"
				_hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
				// cursor="pointer"
			>
				<Box rounded="lg" p={2} position="relative" overflow="hidden" lineHeight={0} boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)">
					<Box bg={data.lightVibrant} position="absolute" top={0} left={0} bottom={0} right={0} opacity={0.25}></Box>
					<Image alt="image" src={image} boxSize="36px" rounded="md" />
				</Box>

				<VStack align="start" justify="flex-start" spacing={1} maxW="lg" h="100%">
					<VStack spacing={0} align="start" flexGrow={1}>
						<Text fontWeight="bold" fontSize="md" noOfLines={2}>
							{name}
						</Text>
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
	name: string;
	image: string;
	link: string;
	description: string;
};
export default ToolCard;
