export type MoviesResponse = {
    content: Movie[];
    totalPages: number;
}

export type Movie = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    genre: Genre;
}

export type Genre = {
    id: number;
    name: string;
}

export type Role = {
    id: number;
    authority: string;
}

export type Review = [{
    id: number;
    text: string;
    movieId: number;
    user: User;
}]

export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    roles: Role[];
}