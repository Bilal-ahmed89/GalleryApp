
import { ForceRefresh } from '@/components/ForceRefresh';
import cloudinary from 'cloudinary'
import { CldImage } from 'next-cloudinary';
import CloudinaryImage from '../gallery/cloudinary-image';
import { SearchResult } from '../gallery/page';


async function FavouritesPage() {

    const results = await cloudinary.v2.search
        .expression('resource_type:image AND tags=favourites')
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(30)
        .execute() as { resources: SearchResult[] }


    return (
        <section>
            <ForceRefresh />
            <div className='flex flex-col gap-8'>
                <div className='flex justify-between'>
                    <h1 className='text-4xl font-bold'>Favourite Images</h1>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        results.resources.map((result) => (
                            <CloudinaryImage
                                path='/favourites'
                                key={result.public_id}
                                imagedata={result}
                                alt="an image of someting"
                                width="400"
                                height="300"
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FavouritesPage;
