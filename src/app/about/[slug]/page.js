import React from 'react';
import Link from 'next/link';
import Avatar from '../../components/Avatar';
import { notFound } from 'next/navigation';

// Profile data for team members
const profilesData = {
    'brian-perez': {
        name: 'Brian Perez',
        position: 'President',
        category: 'Board of Directors',
        since: '2019',
        bio: `Brian Perez is a dynamic and forward-thinking leader who serves as President of Inspire Alliance Fund Group. Appointed to the role at just 23 years old, Brian brings a modern perspective and bold leadership to the organization, quickly earning the respect of peers and mentors alike for his clear vision, results-driven mindset, and purposeful approach to management.\n\nBrian's journey to the presidency is marked by persistence, innovation, and a genuine desire to make a difference. He began as a student leader during his college years, founding a start-up with limited resources but a big vision. His entrepreneurial spirit and ability to scale ideas into successful business models soon caught the attention of senior executives and investors.\n\nA defining moment in Brian's early career came during a major pitch competition, where—despite being the youngest participant—he impressed seasoned professionals with his innovative ideas and confident delivery, ultimately winning first place. This experience reinforced his belief that ambition and vision are not limited by age.\n\nAs President, Brian is committed to building a purpose-driven company that thrives on innovation, inclusivity, and long-term impact. He leads with humility and courage, believing that true leadership is about serving others, staying grounded, and inspiring teams to dream big and act boldly.\n\nBrian often reminds his team: "It's not about how old you are, but how boldly you move forward with vision, integrity, and action."`,
        expertise: ['Strategic Leadership', 'Corporate Governance', 'Financial Services', 'International Business', 'Technology Leadership', 'Systems Architecture', 'Digital Innovation', 'Cybersecurity'],
        education: 'MBA in Finance, University of the Philippines; BS Computer Science, Masters in Information Technology',
        achievements: [
            'Led company expansion into 5 new international markets',
            'Established partnerships with 14+ major real estate developers',
            'Implemented innovative digital banking solutions',
            'Recipient of Outstanding Business Leader Award 2023',
            'Implemented state-of-the-art security protocols',
            'Led development of mobile banking applications',
            'Achieved 99.9% system uptime reliability',
            'Pioneered blockchain integration for transactions'
        ]
    },
    'carlos-perez': {
        name: 'Carlos Perez',
        position: 'Chief of Career Track Officer',
        category: 'Corporate Officers',
        since: '2021',
        bio: `Carlos Perez leads our career development initiatives with strategic oversight of professional growth programs and talent advancement pathways.\n\nAs Chief of Career Track Officer, Carlos provides daily operational support across departments, carries out special tasks and directives issued by the CEO and executive team, proposes and implements workflow improvements, prepares and manages company documents and reports, oversees project scheduling and progress tracking, and collaborates with HR, finance, sales, and other departments as needed.\n\nTo ensure smooth day-to-day operations, Carlos focuses on fulfilling departmental responsibilities and delegates tasks to his assistant to avoid being overwhelmed.\n\nA key challenge Carlos and his team have overcome is learning effective time management, teamwork, and leadership while handling multiple responsibilities. These experiences have contributed greatly to his professional growth and the overall efficiency of the operations team.`,
        expertise: ['Career Development', 'Talent Management', 'Professional Training', 'Organizational Psychology'],
        education: 'Masters in Human Resources Development, University of the Philippines',
        achievements: [
            'Developed comprehensive career progression frameworks',
            'Achieved 95% employee satisfaction in career development',
            'Launched mentorship programs across all departments',
            'Reduced employee turnover by 30%'
        ]
    },
    'rhia-alberto': {
        name: 'Rhia Alberto',
        position: 'Marketing President',
        category: 'Board of Directors',
        since: '2020',
        bio: `In my role as Marketing President, I work closely with the President by collaborating and creating plans that our broader vision aligns with marketing strategies. I make sure to create clear, actionable, and successive business plans. I provide insight into what resonates with our audiences, how we're being perceived in the market, and where we have room to grow. I also make sure that our daily operation aligns with the vision and mission of the company and the vision of our President. I offer all the support I can give to our President. I make sure that all the campaigns we have don't just look good, they move the right message to the right people, with purpose. I see my role as helping connect business goals with creative execution so that our strategies actually land and lead.\n\nI'm motivated by the impact of intentional messaging—when you know exactly what you want to say and it lands well, that's powerful. I enjoy turning ideas into leadership. I see the joy to myself when I see the team progresses, when I gain people trust, relate to, or act on with the team works. It matters to me that what we put out there is not just visually strong, but also rooted in honesty and substance. I also really enjoy helping people on the team grow—seeing someone take ownership of a project and gain confidence is one of the best parts of leadership for me.\n\nThere was a time when one of our presenters couldn't make it to a scheduled client meeting. I immediately reached out to the client to inform them of the change and reassure them that a different presenter, equally capable and knowledgeable would step in. I emphasized that while the person was different, the level of professionalism and accuracy would be the same. We were able to proceed with the meeting on time, and it went smoothly. What stood out to me in that moment was how much presence of mind and a positive mindset matter in situations like these. Things don't always go as planned, but leadership is about adapting and ensuring the team and client experience remains strong.`,
        expertise: ['Marketing Strategy', 'Brand Management', 'Digital Marketing', 'Market Research'],
        education: 'Masters in Marketing, Ateneo de Manila University',
        achievements: [
            'Launched successful marketing campaigns',
            'Increased brand awareness by 30%',
            'Achieved 15% ROI on marketing investments',
            'Developed marketing automation tools'
        ]
    },
    'atty-renato-pineda': {
        name: 'Atty. Renato Pineda',
        position: 'Non-Executive Director',
        category: 'Board of Directors',
        since: '2020',
        bio: `Attorney Renato Pineda is a legal expert with extensive experience in corporate law and regulatory compliance. He provides strategic legal guidance and oversight, ensuring that all our operations comply with Philippine regulations and international standards while protecting our clients' interests.\n\nWith a background in financial risk management and governance, Atty. Renato brings a strong analytical lens and a focus on long-term value creation. As a non-executive director, he offers objective insights that support strategic balance, helping the board consider both innovation and risk when making decisions.\n\nHe believes in proactive oversight, regularly reviewing performance metrics, compliance reports, and internal controls. He also encourages open communication across departments to build a culture where feedback, ethical behavior, and transparency are part of day-to-day operations.\n\nIndependent oversight ensures that the company remains grounded in sound governance, even while scaling. It helps safeguard stakeholder interests, mitigates risks, and reinforces trust among investors, employees, and partners. Growth must be guided by responsibility, and that's where the role of non-executive directors becomes essential.`,
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
        bio: `Freddie Reyes is a seasoned business professional with expertise in financial management and investment strategies. He contributes valuable industry insights and helps guide our investment decisions, ensuring sustainable growth and profitability for the company and our clients.\n\nHis experience in corporate development and business expansion allows him to contribute insights on strategic growth opportunities and market positioning. He approaches board discussions with an entrepreneurial mindset, balancing creativity with due diligence to support bold yet sustainable moves.\n\nFreddie supports the implementation of clear performance frameworks and promotes ethical leadership at every level. Regular audits, independent reviews, and strong communication with the executive team are critical tools he relies on to ensure the organization remains accountable and transparent.\n\nAs companies grow, complexity increases and so do risks. Independent oversight adds an essential layer of objectivity and governance, making sure growth decisions are well-informed and aligned with the mission. It helps maintain the integrity of the organization as it scales.`,
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
        bio: `Ronaldo Castillo is an accomplished executive with extensive background in international business and market development. He brings a global perspective to our board, helping us understand international markets and develop strategies that bridge opportunities between different countries.\n\nAs a non-executive director, Ronaldo aims to bring an independent perspective to strategic discussions and help the company make well-balanced decisions. His role is to offer constructive challenge, ensure accountability, and contribute to high-level governance that supports sustainable growth. He strives to add value by guiding the board to see both risks and opportunities from a broader lens.\n\nMaintaining independence means being objective and free from any conflict of interest, while still being well-informed and involved in key matters. Ronaldo stays engaged through regular board meetings, performance reviews, and open communication with the executive team—always with a focus on oversight rather than direct management.\n\nTransparency, integrity, and long-term responsibility are the principles Ronaldo upholds. He believes that sound governance is not just about compliance, but about creating a culture of ethical leadership and accountability at every level of the organization. A strong governance framework ensures the company's decisions are aligned with its mission, values, and stakeholders' best interests.`,
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
        bio: `Raphael Jeremy Reyes leads our internal audit functions with meticulous attention to detail and comprehensive understanding of financial controls. His expertise ensures that our operations maintain the highest standards of accuracy, compliance, and transparency in all business processes.\n\nThe primary goals of the internal audit department are to provide independent and objective assurance that the organization's risk management, governance, and internal control processes are operating effectively. We aim to identify areas of improvement, support operational efficiency, and help safeguard the company's assets. Ultimately, our role is to ensure that the organization is compliant, accountable, and prepared for future challenges.\n\nMaintaining objectivity and integrity starts with adhering to professional auditing standards and ethical principles. I ensure that my evaluations are based purely on facts, evidence, and documented processes free from personal bias or external influence. Open communication, confidentiality, and a strong sense of responsibility guide my work, and I maintain an independent mindset regardless of the audit subject.\n\nA strong control environment is one where leadership sets a clear tone at the top prioritizing ethics, compliance, and transparency. It includes well-documented policies, clearly defined responsibilities, and consistent enforcement of controls. More importantly, it's a culture where employees at all levels understand the importance of doing the right thing and feel empowered to raise concerns without fear.`,
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
        bio: `Gerlie De Asis oversees our human resources and administrative operations with a focus on creating a positive work environment and supporting employee development. Her leadership ensures that our team has the resources and support needed to deliver exceptional service to our clients.\n\nAs the HR Manager and Head of Admin, her primary responsibilities include overseeing recruitment and onboarding, managing employee relations, implementing HR policies, and ensuring compliance with labor regulations. She also supports the administrative needs of the company by coordinating with various departments to ensure smooth internal operations and support services.\n\nTo ensure smooth day-to-day operations, Gerlie prioritizes clear communication, efficient processes, and team coordination. By fostering an environment of accountability and mutual support, she ensures tasks are executed on time and issues are addressed proactively. Regular check-ins, proper documentation, and staff engagement initiatives also play a key role in maintaining daily operational efficiency.\n\nOne significant challenge the team faced was adapting to rapid organizational changes during restructuring. It required clear communication, quick decision-making, and strong coordination across departments. From that experience, Gerlie learned the importance of flexibility, transparency, and the value of a united team when navigating through transitions.`,
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
        bio: `Neil Brion is responsible for comprehensive security management across all our operations, ensuring the protection of company assets, client information, and personnel. His proactive approach to security and risk mitigation helps maintain our reputation for trustworthiness and reliability.\n\nTo ensure the safety of both the company and its personnel, we have implemented a combination of physical, digital, and procedural security measures. These include controlled access to facilities, CCTV surveillance, identity verification protocols, data protection policies, and emergency response plans. Regular security drills, risk assessments, and staff awareness programs are also part of our proactive safety strategy.\n\nWe follow a structured risk management process that includes early detection, threat assessment, and rapid response. When a potential threat is identified, we immediately conduct an investigation, activate our incident response protocols, and coordinate with relevant departments to contain and resolve the issue. Continuous monitoring and post-incident analysis ensure we learn and improve from every situation.\n\nIn today's dynamic and unpredictable environment, a proactive security approach is essential. Threats can emerge from both physical and digital sources, and waiting to react is no longer enough. Being proactive means anticipating risks, staying updated with trends, and implementing preventative measures before incidents occur. It not only protects assets and people—it builds trust, resilience, and long-term organizational stability.`,
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
        position: 'Software Developer/Secretary',
        category: 'Corporate Officers',
        since: '2025',
        bio: `Shelah Reynaldo provides executive support and documentation management services that are essential to our corporate governance. Her organizational skills and attention to detail ensure that all board communications and corporate documentation are handled with precision and confidentiality.\n\nShe supports the leadership team by ensuring they have timely access to the information, documents, and resources they need to make well-informed decisions. She handles administrative coordination, assists in scheduling meetings, manages communication flow, and provides logistical support to ensure that strategic plans are executed smoothly. Her role is to help create a structured and efficient environment that allows leaders to focus on high-level priorities.\n\nShelah relies on a combination of digital tools, calendar management, and a clear task-tracking system to stay on top of responsibilities. Prioritization is key—she assesses urgency and importance daily to allocate time and attention where it's needed most. Clear communication, time-blocking, and staying detail-oriented help her manage multiple priorities effectively, even in fast-paced situations.\n\nShe acts as a central point of contact between leadership, committees, and various teams, ensuring that messages, updates, and decisions are clearly relayed. She helps minimize misunderstandings by documenting discussions, following up on action items, and maintaining transparency in all communications. She believes that clarity and consistency are essential in promoting collaboration and trust.\n\nConfidentiality and professionalism are cornerstones of her role. She treats all sensitive information with the utmost discretion, ensures that documents are securely stored, and always maintains a respectful and neutral position. Whether handling internal memos or board discussions, she operates with integrity, knowing that trust is essential to the effectiveness of her position.`,
        expertise: ['Executive Support', 'Documentation Management', 'Corporate Governance', 'Communication Coordination'],
        education: 'Bachelor of Science in Information Technology, Dominican College of Tarlac',
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
        bio: `Joanne Hermosura supports our administrative and secretarial functions with dedication to accuracy and efficiency. Her role in facilitating corporate governance processes and maintaining detailed records helps ensure our operations run smoothly and in compliance with all requirements.\n\nAs a company secretary, her primary responsibilities include ensuring that the organization complies with legal, regulatory, and governance requirements. She manages board meetings, prepares and distributes official documents, maintains corporate records, and supports the board in executing its duties effectively. Her role also involves facilitating smooth communication between the board, management, and stakeholders, while safeguarding the integrity of our corporate governance framework.\n\nJoanne follows a structured and detail-oriented process to maintain accurate and timely records. This includes preparing meeting agendas in advance, documenting minutes with clarity and precision, and ensuring all resolutions and decisions are properly archived. She also uses secure digital systems and backups to organize documents for easy access and long-term compliance. Accuracy and confidentiality are always top priorities.\n\nEffective coordination starts with clear communication and scheduling. Joanne acts as the central point of contact—circulating meeting notices, sharing relevant documents, and ensuring that board members and committees are aligned on timelines, expectations, and decisions. She also follows up on action items and assists in facilitating collaboration across departments to ensure smooth implementation of board directives.`,
        expertise: ['Executive Support', 'Documentation Management', 'Corporate Governance', 'Communication Coordination'],
        education: 'Bachelor of Science in Office Administration, Polytechnic University of the Philippines',
        achievements: [
            'Digitized 95% of corporate records',
            'Improved document retrieval time by 60%',
            'Maintained perfect attendance at board meetings',
            'Established efficient filing and tracking systems'
        ]
    },
    'jaime-flores': {
        name: 'Jaime Flores',
        position: 'Chief of Technology Officer',
        category: 'Corporate Officers',
        since: '2021',
        bio: `Jaime Flores drives our technology leadership and digital innovation strategies. His expertise in systems architecture and technological advancement ensures that our platform remains at the forefront of financial technology, providing our clients with secure and efficient digital solutions.\n\nAs Chief of Technology Officer, his primary responsibility within the operations team is to oversee IT operations across the company. He manages and coordinates various IT-related projects and ensures that all technological platforms used within the office are running efficiently. This includes supervising system infrastructure, troubleshooting issues, and ensuring our IT services align with the organization's goals.\n\nTo ensure smooth daily operations, Jaime actively monitors IT systems, tracks the progress of ongoing projects, and maintains regular communication with the team. He provides timely reports and updates to executive management, practices preventive maintenance, delegates tasks appropriately, and responds quickly to technical concerns to avoid disruptions.\n\nOne major challenge Jaime faced was managing multiple IT projects simultaneously while leading a diverse team. Each project had different technical requirements and timelines, which required careful prioritization and communication. Through this experience, he learned that strong leadership, clear delegation of tasks, and understanding each team member's strengths are crucial to successfully handling complex operations. He also gained a deeper appreciation for proactive planning and protecting the company's IT infrastructure from potential risks.`,
        expertise: ['Technology Leadership', 'Systems Architecture', 'Digital Innovation', 'Cybersecurity'],
        education: 'BS Computer Science, Masters in Information Technology',
        achievements: [
            'Implemented state-of-the-art security protocols',
            'Led development of mobile banking applications',
            'Achieved 99.9% system uptime reliability',
            'Pioneered blockchain integration for transactions'
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
                                {params.slug === 'jaime-flores' ? (
                                    <img src="/officers/jaime.png" alt="Jaime Flores" className="object-cover w-full h-full" />
                                ) : profile.name === 'Shelah Reynaldo' ? (
                                    <img src="/officers/shelah.png" alt="Shelah Reynaldo" className="object-cover w-full h-full" />
                                ) : (
                                    <Avatar name={profile.name} size={192} />
                                )}
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
                                {profile.name === 'Brian Perez' ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                Introduction
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Brian Perez is a dynamic and forward-thinking leader who serves as President of Inspire Alliance Fund Group. Appointed to the role at just 23 years old, Brian brings a modern perspective and bold leadership to the organization, quickly earning the respect of peers and mentors alike for his clear vision, results-driven mindset, and purposeful approach to management.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-green-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                                                Journey to Leadership
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Brian's journey to the presidency is marked by persistence, innovation, and a genuine desire to make a difference. He began as a student leader during his college years, founding a start-up with limited resources but a big vision. His entrepreneurial spirit and ability to scale ideas into successful business models soon caught the attention of senior executives and investors.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                Defining Moment
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">A defining moment in Brian's early career came during a major pitch competition, where—despite being the youngest participant—he impressed seasoned professionals with his innovative ideas and confident delivery, ultimately winning first place. This experience reinforced his belief that ambition and vision are not limited by age.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                                                Leadership Philosophy
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">As President, Brian is committed to building a purpose-driven company that thrives on innovation, inclusivity, and long-term impact. He leads with humility and courage, believing that true leadership is about serving others, staying grounded, and inspiring teams to dream big and act boldly.</p>
                                            <p className="text-gray-700 italic mt-4">Brian often reminds his team: "It's not about how old you are, but how boldly you move forward with vision, integrity, and action."</p>
                                        </div>
                                    </div>
                                ) : profile.name === 'Carlos Perez' ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                Introduction
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Carlos Perez leads our career development initiatives with strategic oversight of professional growth programs and talent advancement pathways.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-green-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                                                Main Responsibilities
                                            </h4>
                                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                                <li>Provide daily operational support across departments.</li>
                                                <li>Carry out special tasks and directives issued by the CEO and executive team.</li>
                                                <li>Propose and implement workflow improvements across the organization.</li>
                                                <li>Prepare and manage company documents and reports.</li>
                                                <li>Oversee project scheduling and progress tracking.</li>
                                                <li>Collaborate and coordinate with HR, finance, sales, and other departments as needed.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                Operational Approach
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Carlos ensures smooth day-to-day operations by diligently performing departmental tasks and responsibilities, and by delegating tasks to his assistant to avoid being overwhelmed.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                                                Challenges & Lessons
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Carlos has learned a lot from overcoming challenges in the operations team, especially in time management, teamwork, and leadership. These experiences have contributed greatly to his professional growth and the overall efficiency of the team.</p>
                                        </div>
                                    </div>
                                ) : profile.name === 'Gerlie De Asis' ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                Introduction
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Gerlie De Asis oversees our human resources and administrative operations with a focus on creating a positive work environment and supporting employee development. Her leadership ensures that our team has the resources and support needed to deliver exceptional service to our clients.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-green-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                                                Main Responsibilities
                                            </h4>
                                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                                <li>Oversee recruitment and onboarding</li>
                                                <li>Manage employee relations</li>
                                                <li>Implement HR policies</li>
                                                <li>Ensure compliance with labor regulations</li>
                                                <li>Support administrative needs by coordinating with various departments</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                Operational Approach
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Gerlie prioritizes clear communication, efficient processes, and team coordination. By fostering an environment of accountability and mutual support, she ensures tasks are executed on time and issues are addressed proactively. Regular check-ins, proper documentation, and staff engagement initiatives also play a key role in maintaining daily operational efficiency.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                                                Challenges & Lessons
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">One significant challenge the team faced was adapting to rapid organizational changes during restructuring. It required clear communication, quick decision-making, and strong coordination across departments. From that experience, Gerlie learned the importance of flexibility, transparency, and the value of a united team when navigating through transitions.</p>
                                        </div>
                                    </div>
                                ) : profile.name === 'Melody Santos' ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                Introduction
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Melody Santos brings over 15 years of strategic leadership experience to Inspire Alliance Fund Group. As President, she drives the company's vision for empowering dreams and creating meaningful financial solutions.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-green-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                                                Inspiration to Lead
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">What inspired Melody to lead this organization is her passion for building meaningful relationships, creating strong connections, and gaining valuable leadership experience. She believes that leadership is not just about managing people it's about inspiring others, learning together, and growing as a team. Leading this organization allows her to contribute to something greater while also developing both personally and professionally.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                Long-term Vision
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Her long-term vision is for the company to grow into a successful, innovative, and impactful organization one that is recognized not just for its achievements, but also for its values, commitment to excellence, and dedication to the people they serve. She wants to build a legacy that future generations can be proud of.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                                                Defining Success as a Leader
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">For Melody, success as a leader is measured not only by results, but by how you empower others. It's about guiding the team with integrity, earning trust, and creating a positive environment where everyone feels valued and motivated. A successful leader uplifts others, drives collective progress, and stays committed to the vision—especially in challenging times.</p>
                                        </div>
                                    </div>
                                ) : profile.name === 'Rhia Alberto' ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                Supporting the President
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">In my role as Marketing President, I work closely with the President by collaborating and creating plans that our broader vision aligns with marketing strategies. I make sure to create clear, actionable, and successive business plans. I provide insight into what resonates with our audiences, how we're being perceived in the market, and where we have room to grow. I also make sure that our daily operation aligns with the vision and mission of the company and the vision of our President. I offer all the support I can give to our President. I make sure that all the campaigns we have don't just look good, they move the right message to the right people, with purpose. I see my role as helping connect business goals with creative execution so that our strategies actually land and lead.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                Motivation
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">I'm motivated by the impact of intentional messaging—when you know exactly what you want to say and it lands well, that's powerful. I enjoy turning ideas into leadership. I see the joy to myself when I see the team progresses, when I gain people trust, relate to, or act on with the team works. It matters to me that what we put out there is not just visually strong, but also rooted in honesty and substance. I also really enjoy helping people on the team grow—seeing someone take ownership of a project and gain confidence is one of the best parts of leadership for me.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                                                Proud Leadership Moment
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">There was a time when one of our presenters couldn't make it to a scheduled client meeting. I immediately reached out to the client to inform them of the change and reassure them that a different presenter, equally capable and knowledgeable would step in. I emphasized that while the person was different, the level of professionalism and accuracy would be the same. We were able to proceed with the meeting on time, and it went smoothly. What stood out to me in that moment was how much presence of mind and a positive mindset matter in situations like these. Things don't always go as planned, but leadership is about adapting and ensuring the team and client experience remains strong.</p>
                                        </div>
                                    </div>
                                ) : profile.name === 'Atty. Renato Pineda' ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                Introduction
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Attorney Renato Pineda is a legal expert with extensive experience in corporate law and regulatory compliance. He provides strategic legal guidance and oversight, ensuring that all our operations comply with Philippine regulations and international standards while protecting our clients' interests.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-green-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                                                Unique Perspective
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">With a background in financial risk management and governance, Atty. Renato brings a strong analytical lens and a focus on long-term value creation. As a non-executive director, he offers objective insights that support strategic balance, helping the board consider both innovation and risk when making decisions.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                Accountability & Transparency
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">He believes in proactive oversight, regularly reviewing performance metrics, compliance reports, and internal controls. He also encourages open communication across departments to build a culture where feedback, ethical behavior, and transparency are part of day-to-day operations.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                                                Importance of Independent Oversight
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Independent oversight ensures that the company remains grounded in sound governance, even while scaling. It helps safeguard stakeholder interests, mitigates risks, and reinforces trust among investors, employees, and partners. Growth must be guided by responsibility, and that's where the role of non-executive directors becomes essential.</p>
                                        </div>
                                    </div>
                                ) : profile.name === 'Freddie Reyes' ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                Introduction
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Freddie Reyes is a seasoned business professional with expertise in financial management and investment strategies. He contributes valuable industry insights and helps guide our investment decisions, ensuring sustainable growth and profitability for the company and our clients.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-green-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                                                Unique Perspective
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">His experience in corporate development and business expansion allows him to contribute insights on strategic growth opportunities and market positioning. He approaches board discussions with an entrepreneurial mindset, balancing creativity with due diligence to support bold yet sustainable moves.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                Accountability & Transparency
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Freddie supports the implementation of clear performance frameworks and promotes ethical leadership at every level. Regular audits, independent reviews, and strong communication with the executive team are critical tools he relies on to ensure the organization remains accountable and transparent.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                                                Importance of Independent Oversight
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">As companies grow, complexity increases and so do risks. Independent oversight adds an essential layer of objectivity and governance, making sure growth decisions are well-informed and aligned with the mission. It helps maintain the integrity of the organization as it scales.</p>
                                        </div>
                                    </div>
                                ) : profile.name === 'Raphael Jeremy Reyes' ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                Introduction
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Raphael Jeremy Reyes leads our internal audit functions with meticulous attention to detail and comprehensive understanding of financial controls. His expertise ensures that our operations maintain the highest standards of accuracy, compliance, and transparency in all business processes.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-green-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                                                Main Goals
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">The primary goals of the internal audit department are to provide independent and objective assurance that the organization's risk management, governance, and internal control processes are operating effectively. We aim to identify areas of improvement, support operational efficiency, and help safeguard the company's assets. Ultimately, our role is to ensure that the organization is compliant, accountable, and prepared for future challenges.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                Objectivity & Integrity
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Maintaining objectivity and integrity starts with adhering to professional auditing standards and ethical principles. I ensure that my evaluations are based purely on facts, evidence, and documented processes free from personal bias or external influence. Open communication, confidentiality, and a strong sense of responsibility guide my work, and I maintain an independent mindset regardless of the audit subject.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                                                Strong Control Environment
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">A strong control environment is one where leadership sets a clear tone at the top prioritizing ethics, compliance, and transparency. It includes well-documented policies, clearly defined responsibilities, and consistent enforcement of controls. More importantly, it's a culture where employees at all levels understand the importance of doing the right thing and feel empowered to raise concerns without fear.</p>
                                        </div>
                                    </div>
                                ) : profile.name === 'Neil Brion' ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                Introduction
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Neil Brion is responsible for comprehensive security management across all our operations, ensuring the protection of company assets, client information, and personnel. His proactive approach to security and risk mitigation helps maintain our reputation for trustworthiness and reliability.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-green-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                                                Security Measures
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">To ensure the safety of both the company and its personnel, we have implemented a combination of physical, digital, and procedural security measures. These include controlled access to facilities, CCTV surveillance, identity verification protocols, data protection policies, and emergency response plans. Regular security drills, risk assessments, and staff awareness programs are also part of our proactive safety strategy.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                Threat Management & Response
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">We follow a structured risk management process that includes early detection, threat assessment, and rapid response. When a potential threat is identified, we immediately conduct an investigation, activate our incident response protocols, and coordinate with relevant departments to contain and resolve the issue. Continuous monitoring and post-incident analysis ensure we learn and improve from every situation.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                                                Proactive Security Approach
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">In today's dynamic and unpredictable environment, a proactive security approach is essential. Threats can emerge from both physical and digital sources, and waiting to react is no longer enough. Being proactive means anticipating risks, staying updated with trends, and implementing preventative measures before incidents occur. It not only protects assets and people—it builds trust, resilience, and long-term organizational stability.</p>
                                        </div>
                                    </div>
                                ) : profile.name === 'Shelah Reynaldo' ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                Value as Secretary
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Shelah Reynaldo provides executive support and documentation management services that are essential to our corporate governance. Her organizational skills and attention to detail ensure that all board communications and corporate documentation are handled with precision and confidentiality. She supports the leadership team by ensuring they have timely access to the information, documents, and resources they need to make well-informed decisions. She handles administrative coordination, assists in scheduling meetings, manages communication flow, and provides logistical support to ensure that strategic plans are executed smoothly. Her role is to help create a structured and efficient environment that allows leaders to focus on high-level priorities.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-green-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                                                Maintaining Independence
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Shelah relies on a combination of digital tools, calendar management, and a clear task-tracking system to stay on top of responsibilities. Prioritization is key—she assesses urgency and importance daily to allocate time and attention where it's needed most. Clear communication, time-blocking, and staying detail-oriented help her manage multiple priorities effectively, even in fast-paced situations. She acts as a central point of contact between leadership, committees, and various teams, ensuring that messages, updates, and decisions are clearly relayed. She helps minimize misunderstandings by documenting discussions, following up on action items, and maintaining transparency in all communications. She believes that clarity and consistency are essential in promoting collaboration and trust.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                                                Principles in Governance
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Confidentiality and professionalism are cornerstones of her role. She treats all sensitive information with the utmost discretion, ensures that documents are securely stored, and always maintains a respectful and neutral position. Whether handling internal memos or board discussions, she operates with integrity, knowing that trust is essential to the effectiveness of her position.</p>
                                        </div>
                                    </div>
                                ) : profile.name === 'Jaime Flores' ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                Main Responsibilities
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Jaime leads a cross-functional team of developers by assigning tasks, setting priorities, and mentoring junior engineers to ensure alignment with both technical and business goals.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-green-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                                                Ensuring Smooth Operations
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">He runs daily stand-ups, sprint planning, and retrospectives to maintain transparency, track progress, and keep the team aligned on objectives.</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                Challenges & Lessons
                                            </h4>
                                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                                <li>Built robust test coverage and staging environments to simulate real-world conditions.</li>
                                                <li>Empowering team members with ownership and clear communication dramatically increases resilience and adaptability.</li>
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-lg text-gray-700 leading-relaxed">{profile.bio}</p>
                                )}
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