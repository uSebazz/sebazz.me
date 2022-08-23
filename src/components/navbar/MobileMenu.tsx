import {
	Box,
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	HStack,
	Icon,
	IconButton,
	SimpleGrid,
	Text,
	Tooltip,
	useColorModeValue,
	useDisclosure,
	VStack
} from '@chakra-ui/react';
import { MenuIcon } from '@heroicons/react/solid';
import { GithubLogo, TwitterLogo } from 'phosphor-react';
import React, { RefObject } from 'react';
import Link from './Link';
import MobileItem from './MobileItem';
import ThemeToggle from './themeToggle';

const MobileMenu = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const bottomRef = React.useRef() as RefObject<FocusableElement>;

	return (
		<Box>
			<Tooltip label="Menu">
				<VStack as="button" spacing={0} rounded="md" px={6} color={useColorModeValue('neutralG.800', 'neutralD.600')} onClick={onOpen}>
					<Icon>
						<MenuIcon />
					</Icon>
					<Text fontSize="xs" fontWeight="500" color={useColorModeValue('neutralG.900', 'neutralG.500')}>
						Menu
					</Text>
				</VStack>
			</Tooltip>
			<Drawer isOpen={isOpen} placement="bottom" onClose={onClose} finalFocusRef={bottomRef}>
				<DrawerOverlay>
					<DrawerContent borderTopRadius="6px" bg={useColorModeValue('white', 'neutralG.900')}>
						<DrawerCloseButton />
						<DrawerHeader>Menu</DrawerHeader>
						<DrawerBody pb={3}>
							<VStack spacing={3}>
								<VStack w="100%">
									<MobileItem href="/" title="Home" />
									<SimpleGrid columns={2} spacing={2} w="100%">
										<MobileItem href="/about" title="About" />
										<MobileItem href="/contact" title="Contact" />
										<MobileItem href="/projects" title="Projects" />
										<MobileItem href="/tools" title="Tools" />
									</SimpleGrid>
								</VStack>
								<Divider />
								<HStack justify="space-between" w="100%">
									<HStack spacing={2}>
										{/** @ts-ignore */}
										<Link href="https://twitter.com/uSebazz" isexternal unstyled>
											<IconButton
												aria-label="Twitter"
												size="sm"
												icon={<TwitterLogo weight="fill" />}
												color={useColorModeValue('neutralG.800', 'neutralD.600')}
											/>
										</Link>
										{/** @ts-ignore */}
										<Link href="https://github.com/uSebazz" isexternal unstyled>
											<IconButton
												aria-label="Github"
												size="sm"
												icon={<GithubLogo weight="fill" />}
												color={useColorModeValue('neutralG.800', 'neutralD.600')}
											/>
										</Link>
									</HStack>
									<ThemeToggle mobile />
								</HStack>
							</VStack>
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</Box>
	);
};

interface FocusableElement {
	focus(options?: FocusOptions): void;
}
export default MobileMenu;
