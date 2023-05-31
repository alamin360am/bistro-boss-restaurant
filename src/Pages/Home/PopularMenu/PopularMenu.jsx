import SectionHeading from "../../../Components/SectionHeading";
import useMenu from "../../../Hooks/useMenu";
import Menu from "./Menu";

const PopularMenu = () => {
  const [menus] = useMenu();
  const popularData = menus.filter((pop) => pop.category == "popular");

  return (
    <section className="py-16">
      <SectionHeading
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {popularData.map((menu) => (
          <Menu key={menu._id} menu={menu}></Menu>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-4">
          view full menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
