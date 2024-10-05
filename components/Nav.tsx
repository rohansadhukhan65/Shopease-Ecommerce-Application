import React from "react";
import { CartIcon, UserIcon, WishListIcon } from "./Icons";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <div className="flex justify-between bg-primary text-font-primary py-5 px-6">
      <Link href={'/'} className="font-extrabold text-3xl flex items-center gap-3">ShopEase </Link>
      <div className="hidden sm:block">
        <input className="border w-80 rounded-lg px-2 py-1 outline-none text-black" type="search" placeholder="Search Here......" />
      </div>
      <div className="flex gap-2">
        <Link href={'/login'} className="cursor-pointer"><UserIcon/></Link>
        <span className="cursor-pointer"><CartIcon/></span>
        <span className="cursor-pointer"><WishListIcon/></span>
      </div>
    </div>
  );
};

export default Nav;
