"use client"
import { CldImage, CldImageProps, CldOgImageProps } from 'next-cloudinary';
import { Heart } from './../../components/ui/icons/heart';
import { MarkAsFavouriteAction } from './actions';
import { useTransition } from 'react'
import { FullHeart } from '@/components/ui/icons/FullHeart';
import { useState } from 'react';
import { SearchResult } from './page';
import { ImageMenu } from './../../components/ImageMenu';


function CloudinaryImage(
    props : 
    {
        imagedata: SearchResult;
        onUnheart?: (unheartedResource : SearchResult) => void;
    }
        & Omit<CldImageProps, "src">) {

    const [transition, startTransition] = useTransition()
    const { imagedata , onUnheart} = props

    const [isFavourited, setIsFavourited] = useState(imagedata.tags.includes('favourites'))


    return (
        <div className='relative' >
            <CldImage {...props} src={imagedata.public_id} />
            {
                isFavourited ?
                    <FullHeart className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer"
                        onClick={() => {
                            onUnheart?.(imagedata);
                            setIsFavourited(false)
                            startTransition(() => {
                                MarkAsFavouriteAction(imagedata.public_id, false)
                            })
                        }}
                    />
                    :

                    <Heart className="absolute top-2 left-2 hover:text-red-500 cursor-pointer"
                        onClick={() => {
                            setIsFavourited(true)
                            startTransition(() => {
                                MarkAsFavouriteAction(imagedata.public_id, true)
                            })
                        }}
                    />
            }
            <ImageMenu image={imagedata} />
        </div>
    )

}

export default CloudinaryImage;
