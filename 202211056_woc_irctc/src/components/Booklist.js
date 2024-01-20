// BookList.js
import React from 'react';
import styles from './Booklist.module.css';

const Booklist = () => {
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
    // Add more books as needed
  ];

  return (
    <div className={styles.container}>
      <h1>Book List</h1>
      <ul className={styles.bookList}>
        {books.map((book) => (
          <li key={book.id} className={styles.bookItem}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booklist;
