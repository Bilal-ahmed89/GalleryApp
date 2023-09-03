"use client"
import { Button } from '@/components/ui/button';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';
import { Input } from '@/components/ui/input';


export default function ({ searchParams: { publicid } }: { searchParams: { publicid: string } }) {

    const [transformation, setTransformation] = useState<
        undefined | "generative-fill" | "blur" | "removeBackground" | "pixelate" | "crop"
    >();

    const [prompt, setPrompt] = useState("")


    return (
        <section>
            <div className='flex flex-col gap-8'>
                <div className='flex justify-between'>
                    <h1 className='text-4xl font-bold'>Edit {publicid}</h1>
                </div>
                <div className="flex gap-4">
                    <Button variant="ghost" onClick={() => setTransformation(undefined)}>Clear All</Button>
                    <div className="flex flex-col gap-4">
                        <Button onClick={() => setTransformation('generative-fill')}>
                            Apply Generative Fill
                        </Button>
                        <Input value={prompt} onChange={e => setPrompt(e.currentTarget.value)} />
                    </div>
                    
                    <Button onClick={() => setTransformation('blur')}>Apply Blur</Button>
                    <Button onClick={() => setTransformation('removeBackground')}>Apply Background Removal</Button>
                    <Button onClick={() => setTransformation('pixelate')}>Apply pixelate</Button>
                    <Button onClick={() => setTransformation('crop')}>Apply crop</Button>


                </div>

                <div className="grid grid-cols-2 gap-12">
                    <CldImage
                        src={publicid}
                        width="300"
                        height="200"
                        alt='Some Image'
                    />

                    {
                        transformation === 'generative-fill' &&
                        <CldImage
                            src={publicid}
                            width="300"
                            height="200"
                            alt='Some Image'
                            crop='pad'
                            fillBackground
                        />
                    }
                    {
                        transformation === 'blur' &&
                        <CldImage
                            src={publicid}
                            width="300"
                            height="200"
                            blur="800"
                            alt='Some Image'

                        />
                    }
                    {
                        transformation === 'removeBackground' &&
                        <CldImage
                            src={publicid}
                            width="300"
                            height="200"
                            removeBackground
                            alt='Some Image'

                        />
                    }
                    {
                        transformation === 'pixelate' &&
                        <CldImage
                            src={publicid}
                            width="300"
                            height="200"
                            pixelate
                            alt='Some Image'
                        />
                    }
                    {
                        transformation === 'crop' &&
                        <CldImage
                            src={publicid}
                            width="300"
                            height="200"
                            crop="thumb"
                            gravity="auto"
                            alt='Some Image'
                        />
                    }
                </div>
            </div>
        </section>
    )
}  