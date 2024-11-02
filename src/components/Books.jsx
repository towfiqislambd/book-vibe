import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h2 className="text-4xl font-semibold py-5 text-center">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;