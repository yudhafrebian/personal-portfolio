"use client";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const {resolvedTheme} = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  },[])

  const logoSrc = resolvedTheme === "dark" ? "/logo-light.png" : "/logo-dark.png";
  return (
    <nav className="flex items-center justify-around py-4 shadow dark:border-b ">
      <div className="text-xl dark:text-white font-bold text-[#1F2937] flex items-center gap-2">
        <div>
          {mounted && <Image src={logoSrc} alt="logo" width={50} height={50} />}
        </div>
        <p>Ananda Yudha</p>
      </div>
      <div className="hidden md:flex gap-8 text-muted-foreground">
        <Link href="/#home">Home</Link>
        <Link href="/#about">About</Link>
        <Link href="/#services">Services</Link>
        <Link href="/#portfolio">Portfolio</Link>
        <Link href="/#contact">Contact</Link>
      </div>
      <div className="hidden md:block">
        <ModeToggle />
      </div>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size={"icon"}>
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="flex flex-col gap-4 w-screen text-muted-foreground px-4">
              <Link href="/#home">Home</Link>
              <Link href="/#about">About</Link>
              <Link href="/#services">Services</Link>
              <Link href="/#portfolio">Portfolio</Link>
              <Link href="/#contact">Contact</Link>
            </div>
            <DropdownMenuSeparator className="my-4"/>
            <div className="px-4 mb-2">
              <ModeToggle />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
