import { Icon, StackProps, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

const MobileButton = ({ label, icon, props }: Props) => {
	return (
		<VStack as="button" spacing={0} rounded="md" px={6} {...props} color={useColorModeValue('neutralG.800', 'neutralD.600')}>
			<Icon>{icon}</Icon>

			<Text fontSize="xs" fontWeight="500" color={useColorModeValue('neutralG.900', 'neutralG.500')}>
				{label}
			</Text>
		</VStack>
	);
};

type Props = {
	label: string;
	icon: ReactNode;
	props?: StackProps;

	// onClick?: () => void;
};
export default MobileButton;
