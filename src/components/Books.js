import Book from './Book';

export default function Books() {
  const bookData = [
    {
      id: 1,
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: '64%',
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      progress: '8%',
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      id: 3,
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      progress: '0%',
      chapter: 'Introduction',
    },
  ];
  return (
    <ul className="book">
      {bookData.map((element) => (
        <Book
          key={element.id}
          category={element.category}
          title={element.title}
          author={element.author}
          progress={element.progress}
          chapter={element.chapter}
        />
      ))}
    </ul>
  );
}
