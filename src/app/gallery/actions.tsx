"use server"
import cloudinary from 'cloudinary'
import { revalidatePath } from 'next/cache'


export async function MarkAsFavouriteAction(
    publicid: string,
    isFavourite: boolean,
    path : string
) {
    if (isFavourite) {
        await cloudinary.v2.uploader.add_tag('favourites', [publicid])
    } else {
        await cloudinary.v2.uploader.remove_tag('favourites', [publicid])
    }
    await new Promise((resolve) => setTimeout(resolve , 1500))
    revalidatePath(path)

}
