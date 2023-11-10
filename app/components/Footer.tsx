import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

interface FooterProps {
  categories: string[];
}

const Footer = ({ categories }: FooterProps) => {
  const categoriesCount = categories.length;

  const firstRowStart = 0;
  const firstRowEnd = Math.ceil(categoriesCount / 2);

  const secondRowStart = firstRowEnd + 1;
  const secondRowEnd = categoriesCount;
  return (
    <footer className="bg-[#1B4B66] w-full px-16 py-8">
      <div className="w-full pt-3">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          <div className="col-span-2">
            <h4 className="font-semibold text-gray-100">Shop by Category</h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-1">
                <div className="mt-3 grid space-y-3">
                  {categories
                    .slice(firstRowStart, firstRowEnd)
                    .map((category) => (
                      <Link
                        key={category}
                        href={`/products/categories/${category}`}
                        className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 capitalize"
                      >
                        {category}
                      </Link>
                    ))}
                </div>
              </div>
              <div className="col-span-1">
                <div className="mt-3 grid space-y-3">
                  {categories
                    .slice(secondRowStart, secondRowEnd)
                    .map((category) => (
                      <Link
                        key={category}
                        href={`/products/categories/${category}`}
                        className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 capitalize"
                      >
                        {category}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Info</h4>

            <div className="mt-3 grid space-y-3">
              <Link
                href="/about"
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                About us
              </Link>
              <Link
                href="/contact"
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Policy</h4>

            <div className="mt-3 grid space-y-3">
              <Link
                href="#"
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Return policy
              </Link>
              <Link
                href="#"
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Terms of use
              </Link>
              <Link
                href="#"
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Privacy
              </Link>
            </div>
          </div>
          <div className="col-span-2 justify-self-start md:justify-self-end ">
            <div className="flex flex-col justify-end">
              <div className="flex items-center justify-between space-x-2 color-white w-48 mb-6">
                <p className="text-xl text-white">
                  <BsFacebook />
                </p>
                <p className="text-xl text-white">
                  <BsInstagram />
                </p>
                <p className="text-xl text-white">
                  <BsTwitter />
                </p>
                <p className="text-xl text-white">
                  <BsYoutube />
                </p>
              </div>
              <div className="text-md text-white flex items-center space-x-2 mb-6">
                <FaMapMarkerAlt />
                <span>United States</span>
              </div>
              <p className="text-md text-gray-400">
                © 2021 | Cora Leviene All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
