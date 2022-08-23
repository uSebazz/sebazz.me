import { Button, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 }
		}
	},
	closed: {
		y: 20,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 }
		}
	}
};

const MobileItem = ({ href, title }: Props) => {
	const MotionButton = motion(Button);
	const { pathname } = useRouter();
	var isActive = false;

	if (href !== '/') {
		const [, group] = href.split('/');
		isActive = pathname.includes(group);
	} else if (href === pathname) {
		isActive = true;
	}

	return (
		<Link href={href}>
			<MotionButton
				size="lg"
				aria-current={isActive ? 'page' : undefined}
				w="100%"
				variants={variants}
				bg={useColorModeValue('neutralG.400', 'neutralG.800')}
				_activeLink={{
					color: useColorModeValue('neutralG.800', 'neutralG.800'),
					bg: useColorModeValue('neutralG.600', 'neutralD.500')
				}}
				_hover={{
					bg: useColorModeValue('neutralG.500', 'neutralD.700')
				}}
			>
				{title}
			</MotionButton>
		</Link>
	);
};

type Props = {
	href: string;
	title: string;
};
export default MobileItem;
