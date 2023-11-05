import PropTypes from "prop-types";

const Book = ({ book }) => {
  console.log(book);
  return (
    <div className="card card-side rounded-none shadow-2xl border bg-base-100 ">
      <figure>
        <img src={book?.photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book?.bookName}</h2>
        <p>Stock: {book?.quantity}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
