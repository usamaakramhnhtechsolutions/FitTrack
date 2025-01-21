import { useState } from "react";
// import { Button } from "./Button";
import { Dumbbell, Menu } from "lucide-react";
import { Link, useResolvedPath } from "react-router-dom";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = useResolvedPath();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Dumbbell className="h-8 w-8 text-[#0066EE]" />
              <span className="ml-2 text-xl font-bold">MyFitnessPal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 lg:flex">
            <div className="flex space-x-4">
              <Link href="/food">
                <button variant="ghost" className={isActive("/food") ? "text-[#0066EE]" : ""}>
                  Food
                </button>
              </Link>
              <Link href="/exercise">
                <button variant="ghost" className={isActive("/exercise") ? "text-[#0066EE]" : ""}>
                  Exercise
                </button>
              </Link>
              <Link href="/apps">
                <button variant="ghost" className={isActive("/apps") ? "text-[#0066EE]" : ""}>
                  Apps
                </button>
              </Link>
              <Link href="/community">
                <button variant="ghost" className={isActive("/community") ? "text-[#0066EE]" : ""}>
                  Community
                </button>
              </Link>
              <Link href="/premium">
                <button variant="ghost" className={isActive("/premium") ? "text-[#0066EE]" : ""}>
                  Premium
                </button>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <button variant="ghost">Log In</button>
              </Link>
              <Link href="/signup">
                <button type="button" className="p-2 rounded text-white bg-[#0066EE] hover:bg-[#0052CC]">Sign Up</button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="py-4 lg:hidden">
            <div className="flex flex-col space-y-2">
              <Link href="/food">
                <button variant="ghost" className="justify-start w-full">
                  Food
                </button>
              </Link>
              <Link href="/exercise">
                <button variant="ghost" className="justify-start w-full">
                  Exercise
                </button>
              </Link>
              <Link href="/apps">
                <button variant="ghost" className="justify-start w-full">
                  Apps
                </button>
              </Link>
              <Link href="/community">
                <button variant="ghost" className="justify-start w-full">
                  Community
                </button>
              </Link>
              <Link href="/premium">
                <button variant="ghost" className="justify-start w-full">
                  Premium
                </button>
              </Link>
              <Link href="/login">
                <button variant="ghost" className="justify-start w-full">
                  Log In
                </button>
              </Link>
              <Link href="/signup">
                <button className="w-full bg-[#0066EE] hover:bg-[#0052CC]">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}