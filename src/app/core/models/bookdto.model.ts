import { GenreEnum } from "../constants/enum";

export class BookDTO {
    bookId: string;
    authorName: string;
    bookTitle: string;
    summary: string;
    genreList: GenreEnum[] = [];
    pointsRequiredForChapter: number;
    coverImage: string;
    review: number;
    updatedDate: Date;
}