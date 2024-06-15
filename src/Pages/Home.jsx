import Hero from "../Components/Hero";
import wave from '../assets/wave.svg'


const Home = () => {
    return (
        <div className="min-h-[calc(100vh-116px)] flex flex-col items-center justify-center relative">
           <Hero></Hero>
           
            <img className="w-full absolute bottom-0" src={wave} alt="" />
           
        </div>
    );
};

export default Home;