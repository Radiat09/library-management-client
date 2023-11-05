import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Book from "./Book/Book";
import { Vortex } from "react-loader-spinner";
import Container from "../../components/ui/Container";

const CategoriesS = () => {
  const { name } = useParams();
  const axi = useAxios();
  const getBooks = async () => {
    const res = await axi.get(`/books?category=${name}`);
    return res;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });
  // console.log(data);

  return (
    <Container>
      <div className="mb-40 mt-10 h-[60vh]">
        <h1 className="text-5xl font-semibold text-center">Books of {name}</h1>
        <div>
          {isLoading ? (
            <div className="flex justify-center">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
              {data?.data?.map((book) => (
                <Book key={book._id} book={book}></Book>
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CategoriesS;
