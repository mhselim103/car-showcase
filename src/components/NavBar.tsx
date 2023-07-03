import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className="absolute z-10 w-full">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link href="/" className="flex items-center justify-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={118}
          height={18}
          className="object-contain"
        />
      </Link>
      <div>
        <CustomButton
          title="Sign In"
          btnType="button"
          className="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </div>
    </nav>
  </header>
);

export default NavBar;
