import { PropTypes } from 'prop-types';
import BookState from './BookState';

export default function Book({
  category, title, author, progress, chapter,
}) {
  return (
    <li className="book">
      <div className="left-content">
        <div className="book-info">
          <h4 className="book-category">{category}</h4>
          <h2 className="book-title">{title}</h2>
          <h6 className="book-author">{author}</h6>
          <BookState />
        </div>
      </div>

      <div className="right-content">
        <div className="circular-progress-container">
          <div className="circular-progress" />

          <div className="progress-stat">
            <p className="percent-complete">{progress}</p>
            <p className="completed">Completed</p>
          </div>
        </div>

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
  category: '',
  title: '',
  author: '',
  progress: '0%',
  chapter: '',
};

Book.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  progress: PropTypes.string,
  chapter: PropTypes.string,
};
