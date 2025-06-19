import { Link } from "react-router-dom";
import heroImg from "../assets/pngwing 1.png";
const Hero = () => {
  return (
    <div className="hero bg-[#C4C4C4] opacity-80 rounded-lg py-5">
      <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
        <img src={heroImg} className="max-w-sm rounded-lg opacity-100 " />
        <div>
          <h1 className="text-5xl font-bold">
          Books to freshen
          <br />
            <span className>
               up your bookshelf
            </span>
          </h1>

          <Link to="/listedBook">
            <button
              to="/listedBooks"
              className=" font-bold rounded-lg px-4 py-3 bg-[#23BE0A] text-lg text-white mt-15"
            >
              View The List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
