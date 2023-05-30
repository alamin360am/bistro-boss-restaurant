import SectionHeading from "../../../Components/SectionHeading";
import "./featured.css";
import featuredImg from "./../../../../public/assets/home/featured.jpg";

const Featured = () => {
  return (
    <section className="py-16 featured text-white">
      <SectionHeading
        subHeading={"Check it out"}
        heading={"From our menu"}
      ></SectionHeading>
      <div className="mt-4 flex flex-col justify-center items-center gap-4 p-0 md:p-4 md:flex-row">
        <img src={featuredImg} alt="" className="w-1/2 md:w-1/3" />
        <div className="w-full p-2 md:w-1/2">
          <p className="text-lg">March 20, 2023</p>
          <p className="text-xl">WHERE CAN I GET SOME?</p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white">
            view full menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
