import { Image } from '@chakra-ui/react';
import Link from 'next/link';

const AvatarNavigation = () => {
    return (
        <Link href='/'>
            <Image
                alt='avatar'
                src='/rex.png'
                cursor='pointer'
                w={10}
                h={10}
            />
        </Link>
    )
}

export default AvatarNavigation;
