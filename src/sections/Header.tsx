import ArrowRight from "@/assets/arrow-right.svg"
import Logo from "@/assets/logosaas.png"
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg"

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center gap-3 py-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boots your productivity</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#" className="cursor-pointer hover:text-black">About</a>
              <a href="#" className="cursor-pointer hover:text-black">Features</a>
              <a href="#" className="cursor-pointer hover:text-black">Customer</a>
              <a href="#" className="cursor-pointer hover:text-black">Updates</a>
              <a href="#" className="cursor-pointer hover:text-black">Health</a>
              <button className="btn btn-primary cursor-pointer hover:bg-black/60">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
