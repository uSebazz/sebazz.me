import SocialIcons from '@/components/footer/SocialIcons';
import Song from '@/components/footer/Song';
import { Box, SimpleGrid, Stack, Text, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<Box color={useColorModeValue('neutralG.700', 'neutralG.300')}>
			<SimpleGrid
				columns={{ base: 1, md: 3 }}
				gridTemplate={{ base: '1fr', md: '1fr 1fr 1fr' }}
				mx="auto"
				maxW="7xl"
				py={4}
				px={5}
				spacing={4}
				alignItems="center"
			>
				<Song />
				<Text display="flex" alignSelf="center" mx="auto" fontWeight="semibold" color={useColorModeValue('neutralG.900', 'neutralG.300')}>
					Built with&nbsp;
					<Tooltip label="Love">
						<span style={{ color: 'red' }}>♥</span>
					</Tooltip>
					&nbsp; by Sebazz
				</Text>
				<Stack direction="row" spacing={6} ml="auto" mr={{ base: 'auto', md: 5 }}>
					<SocialIcons label="Github" href="https://github.com/uSebazz">
						<FaGithub size={16} />
					</SocialIcons>
					<SocialIcons label="Twitter" href="https://twitter.com/uSebazz">
						<FaTwitter size={16} />
					</SocialIcons>
					<SocialIcons label="Instagram" href="https://instagram.com/_.sebaxzz">
						<FaInstagram size={16} />
					</SocialIcons>
				</Stack>
			</SimpleGrid>
		</Box>
	);
};

export default Footer;
