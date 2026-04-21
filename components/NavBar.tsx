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
import { Menu } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="p-4">
      <Sheet>
        <SheetTrigger asChild className="border-none">
          <Button variant={"ghost"} className="w-10 h-10">
            <Menu className="!w-5.5 !h-5.5"/>
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="mb-1"></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          <div className="flex flex-col gap-8 px-4 py-2">
            <Link href="/" className="block">
              Home
            </Link>
            <Link href="/my-projects" className="block">
              Projects
            </Link>
            <Link href="/contact" className="block">
              Contact
            </Link>
          </div>

        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default NavBar;
