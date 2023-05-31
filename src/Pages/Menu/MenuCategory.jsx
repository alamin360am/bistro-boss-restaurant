import SectionHeading from "../../Components/SectionHeading";
import Cover from "../../Shared/Cover/Cover";
import Menu from "../Home/PopularMenu/Menu";

const MenuCategory = ({title, img, subHeading, heading, items}) => {
  return (
    <div>
      {title && <Cover title={title} img={img}></Cover>}
      {heading && <SectionHeading subHeading={subHeading} heading={heading}></SectionHeading>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {items.map((menu) => (
          <Menu key={menu._id} menu={menu}></Menu>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
