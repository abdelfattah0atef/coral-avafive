import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className="p-5 width-full">
      <nav className="flex items-center justify-between width-full">
        <div className="flex items-center justify-between width-1/2 space-x-8">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={108} height={22} />
          </Link>

          <div className="flex items-center justify-between space-x-5 color-[#171520] text-sm">
            <Link href="/">Handbags</Link>
            <Link href="/">Watches</Link>
            <Link href="/">Skincare</Link>
            <Link href="/">Jewellery</Link>
            <Link href="/">Apperals</Link>
          </div>
        </div>
        <div className="flex items-center justify-between width-1/2 space-x-8">
          <div className="relative">
            <input
              placeholder="Search for products or brands..."
              className="p-2 pl-8 bg-[#F1F1F1] text-sm w-96 rounded"
            />
            <Image
              src="/search.png"
              alt="search"
              width={18}
              height={18}
              className="absolute left-2 top-2"
            />
          </div>
          <div className="flex items-center justify-between space-x-3">
            <Link href="/">
              <p className="text-xl">
                <AiOutlineHeart />
              </p>
            </Link>
            <Link href="/">
              <p className="text-xl">
                <AiOutlineUser />
              </p>
            </Link>
            <Link href="/">
              <p className="text-xl">
                <BsHandbag />
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
