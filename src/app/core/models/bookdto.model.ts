import { GenreEnum } from "../constants/enum";
import { Chapter } from "./chapter.model";

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
    chapterList: Chapter[] = [];
}