import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <Box w="full" mx="auto" maxW="3xl" px={{ base: '6', md: '8' }} >
            {children}
        </Box>
    )
}

export default Container;