"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Home, Briefcase, User, File } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="border-none">
          <Button variant={"ghost"} className="w-10 h-10">
            <Menu className="!w-5.5 !h-5.5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="mb-1"></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          <div className="flex flex-col gap-8 px-4 py-2">
            <Link
              href="/"
              className="flex items-center gap-2.5"
              onClick={() => setIsOpen(false)}
            >
              <Home className="w-5 h-5"></Home>Home
            </Link>
            <Link
              href="/my-projects"
              className="flex items-center gap-2.5"
              onClick={() => setIsOpen(false)}
            >
              <Briefcase className="w-5 h-5"></Briefcase>Projects
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2.5"
              onClick={() => setIsOpen(false)}
            >
              <User className="w-5 h-5"></User>Contact
            </Link>

            <a
              href="/Yousif Maqdasi CV.png"
              target="_blank"
              className="flex items-center gap-2.5"
            >
              <File className="w-5 h-5"></File>Resume / CV
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default NavBar;
