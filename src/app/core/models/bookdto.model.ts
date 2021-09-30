import { Genre } from "../constants/enum";

export class BookDTO {
    bookId: string;
    authorName: string;
    bookTitle: string;
    summary: string;
    genreList: Genre[] = [];
    pointsRequiredForChapter: number;
    coverImage: File;
    review: number;
    updatedDate: Date;
}