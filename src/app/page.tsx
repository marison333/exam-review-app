import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function Home() {
    return (
        <div className='flex flex-row items-center justify-between px-5 py-5'>
            <div className='flex flex-col justify-center'>
                <div>
                    <h1 className='font-noto font-bold text-4xl'>Quantum Motors</h1>
                    <h1 className='font-noto font-bold text-4xl'>Luxury and Performance</h1>
                    <h1 className='font-noto font-bold text-4xl'>vehicles</h1>
                </div>
                <div className='mt-5'>
                    <Button asChild>
                        <Link href='/form'>Continue</Link>
                    </Button>
                </div>
            </div>

            <div>
                <Card>
                    <CardContent className='flex items-center justify-between pt-6'>
                        <Image
                            src='/yellow-porsche.jpg'
                            height={400}
                            width={400}
                            alt='Yellow Porsche on the side of the road'
                            className='object-cover object-center'
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
