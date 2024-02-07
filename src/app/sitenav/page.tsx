"use client";

import React, { useEffect } from "react";
import { redirect, usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { routConfig } from "./routeConfig";

export default function Sitenav() {
  const pathName = usePathname();
  const { data, status } = useSession();
  const router = useRouter();

  const handleLogout = () => {
    signOut();
    router.push("/");
  };

  const handleLogin = () => {
    router.push("/dashboard");
  };

  if (!data && status === "loading") {
    return null;
  }
  if (!data && status === "unauthenticated") {
    router.push("/");
  }
  if (pathName === "/" && status === "authenticated") {
    router.push("/dashboard");
  }

  return (
    <header className="bg-orange-800 items-center justify-between shadow-grey-200 shadow-2xl shadow-gray-400">
      <div className="justify-evenly container m-auto flex">
        {routConfig.map((item, ind) => {
          const isAcctive = pathName.startsWith(item.href);
          return (
            <Link
              className={
                isAcctive
                  ? "text-bold text-3xl text-white px-10 py-5 bg-orange-500  hover:bg-orange-500 hover:px-10 hover:py-5 hover:text-white"
                  : "text-bold text-3xl text-white px-10 py-5 hover:bg-orange-500 hover:px-10 hover:py-5 hover:text-white"
              }
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          );
        })}
        {data && status === "authenticated" ? (
          <Link
            passHref
            className="text-bold text-3xl text-white px-10 py-5 hover:bg-orange-500 hover:px-10 hover:py-5 hover:text-white"
            href={"/"}
          >
            <span onClick={handleLogout}>Logout</span>
          </Link>
        ) : (
          <Link
            className="text-bold text-3xl text-white px-10 py-5 hover:bg-orange-500 hover:px-10 hover:py-5 hover:text-white"
            passHref
            href={"/"}
          >
            <span onClick={handleLogin}>Login</span>
          </Link>
        )}
      </div>
    </header>
  );
}
