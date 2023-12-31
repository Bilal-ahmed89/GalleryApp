import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FolderPlus } from "lucide-react"
import { SearchResult } from '@/app/gallery/page';
import { createFolder } from "./actions"

export function AddToAlbumDialouge({ image, onClose }: { image: SearchResult, onClose: () => void }) {

    const [albumName, setAlbumName] = useState('')
    const [open, setOpen] = useState(false)
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
      }, []);

      
    return (
        <Dialog open={open} onOpenChange={(newOpenState) => {
            setOpen(newOpenState);

            if (!newOpenState) {
                onClose();
            }
        }}>
            <DialogTrigger asChild className="w-48">
                <Button variant="ghost" className="w-full">
                    <FolderPlus className="mr-2 h-4 w-4" />
                    <span>Add to Album</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add to album</DialogTitle>
                    <DialogDescription>
                        type an album you want to move this image into
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Album
                        </Label>
                        <Input
                            onChange={(e) => setAlbumName(e.currentTarget.value)}
                            id="album-name" value={albumName} className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        onClick={async () => {
                            onClose()
                            await createFolder(albumName, image)
                            setOpen(false)
                            if (!isMounted) {
                                return null;
                              }
                        }}
                        type="submit">Add to Album</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
