import Books from './Books';
import NewBook from './NewBook';

export default function Home() {
  return (
    <main>
      <Books />
      <div className="h-line" />
      <NewBook />
    </main>
  );
}
