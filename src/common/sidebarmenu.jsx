export const MENUITEMS = [
    {
        menutitle: "MAIN",
        Items: [
            {
                path: `${import.meta.env.BASE_URL}indexpage`,
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3" />
                        <path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z" />
                    </svg>
                ),
                type: 'link',
                active: false,
                selected: false,
                title: 'Index',
                badge: "badge bg-success text-light",
                badgetxt: "1",
            },
        ]
    },
    {
        menutitle: "WEB APPS",
        Items: [
            {
                path: `${import.meta.env.BASE_URL}Profiles`,
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24">
                        <path d="M12 12c2.67 0 4.8-2.13 4.8-4.8S14.67 2.4 12 2.4 7.2 4.53 7.2 7.2s2.13 4.8 4.8 4.8zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V22h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                ),
                type: 'link',
                active: false,
                selected: false,
                title: 'Profiles'
            },
            {
                path: `${import.meta.env.BASE_URL}twitter`,
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                ),
                type: 'link',
                active: false,
                selected: false,
                title: 'Twitter'
            },
            {
                path: `${import.meta.env.BASE_URL}facebook`,
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.096 0 2.238.195 2.238.195v2.47h-1.26c-1.243 0-1.63.772-1.63 1.562v1.876h2.773l-.443 2.89h-2.33V21.88C18.343 21.13 22 16.99 22 12z" />
                    </svg>
                ),
                type: 'link',
                active: false,
                selected: false,
                title: 'Facebook'
            },
            {
                path: `${import.meta.env.BASE_URL}Instagram`,
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24">
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.5-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                ),
                type: 'link',
                active: false,
                selected: false,
                title: 'Instagram'
            }

        ]
    }
];
