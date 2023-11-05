// import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import Container from "../../components/ui/Container";
import Rating from "react-rating";

const BookDetails = () => {
  const [book, setBook] = useState({});
  const axi = useAxios();
  const { id } = useParams();
  useEffect(() => {
    axi.get(`http://localhost:9000/api/v1/books/${id}`).then((res) => {
      console.log(res.data);
      setBook(res.data);
    });
  }, [id, axi]);
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
                initialRating={book?.rating}
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
            <button className="btn btn-secondary btn-outline w-4/5 rounded-none ">
              Borrow
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookDetails;
