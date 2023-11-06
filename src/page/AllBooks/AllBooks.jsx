import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { Vortex } from "react-loader-spinner";
import AllSBook from "./AllSBook";
const AllBooks = () => {
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
  console.log(allBooks);
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {allBooks?.map((book) => (
            <AllSBook key={book._id} book={book}></AllSBook>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
