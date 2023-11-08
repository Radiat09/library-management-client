import axios from "axios";

const instance = axios.create({
  baseURL: "https://library-management-server-five.vercel.app/api/v1",
  // https://library-management-server-five.vercel.app/
  //http://localhost:9000
});
const useAxios = () => {
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (err) {
      console.log("from Axios", err);
    }
  );
  return instance;
};

export default useAxios;
