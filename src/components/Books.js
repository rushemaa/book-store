import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { fetchData } from '../redux/books/booksSlice';

export default function Books() {
  const { bookData } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <ul className="book">
      {bookData.map((element) => (
        <Book
          key={element.item_id}
          id={element.item_id}
          category={element.category}
          title={element.title}
          author={element.author}
          progress="64%"
          chapter="Introduction"
        />
      ))}
    </ul>
  );
}
