import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryCard = ({ cate }) => {
  // console.log(cate);
  return (
    <div className="card card-compact rounded-none bg-base-100 shadow-xl">
      <figure>
        <img
          src={cate?.image}
          alt={`image of ${cate?.category}`}
          className="h-60 w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold text-center">{cate?.category}</h2>
        <div className="card-actions justify-center">
          <Link to={`/category/${cate?.category}`}>
            <button className="btn btn-secondary btn-outline rounded-none w-full font-semibold ">
              See Library
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
CategoryCard.propTypes = {
  cate: PropTypes.object,
};
export default CategoryCard;
