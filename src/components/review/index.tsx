import { ReviewFormFields } from './_components/review-form';
import ReviewList from './_components/review-list';

export default function ReviewPage() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex items-center justify-between gap-8'>
                <ReviewFormFields />
                <ReviewList />
            </div>
        </div>
    );
}
