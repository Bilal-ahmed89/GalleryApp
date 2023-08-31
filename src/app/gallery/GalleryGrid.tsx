"use client"
import CloudinaryImage from './cloudinary-image';
import ImageGrid from './../../components/ImageGrid';
import { SearchResult } from '@/app/gallery/page';




function GalleryGrid({ images }: { images: SearchResult }) {


    return (
        <ImageGrid
            images={images}
            getImage={(imagedata: SearchResult[]) => {
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

export default GalleryGrid;
