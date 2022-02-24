type BasicNavItemType = {
    id: string;
};

export type NavLinkItemType = BasicNavItemType & {
    label: string;
    path: string;
};
