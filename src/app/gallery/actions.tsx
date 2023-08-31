"use server"
import cloudinary from 'cloudinary'


export async function MarkAsFavouriteAction(
    publicid: string,
    isFavourite: boolean,
) {
    if (isFavourite) {
        await cloudinary.v2.uploader.add_tag('favourites', [publicid])
    } else {
        await cloudinary.v2.uploader.remove_tag('favourites', [publicid])
    }

}
