"use server"
import cloudinary from 'cloudinary'
import { revalidatePath } from 'next/cache'


export async function MarkAsFavouriteAction(publicid : string){

    await cloudinary.v2.uploader.add_tag('favourite', [publicid])
    revalidatePath('/gallery')
    
}
