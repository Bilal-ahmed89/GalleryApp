import { FolderPlus, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import Menu from "./ui/icons/Menu"
import { AddToAlbumDialouge } from './AddToAlbumDialouge';
import { SearchResult } from "@/app/gallery/page";
import { useState } from "react";
import Link from "next/link";


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
          <DropdownMenuItem asChild onClick={() => setOpen(false)}>
          <Button asChild variant="ghost" className="cursor-pointer flex justify-start">
            <Link href={`/edit?publicid=${encodeURIComponent(image.public_id)}`} className="pl-4">
              <Pencil className="mr-2 w-4 h-4 "/>
              Edit
            </Link>
            </Button>
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
