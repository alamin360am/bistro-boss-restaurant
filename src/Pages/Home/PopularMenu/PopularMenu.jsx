import { useEffect, useState } from "react";
import SectionHeading from "../../../Components/SectionHeading";
import Menu from "./Menu";

const PopularMenu = () => {
  const [menus, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularData = data.filter((pop) => pop.category == "popular");
        setMenu(popularData);
      });
  }, []);

  return (
    <section className="py-16">
      <SectionHeading
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {menus.map((menu) => (
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
