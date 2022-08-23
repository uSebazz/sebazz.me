export const projects: Project[] = [
    {
        id: 0,
        title: 'Nino',
        desc: 'Nino is multipurpose bot that seeks to encourage activity on your server.',
        img: '/projects/nino.png',
        link: 'https://inv.nino.fun',
        github: 'https://github.com/uSebazz/Nino',
        type: 'bot'
    },
    {
        id: 1,
        title: 'Portfolio',
        desc: 'This website.',
        img: '/rex.png',
        link: 'https://sebazz.me',
        github: 'https://github.com/uSebazz/sebazz.me',
        type: 'website'
    }
]

export type Project = {
    id: number;
    title: string;
    desc: string;
    img: string;
    link: string;
    github?: string;
    type: 'bot' | 'website';
};