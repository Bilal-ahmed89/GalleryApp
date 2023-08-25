"use client"
import { CldImage } from 'next-cloudinary';
import { Heart } from './../../components/ui/icons/heart';
import {MarkAsFavouriteAction} from './actions';
import {useTransition} from 'react'


function CloudinaryImage(props: any & {publicId : string}) {
    const [transition , startTransition] = useTransition()
    return (
        <div className='relative' >
            <CldImage {...props} />
            <Heart className="absolute top-2 right-2 hover:text-red-500 cursor-pointer" 
            onClick={()=>{
                startTransition(()=>{
                    MarkAsFavouriteAction(props.publicId)
                })
            }}
            />
        </div>
    )

}

export default CloudinaryImage;