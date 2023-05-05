import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
