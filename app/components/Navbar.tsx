"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { Navbar as Nav, Dropdown } from "flowbite-react";
interface NavbarProps {
  categories: string[];
}

const Navbar = ({ categories }: NavbarProps) => {
  const categoriesCount = categories.length;

  const firstRowStart = 0;
  const firstRowEnd = Math.ceil(categoriesCount / 2);

  const secondRowStart = firstRowEnd + 1;
  const secondRowEnd = categoriesCount;
  return (
    <Nav fluid rounded>
      <Nav.Brand href="/">
        <Image src="/logo.png" alt="logo" width={108} height={22} />
      </Nav.Brand>

      <div className="flex md:order-2">
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>

          <div className="flex items-center justify-between width-1/2 space-x-8">
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
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
        </div>
      </div>
      <Nav.Toggle />
      <Nav.Collapse>
        <Nav.Link href="/" active>
          Home
        </Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Dropdown inline label="Categories" style={{ padding: 2 }}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              {categories.slice(firstRowStart, firstRowEnd).map((category) => (
                <Link key={category} href={`/products/categories/${category}`}>
                  <Dropdown.Item key={category}>{category}</Dropdown.Item>
                </Link>
              ))}
            </div>
            <div className="col-span-1">
              {categories
                .slice(secondRowStart, secondRowEnd)
                .map((category) => (
                  <Link
                    key={category}
                    href={`/products/categories/${category}`}
                  >
                    <Dropdown.Item key={category}>{category}</Dropdown.Item>
                  </Link>
                ))}
            </div>
          </div>
        </Dropdown>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Collapse>
    </Nav>
  );
};

export default Navbar;
