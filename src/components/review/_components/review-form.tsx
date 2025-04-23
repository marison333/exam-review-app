'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const formSchema = z.object({
    username: z.string().min(3, { message: 'Username must be at least 3 characters.' }).max(50, { message: 'Username must be less than 50 characters.' }),
    message: z.string().min(6, { message: 'Message must be at least 6 characters.' }).max(1000, { message: 'Message must be less than 1000 characters.' })
});

type FormSchemaType = z.infer<typeof formSchema>;

interface ReviewFormFieldsProps {
    onSuccessfulSubmit?: (review: any) => void;
}

export function ReviewFormFields({ onSuccessfulSubmit }: ReviewFormFieldsProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            message: ''
        }
    });

    async function onSubmit(values: FormSchemaType) {
        setIsSubmitting(true);
        setSubmitSuccess(false);
        setSubmitError(null);

        try {
            const response = await fetch('/api/review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit review');
            }

            setSubmitSuccess(true);

            form.reset();

            if (onSuccessfulSubmit) {
                onSuccessfulSubmit(data);
            }

            toast.success('Review submitted successfully!', {
                description: 'Thank you for your feedback!'
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitError(error instanceof Error ? error.message : 'An unknown error occurred');

            toast.error('Failed to submit review', {
                description: error instanceof Error ? error.message : 'An unknown error occurred'
            });
        } finally {
            setIsSubmitting(false);

            if (submitSuccess) {
                setTimeout(() => setSubmitSuccess(false), 3000);
            }
        }
    }

    return (
        <Card className='w-full max-w-lg mx-auto'>
            <CardHeader>
                <CardTitle>Leave a Review</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                        <FormField
                            control={form.control}
                            name='username'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Your name' {...field} disabled={isSubmitting} className='w-full' />
                                    </FormControl>
                                    <FormDescription>This is your public display name.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='message'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Review</FormLabel>
                                    <FormControl>
                                        <Textarea className='min-h-32 resize-none' placeholder='Write your review here...' {...field} disabled={isSubmitting} />
                                    </FormControl>
                                    <FormDescription className='flex justify-between'>
                                        <span>Share your honest feedback</span>
                                        <span className='text-muted-foreground'>{field.value.length}/1000</span>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {submitError && <div className='text-red-500 text-sm p-2 bg-red-50 border border-red-200 rounded'>{submitError}</div>}

                        <div className='flex justify-end'>
                            <Button type='submit' disabled={isSubmitting} className='min-w-24'>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                        Submitting
                                    </>
                                ) : submitSuccess ? (
                                    <>
                                        <CheckCircle className='mr-2 h-4 w-4' />
                                        Submitted!
                                    </>
                                ) : (
                                    'Submit Review'
                                )}
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
