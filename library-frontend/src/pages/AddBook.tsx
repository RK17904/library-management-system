import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { addBook } from '../services/api';
import type { Book } from '../types/Book';

const AddBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState<Book>({
    title: '',
    author: '',
    publicationYear: new Date().getFullYear(),
    genre: '',
    copies: 1,
    shelfLocation: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addBook(book);
      navigate('/');
    } catch (error) {
      console.error("Error saving book", error);
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input name="title" value={book.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input name="author" value={book.author} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Publication Year</label>
          <input type="number" name="publicationYear" value={book.publicationYear} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Genre</label>
          <input name="genre" value={book.genre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Copies Available</label>
          <input type="number" name="copies" value={book.copies} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Shelf Location</label>
          <input name="shelfLocation" value={book.shelfLocation} onChange={handleChange} />
        </div>
        
        <div style={{ marginTop: '30px' }}>
          <button type="submit" className="btn btn-primary">Save Book</button>
          <Link to="/" className="btn btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default AddBook;