import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";


const Home = () => {
    return (
        <div>
            <div className="w-full">
            <Banner></Banner>
            </div>
            <Category></Category>
            <About></About>
        </div>
    );
};

export default Home;