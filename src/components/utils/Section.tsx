import Container from '@/components/utils/Container';
import { Center } from '@chakra-ui/react';
import { ReactNode } from 'react';

const Section = (props: Props) => {
    const { full, children } = props;

    return (
        <Center as='section'>
            {full ? children : <Container>{children}</Container>}
        </Center>
    )
}

type Props = {
    full?: boolean;
    children: ReactNode;
}

export default Section;