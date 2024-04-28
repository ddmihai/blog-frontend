import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Copy, Delete } from "lucide-react"

import { Button } from "@/components/ui/button"



const ModalWithAddedImages = ({ imagesList }: {
    imagesList: { _id: string, images: string[] } | undefined
}) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Available images</Button>
            </DialogTrigger>
            <DialogContent className="max-w-xl">
                <DialogHeader>
                    <DialogTitle>List of available images for using on this blog post</DialogTitle>
                    <DialogDescription>
                        Please chose the image link, and implement it into the markdown blog. For the unused images, please remove them in order to save space
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        {
                            imagesList?.images.map((image, index) => (
                                <Input
                                    key={index}
                                    id="link"
                                    defaultValue={image}
                                    readOnly
                                />
                            ))
                        }
                    </div>
                    <Button type="submit" size="sm" className="px-3">
                        <span className="sr-only">Copy</span>
                        <Copy className="h-4 w-4" />
                    </Button>
                    <Button type="submit" size="sm" className="px-3">
                        <span className="sr-only">Delete</span>
                        <Delete className="h-4 w-4" />
                    </Button>


                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ModalWithAddedImages
