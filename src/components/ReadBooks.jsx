import React from 'react';
// import { useLoaderData } from 'react-router-dom';
import { useState , useEffect} from 'react';
import { getBooks } from '../utilits.js/localStorage';
import BookCard from './BookCard';

const ReadBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        const storedBooks = getBooks()
        setBooks(storedBooks)
        

    },[])
  
    return (
       <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto">
             {
                books.map((book)=> <BookCard key={book.id} book={book}></BookCard>)
            }
           </div>
    );
};

export default ReadBooks;