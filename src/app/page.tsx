import { HomeProps } from './api/lambda/route';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default async function Home() {
    const response = await fetch('http://localhost:3000/api/lambda');
    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    const homeData: HomeProps = await response.json();

    return (
        <div className='flex flex-row items-center justify-between px-5 py-5'>
            <div className='flex flex-col justify-center'>
                <div>
                    <h1 className='font-noto font-bold text-slate-950 text-4xl'>{homeData.title}</h1>
                    <h2 className='font-noto text-3xl'>{homeData.subTitle}</h2>
                </div>
                <div className='mt-5'>
                    <Button asChild>
                        <Link href={homeData.buttonUrl}>{homeData.buttonLabel}</Link>
                    </Button>
                </div>
            </div>

            <div>
                <Card>
                    <CardContent className='flex items-center justify-between'>
                        <Image src={homeData.imageUrl} height={400} width={400} alt={homeData.imageAlt} className='object-cover object-center' />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
