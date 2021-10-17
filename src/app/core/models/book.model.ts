import { GenreEnum } from "../constants/enum";

export class Book {
    bookId: string;
    authorId: string;
    authorName: string;
    bookTitle: string;
    summary: string;
    genreList: string[] = [];
    pointsRequiredForChapter: number;
    coverImage: File;
}