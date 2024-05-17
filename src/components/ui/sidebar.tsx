'use client'

import UserItems from "./UserItems"
import { UserRound, Settings, FolderLock, BellDot, Inbox, WalletMinimal, MessageSquare } from "lucide-react"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"
  

export default function Sidebar() {

    const MenuList = [
        {
            group: "General",
            items: [
                {
                    link:"/",
                    icon: <UserRound />,
                    text:"Profile"
                },
                {
                    link:"/",
                    icon: <Inbox />,
                    text:"Inbox"
                },
                {
                    link:"/",
                    icon: <WalletMinimal />,
                    text:"Billing"
                },
                {
                    link:"/",
                    icon: <MessageSquare />,
                    text:"Logs"
                }
            ]
        },
        {
            group:"Settings",
            items: [
                {
                    link:"/",
                    icon: <Settings />,
                    text:"General Settings"
                },
                {
                    link:"/",
                    icon: <FolderLock />,
                    text:"Privacy"
                },
                {
                    link:"/",
                    icon: <BellDot />,
                    text:"Notifications"
                },

            ]
           

        }
    ]
  return (
    <div className="w-[300px] fixed gap-6 border-r-2 min-h-screen p-4 flex flex-col">
        <div>
            <UserItems/>
        </div>
        <div className="grow scroll-m-0">
            <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                {MenuList.map((menu: any, key: number) => (
                    <CommandGroup key={key} heading={menu.group}>
                        {menu.items.map((option: any, optionKey: number) =>(
                            <CommandItem key={optionKey} className="flex gap-6 space-x-4 items-center">{option.icon}{option.text}</CommandItem>
                        ))}
 
                    </CommandGroup>
                ))}
                
                </CommandList>
            </Command>
        </div>
        <div>Settings</div>
    </div>
  )
}
