import { useQuery } from "@tanstack/react-query";
import { Vortex } from "react-loader-spinner";
import CategoryCard from "./CategoryCard";
import useAxios from "../../../hooks/useAxios";

const Categories = () => {
  const axi = useAxios();
  const getCategories = async () => {
    const res = await axi.get("/categories");
    console.log(res.data);

    return res.data;
  };
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  // console.log(categories.data);
  return (
    <div className="my-40">
      <h2 className="text-5xl font-semibold border-l-8 border-red-600">
        Choose Your Category
      </h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {categories &&
              categories.map((cate, idx) => (
                <CategoryCard key={idx} cate={cate}></CategoryCard>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
