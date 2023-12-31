"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface PaginationProps {
  path: string;
  numberOfPages: number;
  total: number;
  skip: string | string[];
  limit: string | string[];
}

const disabledClasses =
  "bg-gray-200 cursor-not-allowed hover:bg-gray-200 hover:text-gray-500";

const Pagination = ({
  path,
  numberOfPages,
  total,
  skip,
  limit,
}: PaginationProps) => {
  const router = useRouter();
  const isPrevBtnDisabled = Number(skip) === 0;
  const isNextBtnDisabled = Number(skip) >= total - Number(limit);
  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-10 text-base">
        <button
          disabled={isPrevBtnDisabled}
          onClick={() =>
            router.push(
              `/${path}?skip=${Number(skip) - Number(limit)}&limit=${limit}`
            )
          }
          className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer ${
            isPrevBtnDisabled && disabledClasses
          }`}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </button>
        {Array.from(Array(numberOfPages).keys()).map((index: number) => (
          <button
            key={`pagination-${index}`}
            onClick={() =>
              router.push(
                `/${path}?skip=${index * Number(limit)}&limit=${limit}`
              )
            }
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={isNextBtnDisabled}
          onClick={() =>
            router.push(
              `/${path}?skip=${Number(skip) + Number(limit)}&limit=${limit}`
            )
          }
          className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer ${
            isNextBtnDisabled && disabledClasses
          }`}
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
