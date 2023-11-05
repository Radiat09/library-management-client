import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Vortex } from "react-loader-spinner";
import ReadLatestNewsCard from "./ReadLatestNewsCard";
import { FaArrowRight } from "react-icons/fa";

const ReadLatestNews = () => {
  // const [latestNews, setLatestNews] = useState([]);
  const getLatestNews = async () => {
    const res = await axios.get("./readlatestnews.json");
    return res;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["latestNews"],
    queryFn: getLatestNews,
  });
  // setLatestNews(data.data);
  // console.log(latestNews);

  return (
    <div className="my-40">
      <div className="flex justify-between items-center border-b pb-6">
        <h2 className="text-5xl font-semibold border-l-8 border-red-600">
          Read Latest News
        </h2>
        <a href="">
          <p className="flex items-center gap-1 text-blue-500">
            All Library News <FaArrowRight></FaArrowRight>
          </p>
        </a>
      </div>
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
            {data?.data?.map((news, idx) => (
              <ReadLatestNewsCard key={idx} news={news}></ReadLatestNewsCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadLatestNews;
