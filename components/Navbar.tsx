const Header = () => {
  return (
    <div className="fixed z-[100] w-screen top-0 ">
      <div className="flex  justify-between items-center py-8 px-4 sm:px-32 bg-white bg-opacity-60 backdrop-blur">
        <div className="text-4xl font-bold">Brown Ion</div>
        <div className="flex gap-4">
          <img
            src="/instagram.png"
            alt="Instagram"
            className="w-6 aspect-square"
          />
          <img
            src="/facebook.png"
            alt="Facebook"
            className="w-6 aspect-square"
          />
          <img src="/twitter.png" alt="Twitter" className="w-6 aspect-square" />
        </div>
      </div>
    </div>
  );
};

export default Header;
