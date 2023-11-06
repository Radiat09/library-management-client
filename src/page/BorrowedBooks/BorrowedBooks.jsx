import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import BorrowedBookCard from "./BorrowedBookCard";
import useAuth from "../../hooks/useAuth";
import { Vortex } from "react-loader-spinner";

const BorrowedBooks = () => {
  const axi = useAxios();

  const { user } = useAuth();

  const getBorrowedBooks = async () => {
    const res = await axi.get(`/borrowedbooks?email=${user?.email}`);
    return res;
  };
  const {
    data: borrowedBooks,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["borrowedBooks"],
    queryFn: getBorrowedBooks,
  });
  // console.log(borrowedBooks.data);

  return (
    <div className=" md:my-20 max-w-7xl mx-auto">
      <h1 className="text-center mb-8 text-4xl font-semibold mt-5">
        Borrowed Books: {borrowedBooks?.data?.length}
      </h1>
      <div>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Vortex
              visible={true}
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={["red", "green", "blue", "yellow", "orange", "purple"]}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 mx-4 gap-4">
            {borrowedBooks?.data?.map((book) => (
              <BorrowedBookCard
                refetch={refetch}
                key={book._id}
                book={book}
              ></BorrowedBookCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BorrowedBooks;
