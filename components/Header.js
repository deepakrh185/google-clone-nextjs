import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import MicIcon from "@material-ui/icons/Mic";

import { Hidden } from "@material-ui/core";
function Header() {
  const router = useRouter();
  const searchInput = useRef(null);

  return (
    <header>
      <Image
        src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        width={120}
        height={40}
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />
      <form className="flex py-3 px-6 ml-10 mr-5 border border-gray-300 rounded-full shadow-lg max-w-3xl items-center ">
        <input
          type="text"
          className="flex-grow w-full focus:outline-none"
          ref={searchInput}
        />
        <ClearIcon
          className="text-gray-500 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125"
          onClick={() => (searchInput.current.value = "")}
        />
        <Hidden xsDown>
          <MicIcon className="mr-3 h-6  sm:inline-flex text-blue-500" />
        </Hidden>
      </form>
    </header>
  );
}

export default Header;
