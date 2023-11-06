// import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import Container from "../../components/ui/Container";
import Rating from "react-rating";
import useAuth from "../../hooks/useAuth";
import moment from "moment/moment";
import axios from "axios";
import toast from "react-hot-toast";

const BookDetails = () => {
  const { user } = useAuth();
  const [book, setBook] = useState({});
  const [currQuantity, setQuantity] = useState(null);
  const axi = useAxios();
  const { id } = useParams();
  useEffect(() => {
    axi.get(`/books/${id}`).then((res) => {
      // console.log(res.data);
      setBook(res.data);
      setQuantity(res.data?.quantity);
    });
  }, [id, axi]);

  // console.log(currQuantity);
  const handleSubmit = (e) => {
    const quantity = parseInt(currQuantity) - 1; //need to update update
    //these will be post method
    const displayName = e.target.displayName.value;
    const userEmail = e.target.email.value;
    const returnDate = e.target.returnDate.value;
    const BorrowedDate = moment().format("MMMM Do YYYY, h:mm:ss a");
    const category = book.category;
    const bookName = book.bookName;
    const photo = book.photoUrl;

    const borrowedBooks = {
      quantity,
      displayName,
      userEmail,
      returnDate,
      BorrowedDate,
      category,
      bookName,
      photo,
      oldId: id,
    };

    // axi
    //   .get(`/borrowedbooks/check?userEmail=${user?.email}&bookName=Fuckkk`)
    //   .then((res) => {
    //     console.log(res);
    //   });

    axi.post("/borrowedbooks", borrowedBooks).then((res) => {
      // console.log(res);
      if (res.status === 200) {
        axi.patch(`/books/${id}`, { quantity: quantity }).then((res) => {
          console.log(res);
        });
        toast.success("Borrow Successfull");
      }
    });
  };

  console.log(book);
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
          </div>
          <div className="flex flex-col justify-start items-center gap-6 w-full md:col-span-2 lg:col-span-1">
            <Link
              to={`/${book.category}/${book._id}/read`}
              className="btn btn-secondary btn-outline w-4/5 rounded-none mt-40"
            >
              <button>Read</button>
            </Link>
            <button
              disabled={currQuantity === 0}
              className="btn btn-secondary btn-outline w-4/5 rounded-none "
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Borrow
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <div className="modal-action w-full">
                  <form
                    onSubmit={handleSubmit}
                    method="dialog"
                    className="w-full"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                      <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email..."
                          className="input input-bordered"
                          defaultValue={user?.email}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="displayName">Name</label>
                        <input
                          id="displayName"
                          name="displayName"
                          type="text"
                          placeholder="Your name..."
                          className="input input-bordered"
                          defaultValue={user?.displayName}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="returnDate">Return date</label>
                        <input
                          id="returnDate"
                          name="returnDate"
                          type="datetime-local"
                          placeholder="Return date..."
                          className="input input-bordered"
                        />
                      </div>
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
