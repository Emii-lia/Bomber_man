import { FaExplosion } from "react-icons/fa6";
export default function Navbar() {
  return (
    <div>
      <nav className=" border-gray-900 px-4 lg:px-6 py-2.5 font-mono bg-transparent z-10 relative">
      <div className="flex flex-wrap items-center justify-between mx-32">
        <a href="https://flowbite.com" className="flex items-center">
          <FaExplosion className="mr-2 text-4xl text-pink-600"/>
          <span className="self-center text-2xl font-bold text-white uppercase whitespace-nowrap">
            Bomber man
          </span>
        </a>
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
