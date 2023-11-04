import heroImg from "../../../assets/images/library-img.jpg";
import { FaSearch } from "react-icons/fa";
const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[80vh] header-content"
        style={{
          backgroundImage: `url(${heroImg})`,
          // backgroundColor:
          //   "linear - gradient(rgba(141, 39, 174, 0.3), rgba(141, 39, 174, 0.5))",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-center">
            <h1 className="mb-5 text-5xl font-bold ">
              Find Your Book Of Choice
            </h1>
            <p className="mb-5">
              For centuries people have found solace and inspiration through the
              words of others. Whether to expand their knowledge or escape into
              another world, the culture around the written word has helped
              shaped society today.
            </p>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search....."
                className="input rounded-3xl px-8 w-full"
              />
              <FaSearch className="-ml-10 text-xl text-red-500"></FaSearch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
