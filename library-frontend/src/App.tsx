import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        
        {/* Top of the Card */}
        <Navbar />
        
        {/* Bottom of the Card */}
        <div className="content-area">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/edit/:id" element={<EditBook />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;