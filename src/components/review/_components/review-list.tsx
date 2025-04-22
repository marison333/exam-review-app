'use client';

import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function ReviewsList() {
    // Placeholder reviews data
    const [reviews] = useState([
        {
            id: 1,
            username: 'JaneDoe42',
            message: 'Absolutely loved it! The attention to detail was remarkable, and the experience exceeded all my expectations.',
            date: 'April 18, 2025'
        },
        {
            id: 2,
            username: 'TechGuru99',
            message: "Good value for money, but there's definitely room for improvement in terms of user experience.",
            date: 'April 15, 2025'
        },
        {
            id: 3,
            username: 'BookWorm123',
            message: "I was skeptical at first, but this turned out to be one of the best purchases I've made all year!",
            date: 'April 10, 2025'
        },
        {
            id: 4,
            username: 'MountainHiker',
            message: "The quality wasn't what I expected based on the description. Slightly disappointed.",
            date: 'April 5, 2025'
        },
        {
            id: 5,
            username: 'CoffeeEnthusiast',
            message: 'Excellent service and prompt delivery. Would definitely recommend to friends and family.',
            date: 'March 29, 2025'
        },
        {
            id: 6,
            username: 'GamerPro',
            message: "It's decent, but I've seen better. Three stars from me.",
            date: 'March 25, 2025'
        },
        {
            id: 7,
            username: 'FitnessFanatic',
            message: 'Perfect for my needs! Exactly what I was looking for and works exactly as described.',
            date: 'March 20, 2025'
        }
    ]);

    return (
        <ScrollArea className='h-[40rem] w-[30rem] rounded-md border bg-white'>
            <div className='p-4'>
                <h4 className='mb-4 text-sm font-medium leading-none'>Reviews</h4>
                {reviews.map((review) => (
                    <>
                        <Card className="my-2" key={review.id}>
                            <CardHeader>
                                <CardTitle>{review.username}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {review.message}
                            </CardContent>
                            <CardFooter>
                                {review.date}
                            </CardFooter>
                        </Card>
                    </>
                ))}
            </div>
        </ScrollArea>
    );
}
