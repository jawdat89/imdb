import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BiSolidInfoCircle } from "react-icons/bi";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 my-6 max-w-6xl sm:mx-auto items-center">
      {/* Left side */}
      <div className="flex">
        <MenuItem title="HOME" address="/" icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" icon={BiSolidInfoCircle} />
      </div>

      {/* Right side */}
      <div className="">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
