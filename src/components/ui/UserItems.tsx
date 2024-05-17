'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function UserItems() {
  return (
    <div className="flex flex-row shadow-sm p-3 rounded-sm space-x-5">
        <div>
        <Avatar>
           <AvatarImage src="https://github.com/shadcn.png" />
           <AvatarFallback>MW</AvatarFallback>
        </Avatar>
        </div>
        <div>
        <p className="font-bold">Mwangi Wahome</p>
        <p className="font-light text-[14px]">wahome70@gmail.com</p>
        </div>
        
        
        

        
      
    </div>
  )
}
