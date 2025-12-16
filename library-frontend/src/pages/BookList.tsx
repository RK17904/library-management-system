import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBooks, deleteBook } from '../services/api';
import type  { Book } from '../types/Book';

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const response = await getBooks();
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this book?")) {
      await deleteBook(id);
      loadBooks();
    }
  };

  return (
    <div>
      <h2>Library — Book List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Shelf</th>
            <th style={{ width: '180px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? books.map((book) => (
            <tr key={book.id}>
              <td style={{ fontWeight: 600 }}>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publicationYear}</td>
              <td>
                <span style={{ 
                  background: '#e0e7ff', color: '#4338ca', 
                  padding: '4px 10px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 600 
                }}>
                  {book.genre}
                </span>
              </td>
              <td>{book.shelfLocation || '-'}</td>
              <td>
                <Link to={`/edit/${book.id}`}>
                  <button className="btn btn-sm btn-table-edit">Edit</button>
                </Link>
                <button 
                  className="btn btn-sm btn-danger" 
                  onClick={() => book.id && handleDelete(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>
                No books in the library.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;