import { QueryFunction } from "@tanstack/react-query";
import { BooksAPIResponse, BookQuery } from "../types/APIResponseTypes";

const fetchBooks: QueryFunction<
  BooksAPIResponse,
  [
    "search",
    BookQuery
  ]
  > = async ({queryKey}) => {
  const { q, orderBy, subject, startIndex } = queryKey[1];
 
  if (q) {
    const apiRes = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${q}${
        subject != "all" ? `+subject:${subject}` : ""
      }&orderBy=${orderBy}&maxResults=30&startIndex=${startIndex}&key=AIzaSyDbwSF44KRKDGaK9qDfJat8i2ajqny8FAs`
    );

    if (!apiRes.ok) {
      throw new Error(`/ ${q} ${orderBy} ${subject} fetch not ok`);
    }
    return await apiRes.json();
  }
  return [];
};

export default fetchBooks;
