import BookState from './BookState';

export default function Books() {
  return (
    <ul className="book">
      <li className="book">
        <div className="left-content">
          <div className="book-info">
            <h4 className="book-category">Action</h4>
            <h2 className="book-title">The Hunger Games</h2>
            <h6 className="book-author">Suzanne Collins</h6>
            <BookState />
          </div>
        </div>

        <div className="right-content">
          <div className="circular-progress-container">
            <div className="circular-progress" />

            <div className="progress-stat">
              <p className="percent-complete">64%</p>
              <p className="completed">Completed</p>
            </div>
          </div>

          <div className="current-chapter-container">
            <div>
              <p className="current-chapter-label">CURRENT CHAPTER</p>
              <p className="current-chapter">Chapter 17</p>
            </div>
            <div>
              <button className="btn-progress" type="button">
                UPDATE PROGRESS
              </button>
            </div>
          </div>
        </div>
      </li>

      <li className="book">
        <div className="left-content">
          <div className="book-info">
            <h4 className="book-category">Science Fiction</h4>
            <h2 className="book-title">Dune</h2>
            <h6 className="book-author">Frank Herbert</h6>
            <BookState />
          </div>
        </div>

        <div className="right-content">
          <div className="circular-progress-container">
            <div className="circular-progress" />

            <div className="progress-stat">
              <p className="percent-complete">8%</p>
              <p className="completed">Completed</p>
            </div>
          </div>

          <div className="current-chapter-container">
            <div>
              <p className="current-chapter-label">CURRENT CHAPTER</p>
              <p className="current-chapter">
                Chapter 3: &quot;A Lesson Learned&quot;
              </p>
            </div>
            <div>
              <button className="btn-progress" type="button">
                UPDATE PROGRESS
              </button>
            </div>
          </div>
        </div>
      </li>
      <li className="book">
        <div className="left-content">
          <div className="book-info">
            <h4 className="book-category">Economy</h4>
            <h2 className="book-title">Capital in the Twenty-First Century</h2>
            <h6 className="book-author">Suzanne Collins</h6>
            <BookState />
          </div>
        </div>

        <div className="right-content">
          <div className="circular-progress-container">
            <div className="circular-progress" />

            <div className="progress-stat">
              <p className="percent-complete">0%</p>
              <p className="completed">Completed</p>
            </div>
          </div>

          <div className="current-chapter-container">
            <div>
              <p className="current-chapter-label">CURRENT CHAPTER</p>
              <p className="current-chapter">Introduction</p>
            </div>
            <div>
              <button className="btn-progress" type="button">
                UPDATE PROGRESS
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
