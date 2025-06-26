import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex align-items-center px-6 py-8 align-items-center text-xs sm:text-md md:text-lg font-bold">
      <div className="mx-auto w-full text-center sm:w-3/5">
        <div className="flex justify-between mx-auto w-3/5">
          <Link to="#">
            <img src={facebook} alt="facebook" className="w-[24px] h-auto" />
          </Link>
          <Link to="#">
            <img src={instagram} alt="instagram" className="w-[24px] h-auto hover:text-gray-700" />
          </Link>
          <Link to="#">
            <img src={twitter} alt="twitter" className="w-[24px] h-auto" />
          </Link>
          <Link to="#">
            <img src={youtube} alt="youtube" className="w-[24px] h-auto" />
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row py-2 sm:py-5 text-gray-900 tracking-tighter justify-between">
          <Link to="#" className="hover:text-gray-800">
            Conditions of Use
          </Link>
          <Link to="#" className="hover:text-gray-800">
            Privacy &amp; Policy
          </Link>
          <Link to="#" className="hover:text-gray-800">
            Press Room
          </Link>
        </div>
        <p className="text-gray-500">
          &copy; 2021 MovieBox by <a href="https://github.com/Imhandegbelo" target="_blank" className="text-gray-400 hover:text-gray-900 active:text-gray-900 visited:text-gray-900">George Imhandgbelo</a>
        </p>
      </div>
    </footer>
  );
}
