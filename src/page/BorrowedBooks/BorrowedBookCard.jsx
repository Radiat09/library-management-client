import PropTypes from "prop-types";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const BorrowedBookCard = ({ book, refetch }) => {
  const {
    _id,
    returnDate,
    BorrowedDate,
    category,
    bookName,
    photo,
    quantity,
    oldId,
  } = book;

  const axi = useAxios();

  const handleReturn = () => {
    const newQuantity = parseInt(quantity) + 1;
    // console.log(newQuantity);
    axi.delete(`borrowedbooks/${_id}`).then((res) => {
      // console.log(res);
      if (res.data.deletedCount > 0) {
        axi.patch(`/books/${oldId}`, { quantity: newQuantity }).then((res) => {
          console.log(res);
        });
        toast.success("Book returned");
        refetch();
      }
    });
  };

  return (
    <div className="flex flex-col justify-between gap-3 shadow-2xl h-[300px]">
      <div className="flex gap-3">
        <div className="flex justify-center items-center">
          <img
            src={photo}
            className="w-40 h-fit"
            alt={`photo of ${bookName} book`}
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-5">
          <div className="flex items-center md:gap-1">
            <span className="md:text-lg md:font-medium">Book:</span>
            <p className=" md:font-medium text-sm">{bookName}</p>
          </div>
          <div className="flex items-center md:gap-1">
            <span className="md:text-lg md:font-medium">Category:</span>
            <p className=" md:font-medium text-sm">{category}</p>
          </div>
          <div className="flex items-center md:items-center md:gap-1">
            <span className="md:text-lg md:font-medium whitespace-nowrap">
              Return:
            </span>
            <p className=" md:font-medium text-sm">{returnDate}</p>
          </div>
          <div className="flex items-start md:items-center md:gap-1">
            <span className="md:text-lg md:font-medium">Borrow:</span>
            <p className=" md:font-medium text-sm">{BorrowedDate}</p>
          </div>
        </div>
      </div>
      <button
        onClick={handleReturn}
        className="btn btn-secondary btn-outline w-full rounded-none p-1"
      >
        Return
      </button>
    </div>
  );
};

BorrowedBookCard.propTypes = {
  book: PropTypes.object,
  refetch: PropTypes.func,
};
export default BorrowedBookCard;
