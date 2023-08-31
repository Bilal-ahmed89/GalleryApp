"use client"
import { ForceRefresh } from '@/components/ForceRefresh';
import cloudinary from 'cloudinary'
import { CldImage } from 'next-cloudinary';
import CloudinaryImage from '../gallery/cloudinary-image';
import { SearchResult } from '../gallery/page';
import { useState, useEffect } from 'react';
import ImageGrid from '@/components/ImageGrid';



function FavouritesList({ initialResources }: { initialResources: SearchResult[] }) {


    const [resources, setResources] = useState(initialResources)

    useEffect(() => {
        setResources(initialResources)
    }, [initialResources])

    return (
       
            <ImageGrid
                images={resources}

                getImage={(imagedata: SearchResult[]) => {
                    return (
                        <CloudinaryImage
                            key={imagedata.public_id}
                            imagedata={imagedata}
                            alt="an image of someting"
                            width="400"
                            height="300"
                            onUnheart={(unheartedResource) => {
                                setResources((currentResources) =>
                                    currentResources.filter(
                                        (resource) => resource.public_id !== unheartedResource.public_id
                                    )
                                );
                            }}
                        />
                    )
                }}
            />
       
    )
            }

export default FavouritesList
