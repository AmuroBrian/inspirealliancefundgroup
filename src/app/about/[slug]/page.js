import React from 'react';
import Link from 'next/link';
import Avatar from '../../components/Avatar';
import { notFound } from 'next/navigation';

// Profile data for team members
const profilesData = {
    'melody-santos': {
        name: 'Melody Santos',
        position: 'President',
        category: 'Board of Directors',
        since: '2019',
        bio: 'Melody Santos brings over 15 years of strategic leadership experience to Inspire Alliance Fund Group. As President, she drives the company\'s vision for empowering dreams and creating meaningful financial solutions.',
        expertise: ['Strategic Leadership', 'Corporate Governance', 'Financial Services', 'International Business'],
        education: 'MBA in Finance, University of the Philippines',
        achievements: [
            'Led company expansion into 5 new international markets',
            'Established partnerships with 14+ major real estate developers',
            'Implemented innovative digital banking solutions',
            'Recipient of Outstanding Business Leader Award 2023'
        ]
    },
    'carlos-perez': {
        name: 'Carlos Perez',
        position: 'Chief of Career Track Officer',
        category: 'Corporate Officers',
        since: '2021',
        bio: 'Carlos Perez leads our career development initiatives with strategic oversight of professional growth programs and talent advancement pathways.',
        expertise: ['Career Development', 'Talent Management', 'Professional Training', 'Organizational Psychology'],
        education: 'Masters in Human Resources Development, University of the Philippines',
        achievements: [
            'Developed comprehensive career progression frameworks',
            'Achieved 95% employee satisfaction in career development',
            'Launched mentorship programs across all departments',
            'Reduced employee turnover by 30%'
        ]
    },
    'brian-perez': {
        name: 'Brian Perez',
        position: 'Chief of Technology Officer',
        category: 'Corporate Officers',
        since: '2021',
        bio: 'Brian Perez drives our technology leadership and digital innovation strategies. His expertise in systems architecture and technological advancement ensures that our platform remains at the forefront of financial technology, providing our clients with secure and efficient digital solutions.',
        expertise: ['Technology Leadership', 'Systems Architecture', 'Digital Innovation', 'Cybersecurity'],
        education: 'BS Computer Science, Masters in Information Technology',
        achievements: [
            'Implemented state-of-the-art security protocols',
            'Led development of mobile banking applications',
            'Achieved 99.9% system uptime reliability',
            'Pioneered blockchain integration for transactions'
        ]
    },
    'rhia-alberto': {
        name: 'Rhia Alberto',
        position: 'Vice President',
        category: 'Board of Directors',
        since: '2020',
        bio: 'Rhia Alberto is an experienced executive who brings deep expertise in business operations and strategic planning to our leadership team. Her focus on organizational development and expansion has been crucial in supporting our growth initiatives and ensuring operational excellence across all business functions.',
        expertise: ['Business Operations', 'Strategic Planning', 'Organizational Development', 'Market Expansion'],
        education: 'Masters in Business Administration, Ateneo de Manila University',
        achievements: [
            'Streamlined operations reducing processing time by 40%',
            'Developed comprehensive training programs for staff',
            'Established quality assurance protocols',
            'Led digital transformation initiatives'
        ]
    },
    'andrei-bergano': {
        name: 'Andrei Bergano',
        position: 'Executive Director',
        category: 'Board of Directors',
        since: '2021',
        bio: 'Andrei Bergano is a dynamic leader with a proven track record in business development and strategic partnerships. His role involves overseeing key operational initiatives and ensuring that our services meet the highest standards of excellence while expanding our reach in both local and international markets.',
        expertise: ['Business Development', 'Strategic Partnerships', 'Operations Management', 'Client Relations'],
        education: 'Bachelor of Science in Business Management, De La Salle University',
        achievements: [
            'Secured partnerships with major banking institutions',
            'Increased client satisfaction rates to 98%',
            'Launched innovative service delivery models',
            'Established regional offices in key cities'
        ]
    },
    'atty-renato-pineda': {
        name: 'Atty. Renato Pineda',
        position: 'Non-Executive Director',
        category: 'Board of Directors',
        since: '2020',
        bio: 'Attorney Renato Pineda is a legal expert with extensive experience in corporate law and regulatory compliance. He provides strategic legal guidance and oversight, ensuring that all our operations comply with Philippine regulations and international standards while protecting our clients\' interests.',
        expertise: ['Corporate Law', 'Regulatory Compliance', 'Legal Strategy', 'Risk Management'],
        education: 'Juris Doctor, University of Santo Tomas; LLM in Corporate Law',
        achievements: [
            'Successfully handled 500+ corporate registrations',
            'Established comprehensive compliance framework',
            'Led legal strategy for international expansions',
            'Recognized as Top Corporate Lawyer 2022'
        ]
    },
    'freddie-reyes': {
        name: 'Freddie Reyes',
        position: 'Non-Executive Director',
        category: 'Board of Directors',
        since: '2021',
        bio: 'Freddie Reyes is a seasoned business professional with expertise in financial management and investment strategies. He contributes valuable industry insights and helps guide our investment decisions, ensuring sustainable growth and profitability for the company and our clients.',
        expertise: ['Financial Management', 'Investment Strategy', 'Risk Assessment', 'Portfolio Management'],
        education: 'CPA, Master in Finance, Asian Institute of Management',
        achievements: [
            'Managed investment portfolios worth over ₱2 billion',
            'Developed risk assessment frameworks',
            'Achieved 15% average annual returns for client investments',
            'Published research on emerging market opportunities'
        ]
    },
    'ronaldo-castillo': {
        name: 'Ronaldo Castillo',
        position: 'Non-Executive Director',
        category: 'Board of Directors',
        since: '2022',
        bio: 'Ronaldo Castillo is an accomplished executive with extensive background in international business and market development. He brings a global perspective to our board, helping us understand international markets and develop strategies that bridge opportunities between different countries.',
        expertise: ['International Business', 'Market Development', 'Cross-border Transactions', 'Global Strategy'],
        education: 'MBA in International Business, INSEAD',
        achievements: [
            'Facilitated over $50M in cross-border investments',
            'Established business relationships in 12 countries',
            'Led market entry strategies for Asian markets',
            'Expert in Japan-Philippines business relations'
        ]
    },
    'raphael-jeremy-reyes': {
        name: 'Raphael Jeremy Reyes',
        position: 'Internal Audit',
        category: 'Corporate Officers',
        since: '2022',
        bio: 'Raphael Jeremy Reyes leads our internal audit functions with meticulous attention to detail and comprehensive understanding of financial controls. His expertise ensures that our operations maintain the highest standards of accuracy, compliance, and transparency in all business processes.',
        expertise: ['Internal Auditing', 'Financial Controls', 'Risk Assessment', 'Compliance Management'],
        education: 'CPA, Bachelor of Science in Accountancy, University of the Philippines',
        achievements: [
            'Implemented comprehensive audit frameworks',
            'Identified cost savings opportunities worth ₱5M annually',
            'Achieved 100% compliance rate in regulatory audits',
            'Developed automated audit monitoring systems'
        ]
    },
    'gerlie-de-asis': {
        name: 'Gerlie De Asis',
        position: 'HR/Administrative Officer',
        category: 'Corporate Officers',
        since: '2020',
        bio: 'Gerlie De Asis oversees our human resources and administrative operations with a focus on creating a positive work environment and supporting employee development. Her leadership ensures that our team has the resources and support needed to deliver exceptional service to our clients.',
        expertise: ['Human Resources Management', 'Employee Development', 'Administrative Operations', 'Policy Development'],
        education: 'Masters in Human Resources Management, Ateneo de Manila University',
        achievements: [
            'Reduced employee turnover by 35%',
            'Implemented comprehensive benefits programs',
            'Established employee wellness initiatives',
            'Streamlined administrative processes improving efficiency by 50%'
        ]
    },
    'anne-colinares': {
        name: 'Anne Colinares',
        position: 'Assistant HR/Administrative Officer',
        category: 'Corporate Officers',
        since: '2021',
        bio: 'Anne Colinares provides essential support to our human resources and administrative functions, ensuring smooth day-to-day operations and excellent employee relations. Her attention to detail and commitment to service excellence helps maintain our high standards of workplace satisfaction.',
        expertise: ['HR Support Services', 'Employee Relations', 'Administrative Coordination', 'Process Improvement'],
        education: 'Bachelor of Science in Psychology, De La Salle University',
        achievements: [
            'Maintained 98% employee satisfaction rating',
            'Streamlined onboarding processes reducing time by 40%',
            'Implemented digital HR systems',
            'Led workplace culture improvement initiatives'
        ]
    },
    'neil-brion': {
        name: 'Neil Brion',
        position: 'Security',
        category: 'Corporate Officers',
        since: '2021',
        bio: 'Neil Brion is responsible for comprehensive security management across all our operations, ensuring the protection of company assets, client information, and personnel. His proactive approach to security and risk mitigation helps maintain our reputation for trustworthiness and reliability.',
        expertise: ['Security Management', 'Risk Mitigation', 'Asset Protection', 'Emergency Response'],
        education: 'Bachelor of Science in Criminology, Certification in Corporate Security',
        achievements: [
            'Achieved zero security incidents in past 2 years',
            'Implemented multi-layered security protocols',
            'Developed comprehensive emergency response plans',
            'Trained staff on security best practices'
        ]
    },
    'shelah-reynaldo': {
        name: 'Shelah Reynaldo',
        position: 'Secretary',
        category: 'Corporate Officers',
        since: '2021',
        bio: 'Shelah Reynaldo provides executive support and documentation management services that are essential to our corporate governance. Her organizational skills and attention to detail ensure that all board communications and corporate documentation are handled with precision and confidentiality.',
        expertise: ['Executive Support', 'Documentation Management', 'Corporate Governance', 'Communication Coordination'],
        education: 'Bachelor of Science in Business Administration, University of Santo Tomas',
        achievements: [
            'Maintained 100% accuracy in corporate documentation',
            'Streamlined board meeting coordination processes',
            'Implemented digital filing systems',
            'Supported successful completion of regulatory filings'
        ]
    },
    'joanne-hermosura': {
        name: 'Joanne Hermosura',
        position: 'Secretary',
        category: 'Corporate Officers',
        since: '2022',
        bio: 'Joanne Hermosura supports our administrative and secretarial functions with dedication to accuracy and efficiency. Her role in facilitating corporate governance processes and maintaining detailed records helps ensure our operations run smoothly and in compliance with all requirements.',
        expertise: ['Administrative Support', 'Record Keeping', 'Corporate Processes', 'Document Management'],
        education: 'Bachelor of Science in Office Administration, Polytechnic University of the Philippines',
        achievements: [
            'Digitized 95% of corporate records',
            'Improved document retrieval time by 60%',
            'Maintained perfect attendance at board meetings',
            'Established efficient filing and tracking systems'
        ]
    }
};

