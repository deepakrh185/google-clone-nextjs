function Avatar({ url }) {
  return (
    <div>
      <img
        src={url}
        className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 animate-pulse"
        alt="profile-pic"
      />
    </div>
  );
}

export default Avatar;
