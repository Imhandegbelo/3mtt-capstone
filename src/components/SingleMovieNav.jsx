import NiceModal from "@ebay/nice-modal-react";
import menu from "../assets/images/menu.svg";
import tv from "../assets/images/tv.png";
// import { MobileMenu } from "./MobileMenu";

export default function SingleMovieNav() {
  return (
    <nav className="flex justify-between items-center w-full h-20 p-8 shadow-lg">
      <div className="flex gap-4 items-center font-extrabold text-2xl text-rose-700">
        <img src={tv} alt="tv-logo" className="w-8 h-8lg:hidden" />
        <h1>MovieBox</h1>
      </div>
      <button
        // onClick={() => NiceModal.show(MobileMenu)}
        className="flex w-8 h-8 bg-rose-700 rounded-full items-center"
      >
        <img src={menu} alt="menu" className="h-6 w-6 mx-auto" />
      </button>
    </nav>
  );
}
