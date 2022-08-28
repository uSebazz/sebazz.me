import { HamburgerIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Container,
	HStack,
	Icon,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useColorModeValue,
	useDisclosure,
	UseDisclosureProps,
	VStack
} from '@chakra-ui/react';
import { FireIcon } from '@heroicons/react/solid';
import { default as Link, default as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import AvatarNavigation from './AvatarNavigation';
import ThemeToggle from './themeToggle';

const NavLink = (props: NavbarProps) => {
	const { href, name } = props;
	const { pathname } = useRouter();
	var isActive = false;

	if (href !== '/') {
		const [, group] = href.split('/');
		isActive = pathname.includes(group);
	} else if (href === pathname) {
		isActive = true;
	}

	return (
		<NextLink href={href} passHref>
			<Button
				aria-current={isActive ? 'page' : undefined}
				variant="ghost"
				size="md"
				fontSize="bold"
				_activeLink={{
					color: useColorModeValue('neutralG.800', 'neutralG.800'),
					bg: useColorModeValue('neutralG.300', 'neutralD.500')
				}}
				_hover={{
					bg: useColorModeValue('neutralG.500', 'neutralD.700')
				}}
				px={4}
			>
				{name}
			</Button>
		</NextLink>
	);
};

const Nav = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box
			bg={useColorModeValue('white', 'neutralG.800')}
			backdropFilter="auto"
			display={{ base: 'none', md: 'block' }}
			position="fixed"
			w="100%"
			zIndex={99}
			shadow="0 0 10px 0 rgba(0,0,0, 0.035);"
		>
			<Container>
				<VStack align="start" spacing={0}>
					<HStack justifyContent="space-between" w="100%" h={16}>
						<AvatarNavigation />
						<HStack ml={-4} spacing={2}>
							<NavLink href="/about" name="About" />
							<NavLink href="/projects" name="Projects" />
							<NavLink href="/contact" name="Contact" />
						</HStack>
						<HStack>
							<MenuForMoreOptions isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
							<ThemeToggle />
						</HStack>
					</HStack>
				</VStack>
			</Container>
		</Box>
	);
};

const MenuForMoreOptions = ({ isOpen, onOpen, onClose }: UseDisclosureProps) => {
	return (
		<Menu isOpen={isOpen}>
			<MenuButton
				bg={useColorModeValue('neutralG.300', 'neutralG.800')}
				_hover={{
					bg: useColorModeValue('neutralG.500', 'neutralD.700')
				}}
				onMouseEnter={onOpen}
				onMouseLeave={onClose}
				rounded="full"
			>
				<IconButton aria-label="Addtional Menu" variant="ghost" icon={<Icon as={HamburgerIcon} />} />
			</MenuButton>
			<MenuList
				bg={useColorModeValue('white', 'neutralG.900')}
				borderColor={useColorModeValue('neutralG.300', 'neutralD.500')}
				onMouseEnter={onOpen}
				onMouseLeave={onClose}
			>
				<Link href="/tools">
					<MenuItem
						_hover={{
							bg: useColorModeValue('neutralG.500', 'neutralD.700')
						}}
					>
						<HStack>
							<Icon as={FireIcon} color={useColorModeValue('neutralG.800', 'neutralD.600')} />
							<Text>Tools</Text>
						</HStack>
					</MenuItem>
				</Link>
			</MenuList>
		</Menu>
	);
};

type NavbarProps = {
	href: string;
	name: string;
};
export default Nav;
