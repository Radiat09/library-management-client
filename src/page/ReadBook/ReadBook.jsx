import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";
import Rating from "react-rating";

const ReadBook = () => {
  const { id } = useParams();
  const axi = useAxios();
  const [book, setBook] = useState({});
  useEffect(() => {
    axi.get(`/books/${id}`).then((res) => {
      // console.log(res.data);
      setBook(res.data);
    });
  }, [axi, id]);
  // console.log(book);
  const {
    _id,
    bookName,
    authorName,
    category,
    quantity,
    rating,
    photoUrl,
    description,
  } = book;
  return (
    <div className="flex flex-col gap-4 xl:flex-row max-w-7xl mx-auto my-20">
      <div className="flex justify-center">
        <img src={photoUrl} alt={`photo of ${bookName} book`} />
      </div>
      <div className="flex gap-1  justify-center my-4 xl:border-x-8 border-red-900 xl: px-2">
        <div className="flex flex-col items-start justify-between text-2xl font-bold">
          <p>Name Of Book</p>
          <p>Author</p>
          <p>Category</p>
          <p>Rating</p>
        </div>
        <div className="flex flex-col items-start justify-between text-xl font-bold">
          <p>: {bookName}</p>
          <p>: {authorName}</p>
          <p>: {category}</p>
          <p className="flex items-center">
            :{"  "}
            <Rating
              className="text-xs md:whitespace-nowrap"
              initialRating={rating}
              readonly
            />
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start mx-2">
        <h3 className="text-4xl font-bold mb-2">Book Overview:</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ReadBook;
