import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <div className="w-full h-14 flex items-center px-11 justify-between lg:px-4">
        <Link to={"../"}>
          <h2 className="text-3xl hover:underline decoration-white">
            Portfolios
          </h2>
        </Link>
        <div>
          <Link
            to={"/registration"}
            className="hover:underline decoration-white"
          >
            Registration
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
