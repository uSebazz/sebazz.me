import { Box, Center, HStack, Link, useColorModeValue, VStack } from '@chakra-ui/react';
import { NewspaperIcon } from '@heroicons/react/solid';
import { motion, useCycle } from 'framer-motion';
import MobileButton from './MobileButton';
import MobileMenu from './MobileMenu';

// Cosas q funcionan afuera
const links = [
	// { name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Projects', href: '/projects' },
	{ name: 'Contact', href: '/contact' }
];
const menuvariants = {
	open: {
		opacity: 1
	},
	closed: {
		opacity: 0
	}
};

const navvariants = {
	open: {
		transition: { staggerChildren: 0.15, delayChildren: 0.25 }
	},
	closed: {}
};

const MobileNavbar = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const MotionBox = motion(Box);
	const MotionVStack = motion(VStack);

	return (
		<MotionBox
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			position="fixed"
			bottom="0"
			right="0"
			left="0"
			display={{ base: 'block', md: 'none' }}
		>
			<HStack
				justify="space-around"
				align="center"
				py={2}
				mt="auto"
				height={16}
				bg={useColorModeValue('white', 'neutralG.900')}
				borderTopWidth="2px"
				borderTopColor={useColorModeValue('neutralG.300', 'neutralD.500')}
				shadow="0 -2px 10px 0 rgba(0,0,0, 0.035);"
			>
				{/** About */}
				<Center w="100%">
					<Link href="/about" px={6}>
						<MobileButton label="About" icon={<NewspaperIcon />} />
					</Link>
				</Center>

				{/** Menu */}
				<Center w="100%">
					<MobileMenu />
				</Center>
			</HStack>
		</MotionBox>
	);
};

export default MobileNavbar;
