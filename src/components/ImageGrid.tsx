
import CloudinaryImage from "@/app/gallery/cloudinary-image";
import { SearchResult } from "@/app/gallery/page"
import { ReactNode } from "react";

const MAX_COLUMS = 4;


function ImageGrid({ images, getImage }: { images: SearchResult[]; getImage: (imagedata : SearchResult) => ReactNode }) {


    function getColumns( colIndex: number) {
        if (!images) {
            
            return [];
        }
       
        return images.filter((resource, idx) => idx % MAX_COLUMS === colIndex )
    }

    return (
        <div className='grid grid-cols-4 gap-4'>
            {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map((column, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                    {
                        column.map(getImage)
                    
                    }
                </div>
            ))
            }

        </div>

    )
}

export default ImageGrid