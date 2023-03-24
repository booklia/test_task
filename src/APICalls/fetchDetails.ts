import { QueryFunction } from "@tanstack/react-query";
import { Book} from "../types/APIResponseTypes";

const fetchDetails: QueryFunction<
  Book,
  [
    "details",
    string
  ]
  > = async ({queryKey}) => {
  const  id = queryKey[1];
 
 
    const apiRes = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyDbwSF44KRKDGaK9qDfJat8i2ajqny8FAs`
    );

    if (!apiRes.ok) {
      throw new Error(`details/ ${id}  fetch not ok`);
    }
    return await apiRes.json();

};

export default fetchDetails;
