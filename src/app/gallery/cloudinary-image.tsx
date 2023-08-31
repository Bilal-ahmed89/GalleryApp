"use client"
import { CldImage, CldImageProps, CldOgImageProps } from 'next-cloudinary';
import { Heart } from './../../components/ui/icons/heart';
import { MarkAsFavouriteAction } from './actions';
import { useTransition } from 'react'
import { SearchResult } from './page';
import { FullHeart } from '@/components/ui/icons/FullHeart';
import { useState } from 'react';


function CloudinaryImage(props: {imagedata : SearchResult; path : string} & Omit<CldImageProps , "src">) {

    const [transition, startTransition] = useTransition()
     const {imagedata } = props

    const [isFavourited, setIsFavourited] =  useState(imagedata.tags.includes('favourites')) 


    return (
        <div className='relative' >
            <CldImage {...props} src={imagedata.public_id} />
            {
                isFavourited  ? 
                <FullHeart className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"
                onClick={() => {
                    startTransition(() => {
                        MarkAsFavouriteAction(imagedata.public_id, false, props.path)
                    })
                }}
            />
                :

                    <Heart className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
                        onClick={() => {
                            startTransition(() => {
                                MarkAsFavouriteAction(imagedata.public_id, true,props.path)
                            })
                        }}
                    />
            }
        </div>
    )

}

export default CloudinaryImage;
