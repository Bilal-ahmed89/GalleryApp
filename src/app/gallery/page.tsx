
import UploadButton from './upload-button';
import cloudinary from 'cloudinary'
import { CldImage } from 'next-cloudinary';
import CloudinaryImage from './cloudinary-image';
import ImageGrid from './../../components/ImageGrid';
import GalleryGrid from './GalleryGrid';
import { SearchForm } from './search-form';

export type SearchResult = {
    public_id: string,
    tags: string[]
};


async function GalleryPage({
    searchParams: { search },
  }: {
    searchParams: {
      search: string;
    };
  }) {

    const results = (await cloudinary.v2.search
        .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(20)
        .execute()) as { resources: SearchResult[] }




    return (
        <section>

            <div className='flex flex-col gap-8'>
                <div className='flex justify-between'>
                    <h1 className='text-4xl font-bold'>Gallery</h1>
                    <UploadButton />
                </div>
                <SearchForm initialSearch={search} />

                <GalleryGrid images={results.resources} />

            </div>
        </section>
    )
}

export default GalleryPage;
