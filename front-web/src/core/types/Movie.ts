export type MoviesResponse = {
    content: Movie[];
    totalPages: number;
}

export type Movie = {
    id: number;
    title: string;
    subtitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    genre: Genre;
}

export type Genre = {
    id: number;
    name: string;
}