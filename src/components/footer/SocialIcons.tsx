import { chakra, Tooltip, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import React from 'react';

const SocialIcons = ({ href, label, children }: SocialIconsProps) => {
	return (
		<Tooltip label={label}>
			<chakra.button
				bg={useColorModeValue('neutralG.300', 'neutralG.800')}
				rounded="full"
				w={8}
				h={8}
				cursor="pointer"
				as="a"
				href={href}
				display="inline-flex"
				alignItems="center"
				justifyContent="center"
				transition="background 0.3s ease"
			>
				<VisuallyHidden>{label}</VisuallyHidden>
				{children}
			</chakra.button>
		</Tooltip>
	);
};

type SocialIconsProps = {
	href: string;
	label: string;
	children: React.ReactNode;
};
export default SocialIcons;
