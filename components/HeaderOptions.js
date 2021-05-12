import HeaderOption from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-500 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b  ">
      <div className="flex space-x-4">
        <HeaderOption Icon={SearchIcon} title="All" selector />
        <HeaderOption Icon={AnnouncementIcon} title="News" />
        <HeaderOption Icon={WallpaperIcon} title="Images" />
        <HeaderOption Icon={VideoLibraryIcon} title="Videos" />
        <HeaderOption Icon={RoomIcon} title="Maps" />
        <HeaderOption Icon={MoreVertIcon} title="More" />
      </div>

      <div className="flex space-x-4">
        <p className="link ">Setting</p>
        <p className="link ">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
