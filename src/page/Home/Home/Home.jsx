import { Toaster } from "react-hot-toast";
// import IntroImage from "../assets/images/intro.jpg";
import Container from "../../../components/ui/Container";
import Banner from "../Banner/Banner";
import Categories from "../BooksCategories/Categories";

const Home = () => {
  return (
    <div>
      {/* <Container></Container> */}
      <Banner></Banner>
      <Container>
        <Categories></Categories>
      </Container>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Home;
