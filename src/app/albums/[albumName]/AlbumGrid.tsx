"use client"

import CloudinaryImage from '@/app/gallery/cloudinary-image';
import { SearchResult } from '@/app/gallery/page';
import ImageGrid from '@/components/ImageGrid';




function AlbumGrid({ images }: { images: SearchResult[] }) {


    return (
        <ImageGrid
            images={images}
            getImage={(imagedata: SearchResult) => {
                return (
                    <CloudinaryImage
                        key={imagedata.public_id}
                        imagedata={imagedata}
                        alt="an image of someting"
                        width="400"
                        height="300"
                    />
                )
            }}
        />

    )
}

export default AlbumGrid;
