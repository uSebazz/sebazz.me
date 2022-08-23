import { SlideFade } from '@chakra-ui/react';
import { ReactNode } from 'react';

const PageTransition = ({ children }: Props) => {
    return <SlideFade in>{children}</SlideFade>;
};


type Props = {
    children: ReactNode;
}
export default PageTransition;