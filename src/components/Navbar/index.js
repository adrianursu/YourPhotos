import WhiteLogo from "../../../public/white-logo";
import Avatar from "../../../public/placeholder-img.jpg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="pt-10 mb-6 flex justify-between md:mb-6">
      <WhiteLogo />

      <div className="">
        <a
          style={{ background: "#142332", opacity: "1" }}
          className="text-white px-3 py-2 rounded-xl ml-8 flex items-center"
          href="https://github.com/adrianursu"
          target="_blank"
          rel="noreferrer"
        >
          <p className="mr-6 text-lg">My Profile</p>
          <Image
            width={40}
            height={40}
            className="rounded"
            src={Avatar}
            alt="Default avatar"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