export function generateMetadata({ params }) {
    const profile = profilesData[params.slug];

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
    };
}

export default function ProfilePage({ params }) {
    const profile = profilesData[params.slug];

    if (!profile) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="h-20"></div>

            {/* Hero Section */}
            <section className="relative py-16 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-90"
                    style={{
                        background: 'linear-gradient(135deg, rgba(128, 195, 42, 0.9) 0%, rgba(75, 136, 139, 0.9) 50%, rgba(56, 115, 175, 0.9) 100%)'
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/about"
                        className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors duration-300"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Leadership
                    </Link>

                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                        <div className="flex-shrink-0">
                            <div className="w-48 h-48 rounded-2xl overflow-hidden bg-white border-4 border-white shadow-2xl flex items-center justify-center">
                                <Avatar name={profile.name} size={192} />
                            </div>
                        </div>

                        <div className="flex-1 text-center lg:text-left">
                            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                                {profile.category}
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                                {profile.name}
                            </h1>
                            <h2 className="text-2xl text-white/90 mb-4">
                                {profile.position}
                            </h2>
                            <p className="text-lg text-white/80 mb-6">
                                With the company since {profile.since}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Biography</h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {profile.bio}
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
                                <ul className="space-y-4">
                                    {profile.achievements.map((achievement, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 leading-relaxed">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Areas of Expertise</h3>
                                <div className="space-y-3">
                                    {profile.expertise.map((skill, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Education</h3>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 leading-relaxed">{profile.education}</span>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Facts</h3>
                                <div className="space-y-4">
                                    <div>
                                        <span className="text-sm text-gray-500 uppercase tracking-wide">Position</span>
                                        <p className="text-gray-900 font-semibold">{profile.position}</p>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-500 uppercase tracking-wide">Department</span>
                                        <p className="text-gray-900 font-semibold">{profile.category}</p>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-500 uppercase tracking-wide">With Company Since</span>
                                        <p className="text-gray-900 font-semibold">{profile.since}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 