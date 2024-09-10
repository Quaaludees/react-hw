export interface IFavoriteActionProps {
    onClick: (id: string | number) => void;
    isFavorites: boolean;
    id: string | number;
}
