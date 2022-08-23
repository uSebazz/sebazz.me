/* eslint-disable react-hooks/rules-of-hooks */
import { chakra, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

const Link = (props: LinkProps) => {
	const { href } = props;
	const isExternalLink = href && (href.startsWith('/') || href.startsWith('#'));

	return props.unstyled ? (
		isExternalLink ? (
			<NextLink href={href}>
				<chakra.a {...props} />
			</NextLink>
		) : (
			<chakra.a {...props} />
		)
	) : isExternalLink ? (
		<NextLink href={href}>
			<chakra.a
				borderBottom="2px"
				borderRadius="1px"
				transition="all 0.3s"
				transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
				borderColor={useColorModeValue('neutralG.200', 'neutralD.200')}
				color={useColorModeValue('neutralG.200', 'neutralD.600')}
				_hover={{
					borderColor: useColorModeValue('neutralG.200', 'neutralD.200'),
					color: useColorModeValue('neutralG.200', 'neutralD.200'),
					backgroundColor: useColorModeValue('neutralG.200', 'neutralD.200')
				}}
				{...props}
			/>
		</NextLink>
	) : (
		<chakra.a
			borderBottom="2px"
			borderRadius="1px"
			borderColor={useColorModeValue('neutralG.400', 'neutralD.400')}
			color={useColorModeValue('neutralG.300', 'neutralD.300')}
			transition="all 0.3s"
			transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
			_hover={{
				color: useColorModeValue('neutralG.50', 'neutralD.200'),
				backgroundColor: useColorModeValue('neutralG.400', 'neutralD.400')
			}}
			{...props}
		/>
	);
};

type LinkProps = {
	href: string;
	isexternal?: boolean;
	unstyled?: boolean; // esta aqui pero da error en los links.
};
export default Link;
