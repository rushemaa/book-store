import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBooks } from '../redux/books/booksSlice';

export default function Book({
  id,
  category,
  title,
  author,
  progress,
  chapter,
}) {
  const dispatch = useDispatch();
  return (
    <li className="book">
      <div className="left-content">
        <div className="book-info">
          <h4 className="book-category">{category}</h4>
          <h2 className="book-title">{title}</h2>
          <h6 className="book-author">{author}</h6>
          <div className="state-buttons">
            <button className="btn-comment" type="button">
              Comments
            </button>

            <div className="v-line" />

            <button
              onClick={() => dispatch(removeBooks(id))}
              className="btn-delete"
              type="button"
            >
              Remove
            </button>
            <div className="v-line" />
            <button className="btn-edit" type="button">
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="right-content">
        <div className="circular-progress-container">
          <div className="circular-progress-c">
            <div className="circular-progress" />
          </div>

          <div className="progress-stat">
            <p className="percent-complete">{progress}</p>
            <p className="completed">Completed</p>
          </div>
        </div>

        <div className="line-2" />

        <div className="current-chapter-container">
          <div>
            <p className="current-chapter-label">CURRENT CHAPTER</p>
            <p className="current-chapter">{chapter}</p>
          </div>
          <div>
            <button className="btn-progress" type="button">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

Book.defaultProps = {
  id: '',
  category: '',
  title: '',
  author: '',
  progress: '0%',
  chapter: '',
};

Book.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  progress: PropTypes.string,
  chapter: PropTypes.string,
};
