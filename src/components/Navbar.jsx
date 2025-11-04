import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import logo from "../assets/nameLogo.png";
import { NAVBAR_LINKS } from "../constants";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const handleScroll = (id) => {
    // Your scroll logic here
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Disclosure
      as="nav"
      className="lg:fixed md:fixed top-0 left-0 right-0 z-40 bg-[#1e1e2f]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>

          {/* Logo and Navigation Links */}
          <div className="flex flex-1 items-center justify-around md:items-stretch md:justify-around">
            {/* Logo */}
            <div className="flex shrink-0 items-center">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {NAVBAR_LINKS.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleScroll(link.id)}
                    className="text-green-400 border-b-2 border-green-400 hover:text-blue-400  hover:border-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/nandish-patel-492086193/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                <FaLinkedin className="size-5 text-blue-400 hover:text-green-400" />
              </a>
              <a
                href="https://github.com/NandishDPatel?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                <FaGithub className="size-5 text-black hover:text-green-400" />
              </a>
              <a
                href="https://leetcode.com/u/nandishdpatel22/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                <SiLeetcode className="size-5 text-orange-400 hover:text-green-400" />
              </a>
              <a
                href="https://www.hackerrank.com/profile/nandishdpatel22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                <FaHackerrank className="size-5 text-green-700 hover:text-green-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <DisclosurePanel className="sm:hidden border-t-2 border-white">
        <div className="space-y-1 px-1 pt-2 pb-2">
          {NAVBAR_LINKS.map((link) => (
            <DisclosureButton
              key={link.id}
              as="button"
              onClick={() => handleScroll(link.id)}
              className="text-green-400 border-b-2 border-green-400 hover:text-blue-400hover:border-blue-600 block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200"
            >
              {link.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
