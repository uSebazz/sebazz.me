import { Tag, WrapItem } from '@chakra-ui/react';

type Props = {
	name: string;
	like?: boolean;
};

const InterestTag = ({ name, like }: Props) => {
	return (
		<WrapItem>
			<Tag size="lg" variant="subtle" colorScheme={like ? 'green' : 'red'} rounded="lg">
				{name}
			</Tag>
		</WrapItem>
	);
};

export default InterestTag;
