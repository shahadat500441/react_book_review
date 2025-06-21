import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
  const { bookId, author, bookName, image, rating, tags } = book;
  return (
    <Link
      to={`/book/${bookId}`}
      className=" border border-gray-300 p-5 rounded-2xl shadow"
    >
      <img
        className="bg-[#F3F3F3] px-7 py-4   mx-auto rounded"
        src={image}
        alt=""
      />
      <div className="flex gap-4 my-3  ">
        {tags.map((tag) => (
          <span
            className="bg-[#F3F3F3] rounded-full px-2 py-1 text-[#23BE0A] font-medium"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      <h1 className="text-xl font-bold">{bookName}</h1>
      <h3 className="mt-2 font-medium">By : {author}</h3>
      <span className="text-gray-300">
        --------------------------------------------------------
      </span>
      <div className="flex justify-between font-normal text-lg">
        <p>Fiction</p>
        <div className="flex items-center gap-1">
          <p>{rating}</p>
          <CiStar />
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
