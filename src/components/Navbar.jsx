import logo from "../assets/nameLogo.png";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { NAVBAR_LINKS } from "../constants";

const Navbar = () => {
  return (
    <>
      <div className="lg:fixed md:fixed top-0 left-0 right-0 z-40 flex justify-center">
        {/* Outer Wrapper Centered */}
        <div className="bg-[#1e1e2f] w-[90%] mb-2">
          {/* Navbar */}
          <nav className="mb-0 py-2 flex justify-between items-center">
            <div className="flex flex-shrink-0 items-center">
              <img className="mx-2 w-16" src={logo} alt="" />
            </div>
            <div className="flex mx-8 items-center justify-center gap-4 text-2xl">
              <a
                href="https://www.linkedin.com/in/nandish-patel-492086193/"
                target="_blank"
              >
                <FaLinkedin className="hover:text-blue-600" />
              </a>
              <a
                href="https://github.com/NandishDPatel?tab=repositories"
                target="_blank"
              >
                <FaGithub className="hover:text-black" />
              </a>
              <a href="https://leetcode.com/u/nandishdpatel22/" target="_blank">
                <SiLeetcode className="hover:text-orange-400" />
              </a>
              <a
                href="https://www.hackerrank.com/profile/nandishdpatel22"
                target="_blank"
              >
                <FaHackerrank className="hover:text-green-400" />
              </a>
            </div>
          </nav>

          <div className="w-full links flex flex-wrap justify-center border-b-2 border-t-2 border-b-white py-3 gap-4 sm:gap-6">
            {NAVBAR_LINKS.map((link, index) => (
              <div
                key={index}
                className="text-xl border-b-2 border-blue-500 text-blue-500 hover:cursor-pointer hover:text-green-500 hover:border-b-green-500"
              >
                {link}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:h-[100px] md:h-[180px]"></div>
    </>
  );
};

export default Navbar;
