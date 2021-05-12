import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import MicIcon from "@material-ui/icons/Mic";
import { Hidden } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInput = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInput.current.value;
    if (!term) return;
    console.log(term);
    router.push(`search?term=${term}`);
  };
  return (
    <header>
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={120}
          height={40}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form
          className="flex flex-grow py-3 px-6 ml-10 mr-5 border border-gray-300 rounded-full shadow-lg max-w-3xl items-center"
          onSubmit={search}
        >
          <input
            type="text"
            className="flex-grow w-full focus:outline-none"
            ref={searchInput}
          />
          <ClearIcon
            className="text-gray-500 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInput.current.value = "")}
          />
          <p className="border-l-2 border-gray-300 hidden sm:inline-flex">
            &nbsp;
          </p>
          <Hidden xsDown>
            <MicIcon className="mr-3 sm:inline-flex text-blue-500   " />
          </Hidden>
          <Hidden xsDown>
            <SearchIcon className="sm:inline-flex text-blue-500" />
          </Hidden>
        </form>
        <Avatar
          url="https://images.unsplash.com/photo-1620062868782-100e41142be3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          className="mr-auto"
        />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
