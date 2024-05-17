'use client'
  import { Bell, BellIcon } from "lucide-react"
  import { Button } from "./button"
  import { Command, CommandInput } from "./command"
  import { Badge } from "@/components/ui/badge"

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useState } from "react"
  
  

export default function Header() {

    const [notifications, setNotifications ] = useState([
        {
            text:"Happy NewYear Bonuses",
            date:"03-01-2025",
            read: false
        },
        {
            text:"DeadLine for Internships approaching",
            date:"05-01-2025",
            read: true
        },
        {
            text:"`Sweet Poison` W.M Stephen's Message to our graduates",
            date:"24-11-2024",
            read: false
        },
        {
            text:"Music Gala Awards 2024",
            date:"12-12-2024",
            read: false
        },
        {
            text:"`No More Riots`- Teachers resume work",
            date:"03-01-2025",
            read: true
        },
        {
            text:"Happy International Press Day",
            date:"03-05-2024",
            read: false
        }
    ])

    const unreadCount = notifications.filter((item: any) => item.read === false).length;
  return (
    <div className="grid w-[calc(100vw-300px)] ml-[300px] p-4 grid-cols-2 border-b">
        <div>
        <Command>
            <CommandInput placeholder="Type a command or search..."  className="shadow-none outline-none"/>
        </Command>

        </div>

        <div className="flex items-center justify-end">
            
            <DropdownMenu>
            <DropdownMenuTrigger className="relative">
                <Button variant="outline" size="icon" className="rounded-full relative">
                    <BellIcon className="h-4 w-4"/>
                </Button>
                {
                    <div className={`text-white h-4 w-4 flex items-center justify-center text-[10px] rounded-full absolute right-0 top-0 ${notifications.find((x: any) => x.read === false)? 'bg-red-500': 'bg-green-500'}`}>
                        {unreadCount > 0 && unreadCount}
                    </div>
                        
                }
                
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {
                    notifications.map((note)=> (
                        <div className="flex flex-col space-y-2 mb-8 relative">
                            <p>{note.text}</p>
                            <small>{note.date}</small>
                            {note.read? <Badge variant="secondary" className="absolute right-1 top-1 bg-green-500 w-fit text-white">Read</Badge>:<Badge variant="default" className=" absolute right-1 top-1 bg-red-500 w-fit text-white">Unread</Badge>
}
                        </div>
                        
                    ))
                }
                
            </DropdownMenuContent>
            </DropdownMenu>

        </div>
        
      
    </div>
  )
}
