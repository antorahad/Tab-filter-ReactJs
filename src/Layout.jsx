import Navbar from "./Navbar";
import Hero from "./Hero"
import Content from "./Content";

const Layout = () => {
    return (
        <div className="container mx-auto px-5">
            <Navbar/>
            <Hero/>
            <Content/>
        </div>
    );
};

export default Layout;