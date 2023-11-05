// import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import Container from "../../components/ui/Container";
import Rating from "react-rating";
import useAuth from "../../hooks/useAuth";
import moment from "moment/moment";

const BookDetails = () => {
  const { user } = useAuth();
  const [book, setBook] = useState({});
  const [quantity, setQuantity] = useState(null);
  const axi = useAxios();
  const { id } = useParams();
  useEffect(() => {
    axi.get(`/books/${id}`).then((res) => {
      // console.log(res.data);
      setBook(res.data);
      setQuantity(res.data.quantity);
    });
  }, [id, axi]);

  console.log(quantity);
  const handleSubmit = (e) => {
    const newQuan = parseInt(quantity) - 1; //need to update update
    //these will be post method
    const displayName = e.target.displayName.value;
    const userEmail = e.target.email.value;
    const returnDate = e.target.returnDate.value;
    const BorrowedDate = moment().format("MMMM Do YYYY, h:mm:ss a");
    const category = book.category;
    const bookName = book.bookName;
    console.log(
      newQuan,
      displayName,
      userEmail,
      returnDate,
      BorrowedDate,
      category,
      bookName
    );
    const borrowedBooks = {
      newQuan,
      displayName,
      userEmail,
      returnDate,
      BorrowedDate,
      category,
      bookName,
    };

    axi.patch(`/books/${id}`, newQuan).then((res) => {
      console.log(res);
    });
    //   // console.log(quantity);
  };

  return (
    <Container>
      <div className="mb-40 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="w-full h-full md:border-r-8 border-red-800 flex justify-center lg:items-start items-center">
            <img src={book?.photoUrl} className="mt-10" alt="" />
          </div>
          <div className=" lg:border-r-8 border-red-800 space-y-3">
            <h3 className="text-5xl font-bold">{book?.bookName}</h3>
            <h6 className="text-2xl font-semibold">
              Author: {book?.authorName}
            </h6>
            <p className="text-lg font-semibold">Category: {book?.category} </p>
            <p className="text-lg font-semibold">Stock: {book.quantity}</p>
            <div className="flex gap-1">
              <span className="text-lg font-semibold">Ratings:</span>
              <Rating
                className="text-xs md:whitespace-nowrap"
                initialRating={book.rating}
                readonly
              />
            </div>
            <div>
              <h4 className="text-3xl font-medium">Book Overvirew:</h4>
              <p>{book?.description}</p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-6 w-full md:col-span-2 lg:col-span-1">
            <button className="btn btn-secondary btn-outline w-4/5 rounded-none mt-40">
              Read
            </button>
            <button
              className="btn btn-secondary btn-outline w-4/5 rounded-none"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Borrow
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <div className="modal-action">
                  <form onSubmit={handleSubmit} method="dialog">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        name="email"
                        placeholder="Your email..."
                        className="input input-bordered"
                        defaultValue={user?.email}
                      />
                      <input
                        name="displayName"
                        placeholder="Your name..."
                        className="input input-bordered"
                        defaultValue={user?.displayName}
                      />
                      <input
                        name="returnDate"
                        type="datetime-local"
                        placeholder="Return date..."
                        className="input input-bordered"
                      />
                    </div>
                    {/* if there is a button in form, it will close the modal */}
                    <div className="flex justify-center mt-4">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-outline rounded-none w-full"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookDetails;
{
  /* Open the modal using document.getElementById('ID').showModal() method */
}
