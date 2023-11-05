import { useForm } from "react-hook-form";
import Container from "../../components/ui/Container";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import axios from "axios";

const AddBooks = () => {
  const [bookName, setBookname] = useState("");
  const [authorName, setAuthorname] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [rating, setRating] = useState(0);
  const [photoUrl, setPhotoUrl] = useState("");
  const [description, setDescription] = useState("");
  const { register, handleSubmit } = useForm();
  const axi = useAxios();
  const onSubmit = async (data) => {
    // setBookname(data.bookname);
    // setAuthorname(data.authorname);
    // setCategory(data.category);
    // setQuantity(data.quantity);
    // setRating(data.rating);
    // setPhotoUrl(data.photo);
    // setDescription(data.description);
    const bookName = data.bookName;
    const authorName = data.authorName;
    const category = data.category;
    const quantity = data.quantity;
    const rating = data.rating;
    const photoUrl = data.photoUrl;
    const description = data.descriptio;
    // console.log(
    //   bookName,
    //   authorName,
    //   category,
    //   quantity,
    //   rating,
    //   photoUrl,
    //   description
    // );
    // console.log(data);
    const book = {
      bookName,
      authorName,
      category,
      quantity,
      rating,
      photoUrl,
      description,
    };
    // console.log(book);
    try {
      axi.post("/books", book).then((res) => {
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <div className="min-h-[70vh]  my-40">
        <div className="bg-red-700  rounded py-20 px-1 md:px-10 lg:px-32">
          <h2 className=" text-5xl font-bold text-center mb-10 text-white">
            ADD A BOOK
          </h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 space-y-5">
                  <div className="">
                    <label className="label ">
                      <span className="label-text text-xl font-semibold text-white">
                        Book Name
                      </span>
                    </label>
                    <input
                      {...register("bookName")}
                      type="text"
                      placeholder="Enter book name"
                      className="w-full  p-3 rounded-md"
                    />
                  </div>
                  <div className="">
                    <label className="label">
                      <span className="label-text text-xl font-semibold text-white">
                        Author Name
                      </span>
                    </label>
                    <input
                      {...register("authorName")}
                      type="text"
                      placeholder="Enter Author name"
                      className="w-full  p-3 rounded-md"
                    />
                  </div>
                  <div className="">
                    <label className="label">
                      <span className="label-text text-xl font-semibold text-white">
                        Book Category
                      </span>
                    </label>
                    <select
                      name="type"
                      className="select select-bordered w-full p-3 border-none "
                      {...register("category")}
                    >
                      <option value="female">female</option>
                      <option value="male">male</option>
                      <option value="other">other</option>
                    </select>
                  </div>
                </div>
                <div className="flex-1  space-y-5">
                  <div className="">
                    <label className="label ">
                      <span className="label-text text-xl font-semibold text-white">
                        Quantity of the book
                      </span>
                    </label>
                    <input
                      {...register("quantity")}
                      type="text"
                      placeholder="Enter book quantity"
                      className="w-full  p-3 rounded-md"
                    />
                  </div>
                  <div className="">
                    <label className="label">
                      <span className="label-text text-xl font-semibold text-white">
                        Rating
                      </span>
                    </label>
                    <input
                      {...register("rating")}
                      type="text"
                      placeholder="Enter rating"
                      className="w-full  p-3 rounded-md"
                    />
                  </div>
                  <div className="">
                    <label className="label">
                      <span className="label-text text-xl font-semibold text-white">
                        Short description
                      </span>
                    </label>
                    <input
                      {...register("description")}
                      type="text"
                      placeholder="Enter short description"
                      className="w-full  p-1 md:p-3 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="mb-10">
                  <label className="label">
                    <span className="label-text text-xl font-semibold text-white">
                      Photo
                    </span>
                  </label>
                  <input
                    {...register("photo")}
                    type="text"
                    placeholder="Enter photo URL"
                    className="w-full  p-1 md:p-3 rounded-md"
                  />
                </div>
                <input
                  type="submit"
                  value="Add Book"
                  className="w-full border-2  bg-red-500 text-white hover:bg-white hover:text-red-500 hover:border-red-500 py-3  text-2xl font-bold rounded-none cursor-pointer transition-all"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddBooks;
