"use client";

import { useAuth } from "./context/auth-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export function UserMenu() {
  const { user, userDisplayName, logout } = useAuth();
  const router = useRouter();

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none cursor-pointer">
        <div className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-lg transition-colors">
            <Avatar className="w-10 h-10 border border-gray-200">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{userDisplayName.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            
            {/* Display the Name here */}
            <div className="text-left hidden md:block">
                <p className="text-sm font-semibold">{userDisplayName}</p>
                <p className="text-xs text-muted-foreground">{user.role}</p>
            </div>
        </div>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/profile")}>My Profile Account</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout} className="text-red-500 cursor-pointer">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}