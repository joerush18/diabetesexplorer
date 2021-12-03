const Header = () => {
  return (
    <>
      <div className="absolute flex space-x-6  right-[80px] top-[20px]">
        <span>Light Mode</span>
        <div className="flex relative justify-start items-center">
          <div className="h-4 w-4 rounded-full bg-primaryColor absolute"></div>
          <div className="h-3 w-8 rounded-md bg-[#C4C4C4]"></div>
        </div>
        <span>Dark Mode</span>
      </div>
    </>
  );
};

export default Header;

// TODO : Hell lots of things to do man.
