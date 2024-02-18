import { FaBandcamp } from "react-icons/fa";
import { ActionButton } from "../button/action.button";
import { SecondaryButton } from "../button/secondaryButton";
import Item from "./item";
import { LinkNavigation } from "./link.nav";
export default function Navbar() {
  return (
    <div>
      <nav className=" border-gray-900 px-4 lg:px-6 py-2.5 font-mono bg-transparent z-10 relative">
      <div className="flex flex-wrap items-center justify-between mx-32">
        <a href="https://flowbite.com" className="flex items-center">
          <FaBandcamp className="mr-2 text-4xl text-primaryBlue-500"/>
          <span className="self-center text-2xl font-bold text-white uppercase whitespace-nowrap">
            Bomber man
          </span>
        </a>
        <div className="flex items-center space-x-4 lg:order-2">
            <SecondaryButton onClicked={()=>console.log("test")} label="Login"/>
            <ActionButton type="submit" onClicked={()=>console.log("test")} label="Register"/>
        </div>
        <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          
        </div>
      </div>
    </nav>
    </div>
  );
}
