import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <div className="w-full">
            <Banner></Banner>
            </div>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;