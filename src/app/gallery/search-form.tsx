"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function SearchForm({ initialSearch }: { initialSearch: string }) {
    const [tagName, setTagName] = useState(initialSearch ?? "")
    const router = useRouter()

    useEffect(() => {
        setTagName(initialSearch)
    }, [initialSearch])
    return (

        <form onSubmit={(e) => {
            e.preventDefault();
            router.replace(`gallery?search=${encodeURIComponent(tagName)}`);
            router.replace
        }
        }>
            <Label htmlFor="tag-name" className="text-right">
                Search By Tag
            </Label>
            <div className="flex gap-4">
                <Input
                    onChange={(e) => setTagName(e.currentTarget.value)}
                    id="tag-name" value={tagName} className="col-span-3" />
                <Button>Search</Button>
            </div>
        </form>

    )
}