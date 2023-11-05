import exi1 from "../../../assets/images/sml_front.jpg";
import exi2 from "../../../assets/images/5g6fw1yhl8mif9o63n4ldbhwgs2j4cz2.jpg";
import exi3 from "../../../assets/images/felton_cityrewritten.jpg";
const ViewExibition = () => {
  return (
    <div className="my-40">
      <h2 className="text-5xl font-semibold border-l-8 border-red-600">
        Read Latest News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div>
          <img src={exi1} alt="" className="w-full mb-3 h-52" />
          <p className="text-lg font-medium">
            Langston Hughes and Bloke Modisane: Revisiting the Archives with
            Siphiwo Mahala
          </p>
        </div>
        <div>
          <img src={exi2} alt="" className="w-full mb-3 h-52" />
          <p className="text-lg font-medium">
            Langston Hughes and Bloke Modisane: Revisiting the Archives with
            Siphiwo Mahala
          </p>
        </div>
        <div>
          <img src={exi3} alt="" className="w-full mb-3 h-52" />
          <p className="text-lg font-medium">
            Langston Hughes and Bloke Modisane: Revisiting the Archives with
            Siphiwo Mahala
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewExibition;
