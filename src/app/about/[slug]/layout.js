import React from 'react';

// Profile data for generating metadata
const profilesData = {
    'brian-perez': {
        name: 'Brian Perez',
        position: 'President',
    },
    'jaime-flores': {
        name: 'Jaime Flores',
        position: 'Chief Technology Officer',
    },
    'carlos-perez': {
        name: 'Carlos Perez',
        position: 'Chief of Career Track Officer',
    },
    'rhia-alberto': {
        name: 'Rhia Alberto',
        position: 'Vice President',
    },
    'atty-renato-pineda': {
        name: 'Atty. Renato Pineda',
        position: 'Non-Executive Director',
    },
    'freddie-reyes': {
        name: 'Freddie Reyes',
        position: 'Non-Executive Director',
    },
    'ronaldo-castillo': {
        name: 'Ronaldo Castillo',
        position: 'Non-Executive Director',
    },
    'gerlie-de-asis': {
        name: 'Gerlie De Asis',
        position: 'HR/Administrative Officer',
    },
    'anne-colinares': {
        name: 'Anne Colinares',
        position: 'Assistant HR/Administrative Officer',
    },
    'neil-brion': {
        name: 'Neil Brion',
        position: 'Security Officer',
    },
    'shelah-reynaldo': {
        name: 'Shelah Reynaldo',
        position: 'Software Developer/Secretary',
    },
    'joanne-hermosura': {
        name: 'Joanne Hermosura',
        position: 'Secretary',
    }
};

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const profile = profilesData[resolvedParams.slug];

    if (!profile) {
        return {
            title: 'Profile Not Found | Inspire Alliance Fund Group',
            description: 'The requested team member profile could not be found.',
        };
    }

    return {
        title: `${profile.name} - ${profile.position} | Inspire Alliance Fund Group`,
        description: `Learn more about ${profile.name}, ${profile.position} at Inspire Alliance Fund Group.`,
        keywords: `${profile.name}, ${profile.position}, inspire alliance, leadership team`,
        openGraph: {
            title: `${profile.name} - ${profile.position} | Inspire Alliance Fund Group`,
            description: `Learn more about ${profile.name}, ${profile.position} at Inspire Alliance Fund Group.`,
            type: 'profile',
        },
    };
}

export default function ProfileLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
} 