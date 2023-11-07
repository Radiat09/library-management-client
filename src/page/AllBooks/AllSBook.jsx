import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllSBook = ({ book }) => {
  const { _id, bookName, authorName, category, quantity, rating, photoUrl } =
    book;
  return (
    <div className="card lg:card-side bg-base-100 lg:h-[320px] px-1 shadow-2xl rounded-none gap-2">
      <figure>
        <img
          src={photoUrl}
          className="w-48"
          alt={`an cover image of ${bookName} book`}
        />
      </figure>
      <div className="flex flex-col justify-between my-2 flex-1">
        <div className="flex flex-col gap-3">
          <h2 className="card-title">{bookName}</h2>
          <h2 className="card-title">By: {authorName}</h2>
          <p className="font-semibold">
            <span className="text-xl  mr-1">Category:</span> {category}
          </p>
          <p className="font-semibold">
            <span className="text-xl  mr-1">Quantity:</span> {quantity}
          </p>
          <p>{rating}</p>
        </div>
        <div className="card-actions justify-center w-full pr-2">
          <Link
            to={`/updateBook/${_id}`}
            className="btn btn-secondary btn-outline w-full"
          >
            <button>Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

AllSBook.propTypes = {
  book: PropTypes.object,
};
export default AllSBook;
