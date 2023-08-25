'use client'

import {CldImage} from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';
import { UploadResult } from '../page';

export default function GalleryPage() {
    return
    <section>
        <div className="">
            <h1 className="text-4xl font-bold">Gallery</h1>
            {/* <CldUploadButton
                onUpload={(result: UploadResult) => {
                    // setImageId(result.info.public_id);
                }}
                uploadPreset="jlru8a3h" /> */}
        </div>
    </section>
}