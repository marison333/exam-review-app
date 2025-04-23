import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const reviews = await prisma.review.findMany();

        return NextResponse.json(reviews);
    } catch (error) {
        console.error('Failed to fetch reviews:', error);
        return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { username, message } = body;

        if (!username || !message) {
            return NextResponse.json({ error: 'Username and message are required' }, { status: 400 });
        }

        const review = await prisma.review.create({
            data: {
                username,
                message
            }
        });

        return NextResponse.json(review, { status: 201 });
    } catch (error) {
        console.error('Failed to create review:', error);
        return NextResponse.json({ error: 'Failed to create review' }, { status: 500 });
    }
}
