import Head from "next/head";
import Avatar from "../components/Avatar";
import AppsIcon from "@material-ui/icons/Apps";
import { IconButton } from "@material-ui/core";

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
          <Avatar url="https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </div>
      </header>
    </div>
  );
}
// url="https://images.unsplash.com/photo-1620062868782-100e41142be3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
