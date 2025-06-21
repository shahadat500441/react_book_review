import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import {useLoaderData} from "react-router-dom"
import BookCard from '../components/BookCard';

const Home = () => {
    const books = useLoaderData();
    console.log(books);
    return (
        <div>
            <div className=" mt-10 rounded-lg container mx-auto">
            <Hero></Hero>
        </div>

        
            <h1 className="font-bold text-5xl text-center mt-9 mb-6">Books </h1>

           <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto">
             {
                books.map((book)=> <BookCard key={book.id} book={book}></BookCard>)
            }
           </div>
        
        </div>
    );
};

export default Home;