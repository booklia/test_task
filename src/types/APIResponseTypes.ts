export interface BooksAPIResponse {
    items: Book[];
    kind: string;
    totalItems: number;
}
export interface BookQuery {
    q: string;
    subject: string;
    orderBy: string;
    startIndex: number;
}
export interface Book {
    id: string;
    saleInfo: Record<string, unknown>[];
    etag: string;
    volumeInfo: {
        description: string | null;
        imageLinks: {
            thumbnail: string | null;
            [key: string]: unknown;
        };
        title: string;
        authors: string[] | null;
        categories: string[] | null;
        [key: string]: unknown;
    };
    [key: string]: unknown;
}