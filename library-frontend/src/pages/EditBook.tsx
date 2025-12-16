import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getBookById, updateBook } from '../services/api';
import type { Book } from '../types/Book';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if (id) loadBook(id);
  }, [id]);

  const loadBook = async (id: string) => {
    try {
      const response = await getBookById(id);
      setBook(response.data);
    } catch (error) {
      console.error("Error loading book", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (book) setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (book && id) {
      try {
        await updateBook(id, book);
        navigate('/');
      } catch (error) {
        console.error("Error updating book", error);
      }
    }
  };

  if (!book) return <div>Loading book details...</div>;

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input name="title" value={book.title} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input name="author" value={book.author} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Publication Year</label>
          <input type="number" name="publicationYear" value={book.publicationYear} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Genre</label>
          <input name="genre" value={book.genre} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Copies</label>
          <input type="number" name="copies" value={book.copies} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Shelf Location</label>
          <input name="shelfLocation" value={book.shelfLocation} onChange={handleChange} />
        </div>

        <div style={{ marginTop: '30px' }}>
          <button type="submit" className="btn btn-primary">Update</button>
          <Link to="/" className="btn btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default EditBook;