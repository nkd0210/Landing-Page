import logo from "@/assets/logosaas.png"
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import SocialPin from "@/assets/social-pin.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} width={40} height={40} alt="logo" className="relative" />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a className="cursor-pointer hover:text-white" href="#">About</a>
          <a className="cursor-pointer hover:text-white" href="#">Features</a>
          <a className="cursor-pointer hover:text-white" href="#">Customers</a>
          <a className="cursor-pointer hover:text-white" href="#">Pricing</a>
          <a className="cursor-pointer hover:text-white" href="#">Help</a>
          <a className="cursor-pointer hover:text-white" href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 my-6">
          <SocialX className="cursor-pointer hover:text-white" />
          <SocialInsta className="cursor-pointer hover:text-white" />
          <SocialLinkedin className="cursor-pointer hover:text-white" />
          <SocialYoutube className="cursor-pointer hover:text-white" />
          <SocialPin className="cursor-pointer hover:text-white" />
        </div>
        <p>&copy; 2025 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
