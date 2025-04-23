'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface Review {
    id: number;
    username: string;
    message: string;
}

export default function ReviewsList() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('/api/review');

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const data = await response.json();
                setReviews(data);
                setError(null);
            } catch (err) {
                console.error('Failed to fetch reviews:', err);
                setError('Failed to load reviews. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchReviews();
    }, []);

    return (
        <ScrollArea className='h-[40rem] w-[30rem] rounded-md border bg-white'>
            <div className='p-4'>
                <h4 className='mb-4 text-sm font-medium leading-none'>Reviews</h4>
                {isLoading &&
                    Array.from({ length: 3 }).map((_, index) => (
                        <Card className='my-2' key={`loading-${index}`}>
                            <CardHeader>
                                <Skeleton className='h-4 w-32' />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className='h-12 w-full' />
                            </CardContent>
                        </Card>
                    ))}

                {error && (
                    <Card className='my-2 border-red-200 bg-red-50'>
                        <CardContent className='pt-4 text-red-500'>{error}</CardContent>
                    </Card>
                )}

                {!isLoading && !error && reviews.length === 0 && (
                    <Card className='my-2 border-gray-200 bg-gray-50'>
                        <CardContent className='pt-4 text-gray-500'>No reviews available.</CardContent>
                    </Card>
                )}

                {!isLoading &&
                    reviews.map((review) => (
                        <Card className='my-2' key={review.id}>
                            <CardHeader>
                                <CardTitle>{review.username}</CardTitle>
                            </CardHeader>
                            <CardContent>{review.message}</CardContent>
                        </Card>
                    ))}
            </div>
        </ScrollArea>
    );
}
