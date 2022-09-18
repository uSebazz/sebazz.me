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

export const interest = {
    like: [
        'Programming',
        'Discord Bots',
        'Music',
        'Gaming',
        'Art',
        'Stumble Guys',
        'Among Us',
        'Minecraft',
        'Valorant',
        'Roblox',
        'Cars',
        'Cold Tea',
    ],
    dislike: [
        'Stock Photos',
        'Windows 11',
        'Notifications',
        'Group chats',
        'Politics',
        'Spam',
        'Math',
        'Exams',
        'School',
    ]
}

export const tools = {
    windows: [
        {
            name: 'Visual Studio Code',
            description: 'Code editor',
            image: 'https://dl.airtable.com/.attachmentThumbnails/5867c47e387719535b566e229e2dfcaa/c7a79221',
            link: 'https://code.visualstudio.com'
        },
        {
            name: 'Alacritty',
            description: 'Terminal emulator written in rust',
            image: 'https://raw.githubusercontent.com/alacritty/alacritty/master/extra/logo/compat/alacritty-term+scanlines.png',
            link: 'https://alacritty.org'
        },
        {
            name: 'Vivaldi',
            description: 'Fast & private browser',
            image: 'https://dl.airtable.com/.attachmentThumbnails/ed6468ec3f351e0e5fde9fca8900a8e7/21b86953',
            link: 'https://vivaldi.com'
        },
        {
            name: 'Obsidian',
            description: 'Markdown editor',
            image: 'https://forum.obsidian.md/uploads/default/original/2X/6/663886873dba65def747edf8ebf752a0a8d09db0.jpeg',
            link: 'https://obsidian.md'
        }
    ],
    chrome: [
        {
            name: 'Stylus',
            description: 'Customize the web with userstyles',
            image: 'https://addons.mozilla.org/user-media/addon_icons/814/814814-64.png?modified=1542603952',
            link: 'https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne'
        },
        {
            name: 'DailyDev',
            description: 'Hottest dev news',
            image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1654585555653/b4pafSL1j.png',
            link: 'https://chrome.google.com/webstore/detail/dailydev-the-homepage-dev/jlmpjdjjbgclbocgajdjefcidcncaied'
        },
        {
            name: 'Vue Telescope',
            description: 'Scan Vue.js apps',
            image: '/svg/vue-telescope.svg',
            link: 'https://chrome.google.com/webstore/detail/vue-telescope/neaebjphlfplgdhedjdhcnpjkndddbpd'
        }
    ],
}
export type Project = {
    id: number;
    title: string;
    desc: string;
    img: string;
    link: string;
    github?: string;
    type: 'bot' | 'website';
};

export const DISCORD_ID = '899339781132124220';