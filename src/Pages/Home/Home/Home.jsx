import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <div className="w-full">
            <Banner></Banner>
            </div>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;