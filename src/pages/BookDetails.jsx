import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();

  const book = books.find((b) => b.bookId === bookId);
  const { author } = book;
  return (
    <div>
      <h1>{author}</h1>
    </div>
  );
};

export default BookDetails;
