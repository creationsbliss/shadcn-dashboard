import { LogOutIcon, MoonIcon, SettingsIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      {/* left side */}
      <div>left side</div>

      {/* right side */}
      <div className="gap-4 flex items-center">
        <Link href="/"> Dashboard </Link>
        <MoonIcon />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/leerob.png" alt="mr-pic" />
              <AvatarFallback>MR</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserIcon className="h-[1.2rem] w-[1.2rem] mr-2" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon className="h-[1.2rem] w-[1.2rem] mr-2" /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOutIcon className="h-[1.2rem] w-[1.2rem] mr-2" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
