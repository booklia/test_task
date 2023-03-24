import {useParams} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'
import ErrorBoundary from '../ErrorBoundary';
import fetchDetails from '../APICalls/fetchDetails'
const BookDetails = () => {
  const {id} = useParams()
  if (!id) {
    throw new Error('no id :(')
  }

  const {isLoading, data} = useQuery(['details', id], fetchDetails)


  if (isLoading) {
    return (
    <section className="book-details">

      <div className='loading-block'>
        <h2 className='loader'> waiting</h2>
      </div>
      </section>
    )
  }
  const book = data;
  if (!book) {
    throw new Error('no book lol')
  }
  
  const thumbnail = book?.volumeInfo?.imageLinks?.thumbnail ?? '';
  const category = book?.volumeInfo?.categories ?? [''] as string[];
  const bookName = book?.volumeInfo?.title ?? '';
  const bookAuthor = book?.volumeInfo?.authors ?? [] as string[];
  const description = book?.volumeInfo?.description ?? '';
  console.log(category)
  return (
    <section className="book-details">
      <div className="image-block"><img className='image-desc' src={thumbnail} alt="" /></div>
      <div className="description-block">
        <p className="category">{category.join(' / ')}</p>
        <h1 className="author-and-name">{bookAuthor.join(', ')}: {bookName}</h1>
        <p className="book-description">{description}</p>
      </div>
    </section>
  );
};
function BookDetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <BookDetails />
    </ErrorBoundary>
  )
}

export default BookDetailsErrorBoundary;
