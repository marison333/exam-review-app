import { NextResponse } from 'next/server';

export type ApiResponse = {
    buttonLabel: string;
    buttonUrl: string;
    imageAlt: string;
    imageUrl: string;
    title: string;
    subTitle: string;
};

export async function GET() {
    const res = await fetch(process.env.API_URL as string);
    if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
    }

    const data = await res.json();
    const response = NextResponse.json<ApiResponse>(data);
    return response;
}
