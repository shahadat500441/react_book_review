import { useLoaderData, useParams } from "react-router-dom";
import { saveBooks } from "../utilits.js/localStorage";


const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();

  const book = books.find((b) => b.bookId === bookId);
  const {
    bookName,
    author,
    image,
    review,
    tags,
    totalPages,
    yearOfPublishing,
    publisher,
    rating,
  } = book;

  const handelReadBook = (book)=>{
   saveBooks(book)
  
  }
  return (
    <div className=" flex gap-5 flex-col sm:flex-row rounded-lg p-6 items-center justify-center  ">
      <img
        className=" h-[300px] sm:h-[500px] border-2  border-gray-300 rounded-lg shadow-lg p-12 "
        src={image}
        alt=""
      />

      <div>
        <h1 className="text-2xl sm:text-4xl font-bold">{bookName}</h1>
        <p className="text-lg my-2 font-normal">By: {author}</p>
        <hr className="text-gray-300" />
        <h4 className="my-3 ">Fiction</h4>
        <hr className="text-gray-300" />
        <p>
          <span className="text-lg font-medium">Review </span>: {review}
        </p>

        <div className="flex gap-4 my-3  ">
          <h1 className="font-bold">Tag :</h1>
          {tags.map((tag) => (
            <span
              className="bg-[#F3F3F3] rounded-full px-2 py-1 text-[#23BE0A] font-medium"
              key={tag}
            >
              #{tag}
            </span>
          ))}
        </div>
        <hr className="text-gray-300" />

        <p className="mt-3">
          <span className="text-gray-500 mt-4">Number of Pages:</span>
          <span className="font-bold"> {totalPages}</span>
        </p>
        <p className="mt-1">
          <span className="text-gray-500 mt-4">Publisher:</span>
          <span className="font-bold"> {publisher}</span>
        </p>
        <p className="mt-1">
          <span className="text-gray-500 mt-4">Year of Publishing::</span>
          <span className="font-bold"> {yearOfPublishing}</span>
        </p>

        <p className="mt-1">
          <span className="text-gray-500 mt-4">Rating:</span>
          <span className="font-bold"> {rating}</span>
        </p>

        <div className="mt-3">
          <button  
          onClick={()=> handelReadBook(book)}
          className="bg-[#23BE0A] font-bold text-white px-4 py-2 rounded-lg  zhover:bg-white hover:text-black    mr-3 ">
            Read
          </button>
          <button className="bg-[#50B1C9] font-bold text-white px-4 py-2 rounded-lg  border-2 hover:bg-white hover:text-black   mr-3 ">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
