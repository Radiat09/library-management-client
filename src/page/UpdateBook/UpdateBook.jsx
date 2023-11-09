import { useForm } from "react-hook-form";
import Container from "../../components/ui/Container";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateBook = () => {
  const [categories, setCategories] = useState([]);
  const axi = useAxios();
  const { id } = useParams();
  // console.log(id);
  const [defaultBookData, setDefaultBookData] = useState([]);

  console.log(defaultBookData.category);
  useEffect(() => {
    axi.get(`/books/${id}`).then((res) => {
      setDefaultBookData(res.data);
    });
  }, [axi, id]);

  // console.log(defaultBookData);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const bookName = form.bookName.value;
    const authorName = form.authorName.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const photoUrl = form.photo.value;
    const description = form.description.value;

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
    const toastId = toast.loading("updating...");

    try {
      axi.put(`/books/${id}`, book).then((res) => {
        // console.log(res);
        if (res.data.modifiedCount > 0) {
          // console.log(res.data.modifiedCount);
          toast.success("Updated", { id: toastId });
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    axi.get("/categories?query=category").then((res) => {
      console.log("From Add Book", res);
      setCategories(res.data);
    });
  }, [axi]);

  // const getCategories = async () => {
  //   const res = await axi.get("/categories?query=category");
  //   return res;
  // };
  // const { data: categories } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: getCategories,
  // });

  return (
    <Container>
      <div className="min-h-[70vh]  my-40">
        <div className="bg-red-700  rounded px-3 py-20  md:px-10 lg:px-32">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white">
            Update A BOOK
          </h2>
          <div>
            <form onSubmit={handleUpdate} className="">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 space-y-5">
                  <div className="">
                    <label className="label ">
                      <span className="label-text text-xl font-semibold text-white">
                        Book Name
                      </span>
                    </label>
                    <input
                      defaultValue={defaultBookData?.bookName}
                      name="bookName"
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
                      defaultValue={defaultBookData?.authorName}
                      name="authorName"
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
                      defaultValue={defaultBookData?.category}
                      className="select select-bordered w-full p-3 border-none "
                      name="category"
                    >
                      {categories &&
                        categories?.map((cat, idx) => (
                          <option key={idx} value={cat.category}>
                            {cat.category}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="flex-1 space-y-5">
                  <div className="">
                    <label className="label ">
                      <span className="label-text text-xl font-semibold text-white">
                        Quantity of the book
                      </span>
                    </label>
                    <input
                      defaultValue={defaultBookData?.quantity}
                      name="quantity"
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
                      defaultValue={defaultBookData?.rating}
                      name="rating"
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
                      defaultValue={defaultBookData?.description}
                      name="description"
                      type="text"
                      placeholder="Enter short description"
                      className="w-full  p-3 rounded-md"
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
                    defaultValue={defaultBookData?.photoUrl}
                    name="photo"
                    type="text"
                    placeholder="Enter photo URL"
                    className="w-full  p-3 rounded-md"
                  />
                </div>
                <input
                  type="submit"
                  value="Update Book"
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

export default UpdateBook;
