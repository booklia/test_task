import BookCard from "./BookCard";
import { search } from "../redux/searchParamsSlice";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { useQuery } from "@tanstack/react-query";
import fetchBooks from "../APICalls/fetchBooks";
import { Book } from "../types/APIResponseTypes";


const BookResults = () => {


  const [temp, setTemp] = useState([] as Book[])
  const dispatch = useDispatch();
  const searchParams = useSelector((state: RootState) => state.searchParams.value)
  const { isFetching, data } = useQuery(["search", searchParams], fetchBooks, {keepPreviousData: true});
  const books = data?.items ?? [];


  useEffect(() => {
    if (searchParams.startIndex != 0 && isFetching) {
      setTemp([...temp, ...books])
    }
    if (searchParams.startIndex == 0 ) {
      setTemp([])
    }
  }, [
    isFetching
  ]);


  return (
    <section className="books-results">
      <h2 className="main-subheading">Found {data?.totalItems ?? "0"} results</h2>
      <div className="books-results-container">
        {!books.length ? (
          <h1>No Books Found</h1>
        ) : (
          [...temp, ...books].map((book : Book ) => {

            return (
              <BookCard
                book={book}
                key={book.id}
              />
            );
          })
        )}
        
      </div>
      {isFetching ? (
          <div className="loading-block">
            <h2 className="loading-text">Loading...</h2>
          </div>
        ) : ""}
      <div className="results-pagination">
        {data?.totalItems  ? (
          <button className="search-button" onClick={() => 
          dispatch(search({
            q:searchParams.q,
            orderBy:searchParams.orderBy,
            subject:searchParams.subject,
            startIndex:+searchParams.startIndex + 30
          }))}>
          load more
        </button>
        ) : null}
        
      </div>
    </section>
  );
};

export default BookResults;

