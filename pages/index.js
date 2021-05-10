import Head from "next/head";
import Avatar from "../components/Avatar";
import AppsIcon from "@material-ui/icons/Apps";
import { IconButton } from "@material-ui/core";
import Image from "next/image";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="" />
      </Head>
      <header className="flex w-full  p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Image</p>
          <IconButton className="border-none">
            <AppsIcon />
          </IconButton>
          <Avatar url="https://images.unsplash.com/photo-1620062868782-100e41142be3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </div>
      </header>
      <form className="flex flex-col items-center mt-44 flex-grow ">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
        />
        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg
        max-w-md rounded-full border border-gray-300 px-5 py-3 items-center 
         sm:max-w-xl lg:max-w-2xl "
        >
          <SearchIcon className="text-gray-700 mr-3" />
          <input className=" focus:outline-none flex-grow" />
          <MicIcon className="text-gray-700" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
    </div>
  );
}
