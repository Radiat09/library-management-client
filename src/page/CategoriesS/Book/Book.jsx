import PropTypes from "prop-types";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  // console.log(book._id);
  return (
    <div className="card card-side rounded-none shadow-2xl md:h-72 w-full bg-base-100 ">
      <img src={book?.photoUrl} className="h-full w-28 md:w-40" alt="Movie" />
      <div className="p-2 flex flex-col justify-between font-medium space-y-2">
        <h2 className="card-title font-bold">{book?.bookName}</h2>
        <h4 className="text-lg">By:{book.authorName}</h4>
        <p>Stock: {book?.quantity}</p>
        <div className="flex flex-col">
          <span>Ratings:</span>
          <Rating
            className="text-xs md:whitespace-nowrap"
            initialRating={book?.rating}
            readonly
          />
        </div>

        <div className="card-actions ">
          <Link to={`/${book?.category}/${book._id}`}>
            <button className="btn btn-secondary btn-outline rounded-none">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
