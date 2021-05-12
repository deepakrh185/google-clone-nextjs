function HeaderOption({ Icon, title, selector }) {
  return (
    <div
      className={`flex items-center border-b-4 border-transparent border-gray-300 hover:text-blue-500 hover:border-blue-500 cursor-pointer ${
        selector && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon />
      <p className="hidden sm:inline-flex ">{title}</p>
    </div>
  );
}

export default HeaderOption;
