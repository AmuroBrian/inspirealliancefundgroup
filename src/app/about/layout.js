import React from 'react';

export const metadata = {
    title: 'About Us - Leadership & Company Overview | Inspire Alliance Fund Group',
    description: 'Learn about Inspire Alliance Fund Group leadership, board of directors, operating committee, and our commitment to empowering dreams through innovative financial solutions.',
    keywords: 'about inspire alliance, board of directors, leadership team, company overview, mission, vision, how we do business',
    openGraph: {
        title: 'About Us - Leadership & Company Overview | Inspire Alliance Fund Group',
        description: 'Learn about Inspire Alliance Fund Group leadership, board of directors, operating committee, and our commitment to empowering dreams through innovative financial solutions.',
        type: 'website',
    },
};

export default function AboutLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
} 