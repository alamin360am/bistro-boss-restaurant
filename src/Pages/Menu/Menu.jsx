import useMenu from "../../Hooks/useMenu";
import useTitle from "../../Hooks/useTitle";
import Cover from "../../Shared/Cover/Cover";
import menu from './../../../public/assets/menu/banner3.jpg'
import dessertImg from './../../../public/assets/menu/dessert-bg.jpeg'
import soupImg from './../../../public/assets/menu/soup-bg.jpg'
import pizzaImg from './../../../public/assets/menu/soup-bg.jpg'
import saladImg from './../../../public/assets/menu/soup-bg.jpg'
import MenuCategory from "./MenuCategory";

const Menu = () => {
    useTitle('Our Menu');
    const [menus] = useMenu();
    const soup = menus.filter((soup) => soup.category == "soup");
    const dessert = menus.filter((dessert) => dessert.category == "dessert");
    const pizza = menus.filter((pizza) => pizza.category == "pizza");
    const salad = menus.filter((salad) => salad.category == "salad");
    const offered = menus.filter((offered) => offered.category == "offered");
    return (
        <div>
            <Cover title={'Our Menu'} img={menu}></Cover>
            {/* Offer */}
            <MenuCategory subHeading={"'Don't miss"} heading={'Todays offer'} items={offered}></MenuCategory>

            {/* Dessert */}
            <MenuCategory title={'Dessert'} img={dessertImg} items={dessert}></MenuCategory>

            {/* Soup */}
            <MenuCategory title={'Soup'} img={soupImg} items={soup}></MenuCategory>

            {/* Pizza */}
            <MenuCategory title={'pizza'} img={pizzaImg} items={pizza}></MenuCategory>

            {/* salad */}
            <MenuCategory title={'salad'} img={saladImg} items={salad}></MenuCategory>
        </div>
    );
};

export default Menu;