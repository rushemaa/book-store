import { useSelector } from 'react-redux';
import Book from './Book';

export default function Books() {
  const { bookData } = useSelector((state) => state.books);
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
