import { ReactNode } from 'react';

export interface MenuItemProps {
    title: string;
    count?: number;
    icon?: ReactNode;
    onClick?: () => void;
    isHidden?: boolean;
    to?: string;
}
