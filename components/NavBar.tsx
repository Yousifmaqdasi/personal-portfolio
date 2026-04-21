"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="p-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>YOUSIF MAQDASI</SheetTitle>
            <SheetDescription>Fullstack Developer Portfolio</SheetDescription>
          </SheetHeader>

          <div className="flex flex-col gap-8 px-4 py-2">
            <Link href="/" className="block">
              Home
            </Link>
            <Link href="/projects" className="block">
              Projects
            </Link>
            <Link href="/skills" className="block">
              Skills
            </Link>
            <Link href="/about" className="block">
              About
            </Link>
            <Link href="/contact" className="block">
              Contact
            </Link>
          </div>


          // ADD LATER
            {/* <div className="px-4 pb-4">
              <p className="text-sm mb-3 text-muted-foreground">
                Connect with me
              </p>

              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/Yousifmaqdasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 hover:opacity-80 transition"
                >
                  <FaGithub size={26} />
                  <span className="text-xs">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/yousif-maqdasi-731578382/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 hover:opacity-80 transition"
                >
                  <FaLinkedin size={26} />
                  <span className="text-xs">LinkedIn</span>
                </a>
              </div>
            </div> */}

        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default NavBar;
