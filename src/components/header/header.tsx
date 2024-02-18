import Navbar from "../navbar/navbar";
import { PrimaryButton } from "../button/primaryButton";
import { FaGamepad } from "react-icons/fa6";
export default function Header() {
  return (
    <header className="relative overflow-hidden font-mono h-screen">
        <Navbar/>
        <div className="relative z-10 w-3/5 p-8 my-56 ml-32 text-white">
          <h4 className="mt-6 font-bold text-7xl">Explosion!</h4>
          <h2 className="font-extrabold text-7xl">Boom! </h2>
          <p className="mt-6 mb-10 text-lg font-semibold leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quia hic dolorum iste maxime nisi et nesciunt eligendi amet
            perferendis, expedita quod. Eius, delectus molestiae.
          </p>
          <PrimaryButton onClicked={()=>console.log("test")} type="button" label="Play" icon={<FaGamepad />} />
        </div>
        <video
          src="/boom.mp4"
          autoPlay
          loop
          className="absolute inset-0 w-full"
        ></video>     
    </header>
  );
}
