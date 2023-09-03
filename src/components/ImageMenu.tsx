import { FolderPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import Menu from "./ui/icons/Menu"
import { AddToAlbumDialouge } from './AddToAlbumDialouge';
import { SearchResult } from "@/app/gallery/page";
import { useState } from "react";


export function ImageMenu({ image }: { image: SearchResult }) {

  const [open, setOpen] = useState(false)

  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-8 h-8 p-0">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent >
          <DropdownMenuItem asChild onClick={() => setOpen(false)}>
            <AddToAlbumDialouge image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
