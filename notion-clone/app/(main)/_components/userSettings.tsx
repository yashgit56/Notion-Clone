"use client" ;

import { Button } from "@/components/ui/button";
import { 
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator
 } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, LogOut, UserPlus, Settings } from "lucide-react";
import { Item } from "./item";
import { useSearch } from "@/hooks/use-search";
import { SignOutButton } from "@clerk/clerk-react";
import { useSettings } from "@/hooks/use-settings";

const UserSettings = () => {
    const search = useSearch() ;
    const settings = useSettings() ;

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="sm" variant="ghost">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
                className="w-60"
                align="end"
                alignOffset={8} 
                forceMount
            >
                <DropdownMenuItem>
                    <div className="flex items-center ">
                        <UserPlus className="h-4 w-4 mr-4" />
                        Add another account 
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <div className="flex items-center cursor-pointer" onClick={settings.onOpen}>
                        <Settings className="h-4 w-4 mr-2" />
                        My Settings 
                    </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="w-full cursor-pointer ">
                    <SignOutButton>
                        Logout 
                    </SignOutButton>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserSettings ;