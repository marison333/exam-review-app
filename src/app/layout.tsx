import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import Navigation from '@/components/navigation';

export const metadata: Metadata = {
    title: {
        template: '%s - Reviewer App',
        default: 'Reviewer App'
    },
    description: 'A simple reviewer app built with Next.js and TypeScript.',
    keywords: 'reviewer, app, nextjs, typescript',
    authors: [
        {
            name: 'Marison',
            url: 'github.com/marison333'
        }
    ],
    creator: 'Marison'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className='bg-gradient-to-bl from-indigo-500 to-violet-800 min-h-screen'>
                <Navigation />
                <div className='container max-w-6xl mx-auto'>
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}
