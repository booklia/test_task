import { Book } from "../types/APIResponseTypes";
import {Link} from 'react-router-dom'
interface IProps {
  book: Book;
}

const BookCard = (props: IProps) => {
  const { book } = props;
  const id = book.id;
  const thumbnail = book?.volumeInfo?.imageLinks?.thumbnail ?? '';
  const category = book?.volumeInfo?.categories ?? [''] as string[];
  const bookName = book?.volumeInfo?.title ?? '';
  const bookAuthor = book?.volumeInfo?.authors ?? [] as string[];
  return (
    <Link to={`/details/${id}`}>
      <div className="book" id={id.toString()}>
        <img className="card-image" src={thumbnail} alt="" />
        <p className="category">{category[0]}</p>
        <h3 className="author">{bookAuthor.join(", ")}</h3>

        <h2 className="book-name">{bookName}</h2>
      </div>
    </Link>
  );
};

export default BookCard;
