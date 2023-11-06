import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { Vortex } from "react-loader-spinner";
import AllSBook from "./AllSBook";
import { useEffect, useState } from "react";
const AllBooks = () => {
  const [filteredBooks, setFilteredBook] = useState([]);
  const [filterV, setFilter] = useState(false);
  const axi = useAxios();

  const {
    data: allBooks,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allBooks"],
    queryFn: () => {
      const res = axi.get("/books").then((response) => {
        return response.data;
      });
      return res;
    },
  });
  useEffect(() => {
    const sortedBooks = allBooks?.filter((book) => parseInt(book.quantity) > 0);
    setFilteredBook(sortedBooks);
  }, [allBooks]);
  // console.log(allBooks);
  console.log(filteredBooks);
  return (
    <div className="max-w-7xl mx-auto my-20">
      {isLoading ? (
        <div className="flex justify-center">
          <Vortex
            visible={true}
            height="180"
            width="180"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </div>
      ) : (
        <div>
          <div className="flex justify-end mb-2">
            <button
              onClick={() => setFilter(true)}
              className="btn btn-accent text-white btn-sm"
            >
              Sort by In Stock
            </button>
          </div>
          {filterV ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredBooks?.map((book) => (
                <AllSBook key={book._id} book={book}></AllSBook>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {allBooks?.map((book) => (
                <AllSBook key={book._id} book={book}></AllSBook>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
