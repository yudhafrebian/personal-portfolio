import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around py-4 shadow dark:border-b ">
         <div className="text-xl dark:text-white font-bold text-[#1F2937]">
            <p>Ananda Yudha</p>
         </div>
         <div className="flex gap-8 text-muted-foreground">
            <Link href="/#home">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/#services">Services</Link>
            <Link href="/projects">Portfolio</Link>
            <Link href="/projects">Contact</Link>
         </div>
         <div>
            <ModeToggle />
         </div>
    </nav>
  )
};

export default Navbar;