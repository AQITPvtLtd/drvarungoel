import React from 'react';
import TreatmentData from './TreatmentData';
import data from '@/data/treatment';

// ✅ Dynamic Metadata
export async function generateMetadata({ params }) {
    const content = data.find((item) => item.url === params.url);

    if (!content) {
        return {
            title: "Treatment Not Found | Dr. Varun Goel",
            description: "The requested treatment page does not exist or may have been moved.",
        };
    }

    return {
        title: content.meta_title,
        description: content.meta_desc,
        keywords: content.keyword,
    };
}

// ✅ Page component with capital P
const Page = ({ params }) => {
    const url = params.url;
    return (
        <div>
            <TreatmentData url={url} />
        </div>
    );
};

export default Page;
