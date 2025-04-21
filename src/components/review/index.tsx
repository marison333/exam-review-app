import { Card, CardContent } from '@/components/ui/card';
import { ReviewFormFields } from './_components/review-form';

export default function ReviewPage() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <Card className='flex items-center justify-center'>
                <CardContent className='pt-6'>
                    <ReviewFormFields />
                </CardContent>
            </Card>
        </div>
    );
}
