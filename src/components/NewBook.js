import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks } from '../redux/books/booksSlice';

export default function NewBook() {
  const title = useRef();
  const author = useRef();
  const category = useRef();
  const dispatch = useDispatch();
  const { bookData } = useSelector((state) => state.books);

  return (
    <section>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-book">
        <input
          ref={title}
          className="ititle-input"
          placeholder="Book title"
          required=""
        />
        <input
          ref={author}
          className="ititle-author"
          placeholder="Author"
          required=""
        />
        <select ref={category} className="cat-input">
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button
          className="btn-add-book"
          onClick={() => {
            const itemId = `item${bookData.length + 1}`;
            const newB = {
              item_id: itemId,
              title: title.current.value,
              author: author.current.value,
              category: category.current.value,
            };
            title.current.value = '';
            author.current.value = '';
            category.current.value = 'Action';
            dispatch(addBooks(newB));
          }}
          type="button"
        >
          ADD BOOK
        </button>
      </form>
    </section>
  );
}
