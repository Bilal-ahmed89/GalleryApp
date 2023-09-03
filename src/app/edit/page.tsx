"use client"
import { Button } from '@/components/ui/button';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { saveAs } from 'file-saver';


export default function ({ searchParams: { publicid } }: { searchParams: { publicid: string } }) {

    const [transformation, setTransformation] = useState<
        undefined | "generative-fill" | "blur" | "removeBackground" | "pixelate" | "crop"
    >();

    const [prompt, setPrompt] = useState("")
    const [pendingPrompt, setPendingPrompt] = useState("");

    const handleDownload = (publicid: string, fileName: string) => {
        fetch(publicid)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then((blob) => {
                saveAs(blob, fileName);
            })
            .catch((error) => {
                console.error('Error downloading image:', error);
            });
    };




    return (
        <section>
            <div className='flex flex-col gap-8'>
                <div className='flex justify-between'>
                    <h1 className='text-4xl font-bold'>Edit {publicid}</h1>
                </div>
                <div className="flex gap-4">
                    <Button variant="ghost" onClick={() => setTransformation(undefined)}>Clear All</Button>
                    <div className="flex flex-col gap-4">
                        <Button onClick={() => {
                            setTransformation('generative-fill')
                            setPrompt(pendingPrompt)
                        }}>
                            Generative Fill
                        </Button>
                        <Label>Prompt</Label>
                        <Input value={pendingPrompt} onChange={e => setPendingPrompt(e.currentTarget.value)} />
                    </div>
                    <Button onClick={() => setTransformation('blur')}>Blur</Button>
                    <Button onClick={() => setTransformation('removeBackground')}>Remove background</Button>
                    <Button onClick={() => setTransformation('pixelate')}>Pixelate</Button>
                    <Button onClick={() => setTransformation('crop')}>Crop</Button>


                </div>

                <div className="grid grid-cols-2 gap-12">
                    <CldImage
                        src={publicid}
                        width="1800"
                        height="1400"
                        alt='Some Image'
                    />

                    {
                        transformation === 'generative-fill' && (
                            <div>
                                <CldImage
                                    src={publicid}
                                    width="1800"
                                    height="1400"
                                    alt='Some Image'
                                    draggable
                                    crop='pad'
                                    fillBackground={{
                                        prompt: prompt || "",
                                    }}
                                />
                                <Button className="mt-4" onClick={() => handleDownload(publicid, 'generative-fill-image.jpg')}>
                                    Download Generative Fill Image
                                </Button>
                            </div>
                        )
                    }

                    {
                        transformation === 'blur' &&
                        (
                            <div>
                                <CldImage
                                    src={publicid}
                                    width="1800"
                                    height="1400"
                                    alt='Some Image'
                                    blur="800"
                                />
                                <Button className="mt-4" onClick={() => handleDownload(publicid, 'blur-image.jpg')}>
                                    Download Blur Image
                                </Button>
                            </div>
                        )

                    }
                    {
                        transformation === 'removeBackground' &&
                        (
                            <div>
                                <CldImage
                                    src={publicid}
                                    width="1800"
                                    height="1400"
                                    alt='Some Image'
                                    removeBackground
                                />
                                <Button className="mt-4" onClick={() => handleDownload(publicid, 'remove-background-image.jpg')}>
                                    Download Background removed Image
                                </Button>
                            </div>
                        )
                    }
                    {
                        transformation === 'pixelate' &&
                        (
                            <div>
                                <CldImage
                                    src={publicid}
                                    width="1800"
                                    height="1400"
                                    alt='Some Image'
                                    pixelate
                                />
                                <Button className="mt-4" onClick={() => handleDownload(publicid, 'pixelated-image.jpg')}>
                                    Download Pixelated Image
                                </Button>
                            </div>
                        )
                    }
                    {
                        transformation === 'crop' &&
                        (
                            <div>
                                <CldImage
                                    src={publicid}
                                    width="1800"
                                    height="1400"
                                    alt='Some Image'
                                    crop="thumb"
                                    gravity="auto"
                                />
                                <Button className="mt-4" onClick={() => handleDownload(publicid, 'cropped-image.jpg')}>
                                    Download Cropped Image
                                </Button>
                            </div>
                        )

                    }
                </div>
            </div>
        </section>
    )
}

