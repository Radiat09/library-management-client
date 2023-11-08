import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";
import { Vortex } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    return (
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
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
