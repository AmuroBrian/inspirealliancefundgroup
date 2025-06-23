"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Avatar from '../../components/Avatar';
import { notFound } from 'next/navigation';

// Temporary static translations to avoid hooks order issues
const translations = {
    en: {
        profile: {
            directorSince: "Director since",
            withCompanySince: "With the company since",
            backToLeadership: "Back to Leadership",
            readMore: "Read More",
            biography: "Biography",
            expertise: "Areas of Expertise",
            education: "Education",
            achievements: "Key Achievements",
            quickFacts: "Quick Facts",
            position: "Position",
            department: "Department",
            introduction: "Introduction",
            journeyToLeadership: "Journey to Leadership",
            definingMoment: "Defining Moment",
            challengesAndLessons: "Challenges & Lessons"
        },
        categories: {
            boardOfDirectors: "Board of Directors",
            corporateOfficers: "Corporate Officers"
        },
        positions: {
            president: "President",
            vicePresident: "Vice President",
            nonExecutiveDirector: "Non-Executive Director",
            chiefCareerOfficer: "Chief of Career Track Officer",
            chiefTechnologyOfficer: "Chief of Technology Officer",
            hrOfficer: "HR/Administrative Officer",
            assistantHrOfficer: "Assistant HR/Administrative Officer",
            security: "Security",
            softwareDeveloper: "Software Developer/Secretary",
            secretary: "Secretary"
        }
    },
    ja: {
        profile: {
            directorSince: "取締役就任",
            withCompanySince: "入社年",
            backToLeadership: "リーダーシップに戻る",
            readMore: "続きを読む",
            biography: "経歴",
            expertise: "専門分野",
            education: "学歴",
            achievements: "主な実績",
            quickFacts: "基本情報",
            position: "役職",
            department: "部門",
            introduction: "紹介",
            journeyToLeadership: "リーダーシップへの道",
            definingMoment: "決定的瞬間",
            challengesAndLessons: "課題と学び"
        },
        categories: {
            boardOfDirectors: "取締役会",
            corporateOfficers: "企業役員"
        },
        positions: {
            president: "代表取締役",
            vicePresident: "副社長",
            nonExecutiveDirector: "社外取締役",
            chiefCareerOfficer: "チーフキャリアトラック・オフィサー",
            chiefTechnologyOfficer: "最高技術責任者",
            hrOfficer: "人事・管理担当者",
            assistantHrOfficer: "人事・管理アシスタント",
            security: "セキュリティ",
            softwareDeveloper: "ソフトウェア開発者・秘書",
            secretary: "秘書"
        }
    }
};

// Profile data for team members
const profilesData = {
    'brian-perez': {
        name: 'Brian Perez',
        position: 'president',
        category: 'boardOfDirectors',
        since: '2021',
        content: {
            en: {
                bio: `Brian Perez is a dynamic and forward-thinking leader who serves as President of Inspire Alliance Fund Group. Appointed to the role at just 23 years old, Brian brings a modern perspective and bold leadership to the organization, quickly earning the respect of peers and mentors alike for his clear vision, results-driven mindset, and purposeful approach to management.\n\nBrian's journey to the presidency is marked by persistence, innovation, and a genuine desire to make a difference. He began as a student leader during his college years, founding a start-up with limited resources but a big vision. His entrepreneurial spirit and ability to scale ideas into successful business models soon caught the attention of senior executives and investors.\n\nA defining moment in Brian's early career came during a major pitch competition, where—despite being the youngest participant—he impressed seasoned professionals with his innovative ideas and confident delivery, ultimately winning first place. This experience reinforced his belief that ambition and vision are not limited by age.\n\nAs President, Brian is committed to building a purpose-driven company that thrives on innovation, inclusivity, and long-term impact. He leads with humility and courage, believing that true leadership is about serving others, staying grounded, and inspiring teams to dream big and act boldly. His personal motto reflects his approach: "We succeed because we work hard, work forward with vision, integrity, and action."`,
                expertise: ['Technology Leadership', 'Systems Architecture', 'Digital Innovation', 'Cybersecurity', 'Strategic Planning', 'Team Leadership'],
                education: 'BS Computer Engineering',
                achievements: [
                    'Youngest President in company history at age 23',
                    'Won first place in Mobile App Development Competition',
                    'Successfully earned community trust and support in Mathematics and Science Community',
                    'Implemented comprehensive fin-tech mobile app development called Inspire Wallet',
                    'Built high-performing robotic food server for a food chain company',
                ]
            },
            ja: {
                bio: `ブライアン・ペレスは、インスパイア・アライアンス・ファンド・グループの代表取締役を務める、ダイナミックで先見性のあるリーダーです。わずか23歳で同職に任命されたブライアンは、組織に現代的な視点と大胆なリーダーシップをもたらし、明確なビジョン、結果重視の考え方、目的意識を持った経営アプローチにより、同僚や指導者から敬意を集めています。\n\n代表取締役への道のりは、忍耐力、革新性、そして真の変革への願いによって特徴づけられています。大学時代から学生リーダーとして活動し、限られた資源でありながら大きなビジョンを持ったスタートアップを設立しました。起業家精神とアイデアを成功するビジネスモデルに発展させる能力により、すぐに上級幹部や投資家の注目を集めました。\n\nブライアンのキャリアにおける決定的な瞬間は、主要なピッチコンペティションでの出来事でした。最年少の参加者であったにもかかわらず、革新的なアイデアと自信に満ちたプレゼンテーションで経験豊富な専門家を感動させ、最終的に1位を獲得しました。この経験により、野心とビジョンは年齢によって制限されるものではないという信念が強化されました。\n\n代表取締役として、ブライアンは革新性、包容性、長期的なインパクトに基づいて繁栄する目的主導型企業の構築に取り組んでいます。謙遜と勇気をもってリーダーシップを発揮し、真のリーダーシップとは他者に奉仕し、地に足をつけ、チームが大きな夢を持ち大胆に行動することを鼓舞することだと信じています。彼の個人的なモットーは彼のアプローチを反映しています：「私たちが成功するのは、懸命に働き、ビジョン、誠実さ、行動をもって前進するからです。」`,
                expertise: ['テクノロジーリーダーシップ', 'システムアーキテクチャ', 'デジタルイノベーション', 'サイバーセキュリティ', '戦略立案', 'チームリーダーシップ'],
                education: 'コンピューターサイエンス学士、情報技術修士',
                achievements: [
                    '23歳で会社史上最年少の代表取締役に就任',
                    '主要起業家ピッチコンペティションで1位獲得',
                    '複数のビジネスイニシアチブを成功裏に拡大',
                    '包括的デジタル変革戦略を実装',
                    '高性能な部門横断チームを構築',
                    '99.9%のシステム稼働率を達成'
                ]
            }
        }
    },
    'jaime-flores': {
        name: 'Jaime Flores',
        position: 'chiefTechnologyOfficer',
        category: 'corporateOfficers',
        since: '2024',
        content: {
            en: {
                bio: `Jaime Flores leads our technology initiatives with extensive experience in digital transformation and systems management. His expertise ensures that our technological infrastructure supports our business objectives while maintaining the highest standards of security and efficiency.`,
                expertise: ['Technology Management', 'Digital Transformation', 'Systems Integration', 'IT Strategy'],
                education: 'Bachelor of Science in Information Technology',
                achievements: [
                    'Led successful digital transformation initiatives',
                    'Implemented robust IT security frameworks',
                    'Optimized system performance and reliability',
                    'Established comprehensive technology governance'
                ]
            },
            ja: {
                bio: `ハイメ・フローレスは、デジタル変革とシステム管理における豊富な経験を持ちながら、テクノロジー構想を主導しています。彼の専門知識により、技術インフラストラクチャが最高水準のセキュリティと効率性を維持しながら、ビジネス目標をサポートすることが保証されています。`,
                expertise: ['テクノロジー管理', 'デジタル変革', 'システム統合', 'IT戦略'],
                education: '情報技術学士',
                achievements: [
                    'デジタル変革構想を成功裏に主導',
                    '堅固なITセキュリティフレームワークを実装',
                    'システムパフォーマンスと信頼性を最適化',
                    '包括的なテクノロジーガバナンスを確立'
                ]
            }
        }
    },
    'carlos-perez': {
        name: 'Carlos Perez',
        position: 'chiefCareerOfficer',
        category: 'corporateOfficers',
        since: '2021',
        content: {
            en: {
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
            ja: {
                bio: `カルロス・ペレスは、専門的成長プログラムと人材育成経路の戦略的監督により、キャリア開発構想を主導しています。\n\nチーフキャリアトラック・オフィサーとして、カルロスは部門間で日常的な運営サポートを提供し、CEOと経営陣から発行される特別タスクと指示を実行し、ワークフロー改善を提案・実装し、会社文書と報告書を準備・管理し、プロジェクトスケジュールと進捗追跡を監督し、必要に応じてHR、財務、営業、その他の部門と協力しています。\n\n円滑な日常業務を確保するため、カルロスは部門の責任を果たすことに集中し、過度な負担を避けるために彼のアシスタントにタスクを委任しています。\n\nカルロスとそのチームが克服した主要な課題は、複数の責任を処理しながら効果的な時間管理、チームワーク、リーダーシップを学ぶことでした。これらの経験は、彼の専門的成長と運営チーム全体の効率性に大きく貢献しています。`,
                expertise: ['キャリア開発', '人材管理', '専門研修', '組織心理学'],
                education: 'フィリピン大学人材開発修士',
                achievements: [
                    '包括的なキャリア進歩フレームワークを開発',
                    'キャリア開発で95%の従業員満足度を達成',
                    '全部門にわたるメンターシッププログラムを開始',
                    '従業員離職率を30%削減'
                ]
            }
        }
    },
    'rhia-alberto': {
        name: 'Rhia Alberto',
        position: 'vicePresident',
        category: 'boardOfDirectors',
        since: '2020',
        content: {
            en: {
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
            ja: {
                bio: `マーケティング担当代表取締役として、私は代表取締役と緊密に協力し、私たちの広範なビジョンがマーケティング戦略と一致する計画を協働で作成しています。明確で実行可能で継続的なビジネス計画を作成することを確実にしています。私は、何が私たちの聴衆に響くか、市場でどのように認識されているか、そして成長の余地がどこにあるかについての洞察を提供します。また、私たちの日常業務が会社のビジョンと使命、そして代表取締役のビジョンに一致することを確実にします。代表取締役に私ができる限りのサポートを提供します。私たちが持つすべてのキャンペーンが見た目だけでなく、適切なメッセージを適切な人々に目的を持って伝えることを確実にします。私は、戦略が実際に着地し主導するように、ビジネス目標と創造的実行を結びつけることが私の役割だと考えています。\n\n私は意図的なメッセージングの影響に動機づけられています—言いたいことを正確に知っていて、それがうまく着地するとき、それは強力です。アイデアをリーダーシップに変えることを楽しんでいます。チームが進歩し、人々の信頼を得て、関係を築き、チームの仕事に参加するとき、私は自分自身に喜びを感じます。私たちが発信するものが見た目に強いだけでなく、誠実さと実質に根ざしていることが私にとって重要です。また、チームの人々が成長するのを助けることを本当に楽しんでいます—誰かがプロジェクトのオーナーシップを取り、自信を得るのを見ることは、私にとってリーダーシップの最高の部分の一つです。\n\n私たちのプレゼンターの一人が予定されていたクライアント会議に出席できなかった時がありました。私はすぐにクライアントに連絡して変更を知らせ、同じく有能で知識豊富な別のプレゼンターが代わりに参加することを安心させました。人は違うが、専門性と正確性のレベルは同じであることを強調しました。私たちは時間通りに会議を進めることができ、スムーズに進行しました。その瞬間に私に印象的だったのは、このような状況で冷静さと前向きな考え方がどれほど重要かということでした。物事は常に計画通りにいくわけではありませんが、リーダーシップとは適応し、チームとクライアントの体験を強いままに保つことです。`,
                expertise: ['マーケティング戦略', 'ブランド管理', 'デジタルマーケティング', '市場調査'],
                education: 'アテネオ・デ・マニラ大学マーケティング修士',
                achievements: [
                    '成功するマーケティングキャンペーンを開始',
                    'ブランド認知度を30%増加',
                    'マーケティング投資で15%のROIを達成',
                    'マーケティング自動化ツールを開発'
                ]
            }
        }
    },
    'atty-renato-pineda': {
        name: 'Atty. Renato Pineda',
        position: 'nonExecutiveDirector',
        category: 'boardOfDirectors',
        since: '2020',
        content: {
            en: {
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
            ja: {
                bio: `レナート・ピネダ弁護士は、企業法と規制コンプライアンスにおける豊富な経験を持つ法律専門家です。彼は戦略的法的指導と監督を提供し、すべての私たちの事業がフィリピンの規制と国際基準に準拠し、クライアントの利益を保護することを確保しています。\n\n金融リスク管理とガバナンスの背景を持つレナート弁護士は、強力な分析レンズと長期的価値創造への焦点をもたらします。社外取締役として、彼は戦略的バランスをサポートする客観的洞察を提供し、取締役会が決定を行う際にイノベーションとリスクの両方を考慮できるよう支援します。\n\n彼は積極的な監督を信じており、定期的にパフォーマンス指標、コンプライアンス報告書、内部統制を検討しています。また、フィードバック、倫理的行動、透明性が日常業務の一部となる文化を構築するために、部門間のオープンなコミュニケーションを奨励しています。\n\n独立した監督は、拡大中でも会社が健全なガバナンスに根ざし続けることを保証します。それはステークホルダーの利益を保護し、リスクを軽減し、投資家、従業員、パートナー間の信頼を強化します。成長は責任によって導かれなければならず、そこで社外取締役の役割が不可欠になります。`,
                expertise: ['企業法', '規制コンプライアンス', '法的戦略', 'リスク管理'],
                education: 'サント・トマス大学法務博士、企業法法学修士',
                achievements: [
                    '500以上の企業登録を成功裏に処理',
                    '包括的コンプライアンスフレームワークを確立',
                    '国際展開の法的戦略を主導',
                    '2022年トップ企業弁護士として認定'
                ]
            }
        }
    },
    'freddie-reyes': {
        name: 'Freddie Reyes',
        position: 'nonExecutiveDirector',
        category: 'boardOfDirectors',
        since: '2021',
        content: {
            en: {
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
            ja: {
                bio: `フレディ・レイエスは、金融管理と投資戦略の専門知識を持つ経験豊富なビジネスプロフェッショナルです。彼は貴重な業界洞察を提供し、私たちの投資決定を導くことで、会社とクライアントの持続可能な成長と収益性を確保しています。\n\n企業開発とビジネス拡張における彼の経験により、戦略的成長機会と市場ポジショニングに関する洞察を提供できます。彼は起業家精神を持って取締役会の議論にアプローチし、大胆でありながら持続可能な行動をサポートするために創造性とデューデリジェンスのバランスを取ります。\n\nフレディは明確な業績フレームワークの実装をサポートし、あらゆるレベルで倫理的リーダーシップを促進します。定期監査、独立レビュー、経営陣との強力なコミュニケーションは、組織が責任を持ち透明性を保つために彼が依存している重要なツールです。\n\n企業が成長するにつれて、複雑さが増し、リスクも増大します。独立した監督は、成長の決定が十分な情報に基づいており、使命と一致していることを確実にする、客観性とガバナンスの不可欠な層を追加します。それは組織が拡大する際の誠実性を維持するのに役立ちます。`,
                expertise: ['金融管理', '投資戦略', 'リスク評価', 'ポートフォリオ管理'],
                education: '公認会計士、アジア経営大学院金融修士',
                achievements: [
                    '20億ペソを超える投資ポートフォリオを管理',
                    'リスク評価フレームワークを開発',
                    'クライアント投資で年平均15%のリターンを達成',
                    '新興市場機会に関する研究を発表'
                ]
            }
        }
    },
    'ronaldo-castillo': {
        name: 'Ronaldo Castillo',
        position: 'nonExecutiveDirector',
        category: 'boardOfDirectors',
        since: '2022',
        content: {
            en: {
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
            ja: {
                bio: `ロナルド・カスティーリョは、国際ビジネスと市場開発における豊富な背景を持つ優秀な経営者です。彼は私たちの取締役会にグローバルな視点をもたらし、国際市場を理解し、異なる国々間の機会を橋渡しする戦略を開発するのを支援しています。\n\n社外取締役として、ロナルドは戦略的議論に独立した視点をもたらし、会社がバランスの取れた決定を行うのを支援することを目指しています。彼の役割は建設的な挑戦を提供し、責任を確保し、持続可能な成長をサポートする高レベルのガバナンスに貢献することです。彼は取締役会がより広いレンズからリスクと機会の両方を見るよう導くことで価値を追加することに努めています。\n\n独立性を維持することは、重要な事項に十分な情報を持ち関与しながら、利益相反から自由で客観的であることを意味します。ロナルドは定期的な取締役会会議、業績レビュー、経営陣とのオープンなコミュニケーションを通じて関与し続けています—常に直接管理ではなく監督に重点を置いています。\n\n透明性、誠実性、長期的責任は、ロナルドが支持する原則です。彼は健全なガバナンスはコンプライアンスだけでなく、組織のあらゆるレベルで倫理的リーダーシップと責任の文化を創造することだと信じています。強力なガバナンスフレームワークは、会社の決定がその使命、価値観、ステークホルダーの最善の利益と一致していることを保証します。`,
                expertise: ['国際ビジネス', '市場開発', '国際取引', 'グローバル戦略'],
                education: 'INSEAD国際ビジネスMBA',
                achievements: [
                    '5,000万ドルを超える国際投資を促進',
                    '12か国でビジネス関係を確立',
                    'アジア市場参入戦略を主導',
                    '日本・フィリピンビジネス関係の専門家'
                ]
            }
        }
    },
    'gerlie-de-asis': {
        name: 'Gerlie De Asis',
        position: 'hrOfficer',
        category: 'corporateOfficers',
        since: '2020',
        content: {
            en: {
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
            ja: {
                bio: `ガーリー・デ・アシスは、ポジティブな職場環境の創造と従業員開発のサポートに焦点を当てながら、私たちの人事と管理業務を監督しています。彼女のリーダーシップにより、私たちのチームがクライアントに卓越したサービスを提供するために必要なリソースとサポートを確保できています。\n\nHRマネージャーと管理部長として、彼女の主な責任には、採用とオンボーディングの監督、従業員関係の管理、HR方針の実装、労働規制の遵守確保が含まれます。また、円滑な内部運営とサポートサービスを確保するために、様々な部門と連携して会社の管理ニーズをサポートしています。\n\n円滑な日常業務を確保するため、ガーリーは明確なコミュニケーション、効率的なプロセス、チーム連携を優先しています。責任と相互サポートの環境を促進することで、タスクが時間通りに実行され、問題が積極的に対処されることを確実にしています。定期的なチェックイン、適切な文書化、スタッフエンゲージメント構想も、日常業務効率の維持において重要な役割を果たしています。\n\nチームが直面した重要な課題の一つは、再構築中の急速な組織変化への適応でした。それには明確なコミュニケーション、迅速な意思決定、部門間の強固な連携が必要でした。その経験から、ガーリーは柔軟性、透明性、そして変化を乗り切る際の結束チームの価値の重要性を学びました。`,
                expertise: ['人事管理', '従業員開発', '管理業務', '方針開発'],
                education: 'アテネオ・デ・マニラ大学人事管理修士',
                achievements: [
                    '従業員離職率を35%削減',
                    '包括的福利厚生プログラムを実装',
                    '従業員ウェルネス構想を確立',
                    '管理プロセスを合理化し効率を50%向上'
                ]
            }
        }
    },
    'anne-colinares': {
        name: 'Anne Colinares',
        position: 'assistantHrOfficer',
        category: 'corporateOfficers',
        since: '2021',
        content: {
            en: {
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
            ja: {
                bio: 'アン・コリナレスは、円滑な日常業務と優れた従業員関係を確保し、私たちの人事と管理機能に不可欠なサポートを提供しています。彼女の細部への注意とサービス卓越性への献身により、私たちの高い職場満足基準を維持しています。',
                expertise: ['HR支援サービス', '従業員関係', '管理調整', 'プロセス改善'],
                education: 'デラサール大学心理学学士',
                achievements: [
                    '98%の従業員満足度評価を維持',
                    'オンボーディングプロセスを合理化し時間を40%短縮',
                    'デジタルHRシステムを実装',
                    '職場文化改善構想を主導'
                ]
            }
        }
    },
    'neil-brion': {
        name: 'Neil Brion',
        position: 'security',
        category: 'corporateOfficers',
        since: '2021',
        content: {
            en: {
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
            ja: {
                bio: `ニール・ブリオンは、会社資産、クライアント情報、人員の保護を確保し、私たちのすべての事業における包括的なセキュリティ管理を担当しています。セキュリティとリスク軽減への彼の積極的なアプローチは、信頼性と信用に対する私たちの評判を維持するのに役立っています。\n\n会社と人員の両方の安全を確保するため、私たちは物理的、デジタル、手続き的セキュリティ対策の組み合わせを実装しています。これには、施設への管理されたアクセス、CCTV監視、身元確認プロトコル、データ保護方針、緊急対応計画が含まれます。定期的なセキュリティ訓練、リスク評価、スタッフ意識向上プログラムも、私たちの積極的安全戦略の一部です。\n\n私たちは、早期発見、脅威評価、迅速な対応を含む構造化されたリスク管理プロセスに従っています。潜在的な脅威が特定されると、すぐに調査を実施し、インシデント対応プロトコルを活性化し、問題を封じ込めて解決するために関連部門と連携します。継続的な監視と事後分析により、あらゆる状況から学び改善することを確実にしています。\n\n今日のダイナミックで予測不可能な環境では、積極的なセキュリティアプローチが不可欠です。脅威は物理的・デジタル両方のソースから出現する可能性があり、反応を待つだけではもはや十分ではありません。積極的であることは、リスクを予測し、トレンドに最新の情報を持ち、インシデントが発生する前に予防措置を実装することを意味します。それは資産と人々を保護するだけでなく、信頼、回復力、長期的組織安定性を構築します。`,
                expertise: ['セキュリティ管理', 'リスク軽減', '資産保護', '緊急対応'],
                education: '犯罪学学士、企業セキュリティ認定',
                achievements: [
                    '過去2年間でゼロセキュリティインシデントを達成',
                    '多層セキュリティプロトコルを実装',
                    '包括的緊急対応計画を開発',
                    'セキュリティベストプラクティスでスタッフを訓練'
                ]
            }
        }
    },
    'shelah-reynaldo': {
        name: 'Shelah Reynaldo',
        position: 'softwareDeveloper',
        category: 'corporateOfficers',
        since: '2025',
        content: {
            en: {
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
            ja: {
                bio: `シェラー・レイナルドは、私たちの企業ガバナンスに不可欠な役員サポートと文書管理サービスを提供しています。彼女の組織スキルと細部への注意により、すべての取締役会コミュニケーションと企業文書が精密性と機密性をもって処理されることが保証されています。\n\n彼女は、十分な情報に基づいた決定を行うために必要な情報、文書、リソースへのタイムリーなアクセスを確保することで、リーダーシップチームをサポートしています。管理調整を処理し、会議スケジューリングを支援し、コミュニケーションフローを管理し、戦略計画が円滑に実行されることを確保するロジスティックサポートを提供しています。彼女の役割は、リーダーが高レベルの優先事項に集中できる構造化された効率的な環境を作り出すことを支援することです。\n\nシェラーは、責任を管理するためにデジタルツール、カレンダー管理、明確なタスク追跡システムの組み合わせに依存しています。優先順位付けが重要です—彼女は最も必要な場所に時間と注意を配分するために、緊急性と重要性を毎日評価しています。明確なコミュニケーション、時間ブロッキング、詳細志向を維持することで、ペースの速い状況でも複数の優先事項を効果的に管理しています。\n\n彼女は、メッセージ、更新、決定が明確に伝達されることを確保し、リーダーシップ、委員会、様々なチーム間の中心的な連絡点として機能しています。議論を文書化し、アクションアイテムをフォローアップし、すべてのコミュニケーションで透明性を維持することで、誤解を最小限に抑えるのを支援しています。彼女は、明確性と一貫性が協力と信頼を促進するために不可欠であると信じています。\n\n機密性と専門性は、彼女の役割の基盤です。すべての機密情報を最大限の裁量で扱い、文書が安全に保管されることを確保し、常に敬意のある中立的な立場を維持しています。内部メモや取締役会議論を処理する際でも、彼女は自分の立場の効果性に信頼が不可欠であることを知って、誠実に運営しています。`,
                expertise: ['役員サポート', '文書管理', '企業ガバナンス', 'コミュニケーション調整'],
                education: 'タルラック・ドミニカン大学情報技術学士',
                achievements: [
                    '企業文書で100%の精度を維持',
                    '取締役会会議調整プロセスを合理化',
                    'デジタルファイリングシステムを実装',
                    '規制提出の成功完了をサポート'
                ]
            }
        }
    },
    'joanne-hermosura': {
        name: 'Joanne Hermosura',
        position: 'secretary',
        category: 'corporateOfficers',
        since: '2022',
        content: {
            en: {
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
            ja: {
                bio: `ジョアン・エルモスラは、正確性と効率性への献身をもって、私たちの管理・秘書機能をサポートしています。企業ガバナンスプロセスの促進と詳細な記録の維持における彼女の役割は、私たちの事業が円滑に運営され、すべての要件に準拠することを確保するのに役立っています。\n\n会社秘書として、彼女の主な責任には、組織が法的、規制、ガバナンス要件に準拠することを確保することが含まれます。取締役会会議を管理し、公式文書を準備・配布し、企業記録を維持し、取締役会がその職務を効果的に実行することをサポートします。彼女の役割には、私たちの企業ガバナンスフレームワークの誠実性を保護しながら、取締役会、経営陣、ステークホルダー間の円滑なコミュニケーションを促進することも含まれます。\n\nジョアンは、正確でタイムリーな記録を維持するために、構造化された詳細志向のプロセスに従っています。これには、事前に会議議題を準備し、明確性と精密性をもって議事録を文書化し、すべての決議と決定が適切にアーカイブされることを確保することが含まれます。また、簡単にアクセスでき長期的コンプライアンスのために文書を整理するために、安全なデジタルシステムとバックアップを使用しています。正確性と機密性は常に最優先事項です。\n\n効果的な調整は、明確なコミュニケーションとスケジューリングから始まります。ジョアンは中心的な連絡点として機能し—会議通知を配布し、関連文書を共有し、取締役と委員会がタイムライン、期待、決定について一致することを確保しています。また、アクションアイテムをフォローアップし、取締役指示の円滑な実装を確保するために部門間の協力を促進することを支援しています。`,
                expertise: ['役員サポート', '文書管理', '企業ガバナンス', 'コミュニケーション調整'],
                education: 'フィリピン工科大学事務管理学士',
                achievements: [
                    '企業記録の95%をデジタル化',
                    '文書検索時間を60%改善',
                    '取締役会会議で完璧な出席を維持',
                    '効率的なファイリングと追跡システムを確立'
                ]
            }
        }
    }
};



export default function ProfilePage({ params }) {
    // HOOKS IN STRICT ORDER - NO CONDITIONAL CALLS ANYWHERE
    const [mounted, setMounted] = useState(false);
    const [currentLang, setCurrentLang] = useState("en");
    const [resolvedParams, setResolvedParams] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const resolveParams = async () => {
            try {
                setLoading(true);
                const resolved = await params;
                setResolvedParams(resolved);
                const foundProfile = profilesData[resolved.slug];
                if (foundProfile) {
                    setProfile(foundProfile);
                } else {
                    console.error(`Profile not found for slug: ${resolved.slug}`);
                }
            } catch (error) {
                console.error('Error resolving params:', error);
            } finally {
                setLoading(false);
            }
        };
        resolveParams();
    }, [params]);

    useEffect(() => {
        setMounted(true);

        // Check for saved language preference
        if (typeof window !== "undefined") {
            const savedLang = localStorage.getItem("selectedLanguage");
            if (savedLang && (savedLang === "en" || savedLang === "ja")) {
                setCurrentLang(savedLang);
            }
        }
    }, []);

    useEffect(() => {
        const handleLanguageChange = (event) => {
            if (event.detail && event.detail.language) {
                setCurrentLang(event.detail.language);
            }
        };

        if (mounted) {
            window.addEventListener("languageChanged", handleLanguageChange);
            return () => {
                window.removeEventListener("languageChanged", handleLanguageChange);
            };
        }
    }, [mounted]);

    // Log current state for debugging
    useEffect(() => {
        if (mounted && resolvedParams) {
            console.log('Profile page state:', {
                slug: resolvedParams.slug,
                profileExists: !!profile,
                currentLang,
                profileKeys: profile ? Object.keys(profile) : []
            });
        }
    }, [mounted, resolvedParams, profile, currentLang]);

    // Translation function
    const t = (key) => {
        const keys = key.split('.');
        let value = translations[currentLang];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        return value || key;
    };

    // Get localized profile content
    const getProfileContent = (profile, field) => {
        if (!profile) {
            console.warn('getProfileContent: profile is null or undefined');
            return '';
        }

        // Check if profile has the new bilingual structure
        if (profile.content && typeof profile.content === 'object') {
            // Try current language first
            if (profile.content[currentLang] && profile.content[currentLang][field]) {
                return profile.content[currentLang][field];
            }
            // Fallback to English
            if (profile.content.en && profile.content.en[field]) {
                return profile.content.en[field];
            }
        }

        // Legacy fallback for profiles not yet converted
        if (profile[field]) {
            return profile[field];
        }

        console.warn(`getProfileContent: field '${field}' not found for profile`, profile.name);
        return '';
    };

    // Don't render until mounted to prevent hydration mismatch
    if (!mounted) {
        return null;
    }

    // Show loading state while resolving params
    if (loading || !resolvedParams) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading profile...</p>
                </div>
            </div>
        );
    }

    if (!profile) {
        notFound();
        return;
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
                        {t('profile.backToLeadership')}
                    </Link>

                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                        <div className="flex-shrink-0">
                            <div className="w-48 h-48 rounded-2xl overflow-hidden bg-white border-4 border-white shadow-2xl flex items-center justify-center">
                                {resolvedParams.slug === 'jaime-flores' ? (
                                    <img
                                        src="/officers/jaime.png"
                                        alt="Jaime Flores"
                                        className="object-cover w-full h-full"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                ) : profile.name === 'Shelah Reynaldo' ? (
                                    <img
                                        src="/officers/shelah.png"
                                        alt="Shelah Reynaldo"
                                        className="object-cover w-full h-full"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                ) : null}
                                <Avatar name={profile.name} size={192} />
                            </div>
                        </div>

                        <div className="flex-1 text-center lg:text-left">
                            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                                {t(`categories.${profile.category}`)}
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                                {profile.name}
                            </h1>
                            <h2 className="text-2xl text-white/90 mb-4">
                                {t(`positions.${profile.position}`)}
                            </h2>
                            <p className="text-lg text-white/80 mb-6">
                                {t('profile.withCompanySince')} {profile.since}
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
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('profile.biography')}</h3>
                                {profile.name === 'Brian Perez' ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                {t('profile.introduction')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {currentLang === 'ja' ?
                                                    'ブライアン・ペレスは、インスパイア・アライアンス・ファンド・グループの代表取締役を務める、ダイナミックで先見性のあるリーダーです。わずか23歳で同職に任命されたブライアンは、組織に現代的な視点と大胆なリーダーシップをもたらし、明確なビジョン、結果重視の考え方、目的意識を持った経営アプローチにより、同僚や指導者から敬意を集めています。' :
                                                    'Brian Perez is a dynamic and forward-thinking leader who serves as President of Inspire Alliance Fund Group. Appointed to the role at just 23 years old, Brian brings a modern perspective and bold leadership to the organization, quickly earning the respect of peers and mentors alike for his clear vision, results-driven mindset, and purposeful approach to management.'
                                                }
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-green-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                                                {t('profile.journeyToLeadership')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {currentLang === 'ja' ?
                                                    '代表取締役への道のりは、忍耐力、革新性、そして真の変革への願いによって特徴づけられています。大学時代から学生リーダーとして活動し、限られた資源でありながら大きなビジョンを持ったスタートアップを設立しました。起業家精神とアイデアを成功するビジネスモデルに発展させる能力により、すぐに上級幹部や投資家の注目を集めました。' :
                                                    "Brian's journey to the presidency is marked by persistence, innovation, and a genuine desire to make a difference. He began as a student leader during his college years, founding a start-up with limited resources but a big vision. His entrepreneurial spirit and ability to scale ideas into successful business models soon caught the attention of senior executives and investors."
                                                }
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                {t('profile.definingMoment')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {currentLang === 'ja' ?
                                                    'ブライアンのキャリアにおける決定的な瞬間は、主要なピッチコンペティションでの出来事でした。最年少の参加者であったにもかかわらず、革新的なアイデアと自信に満ちたプレゼンテーションで経験豊富な専門家を感動させ、最終的に1位を獲得しました。この経験により、野心とビジョンは年齢によって制限されるものではないという信念が強化されました。' :
                                                    "A defining moment in Brian's early career came during a major pitch competition, where—despite being the youngest participant—he impressed seasoned professionals with his innovative ideas and confident delivery, ultimately winning first place. This experience reinforced his belief that ambition and vision are not limited by age."
                                                }
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                                                {t('profile.challengesAndLessons')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {currentLang === 'ja' ?
                                                    '代表取締役として、ブライアンは革新性、包容性、長期的なインパクトに基づいて繁栄する目的主導型企業の構築に取り組んでいます。謙遜と勇気をもってリーダーシップを発揮し、真のリーダーシップとは他者に奉仕し、地に足をつけ、チームが大きな夢を持ち大胆に行動することを鼓舞することだと信じています。彼の個人的なモットーは彼のアプローチを反映しています：「私たちが成功するのは、懸命に働き、ビジョン、誠実さ、行動をもって前進するからです。」' :
                                                    'As President, Brian is committed to building a purpose-driven company that thrives on innovation, inclusivity, and long-term impact. He leads with humility and courage, believing that true leadership is about serving others, staying grounded, and inspiring teams to dream big and act boldly. His personal motto reflects his approach: "We succeed because we work hard, work forward with vision, integrity, and action."'
                                                }
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-lg text-gray-700 leading-relaxed">{getProfileContent(profile, 'bio')}</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">{t('profile.expertise')}</h3>
                                <div className="space-y-3">
                                    {(getProfileContent(profile, 'expertise') || []).map((skill, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">{t('profile.education')}</h3>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 leading-relaxed">{getProfileContent(profile, 'education')}</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">{t('profile.achievements')}</h3>
                                <div className="space-y-3">
                                    {(getProfileContent(profile, 'achievements') || []).map((achievement, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 leading-relaxed">{achievement}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">{t('profile.quickFacts')}</h3>
                                <div className="space-y-4">
                                    <div>
                                        <span className="text-sm text-gray-500 uppercase tracking-wide">{t('profile.position')}</span>
                                        <p className="text-gray-900 font-semibold">{t(`positions.${profile.position}`)}</p>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-500 uppercase tracking-wide">{t('profile.department')}</span>
                                        <p className="text-gray-900 font-semibold">{t(`categories.${profile.category}`)}</p>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-500 uppercase tracking-wide">{t('profile.withCompanySince')}</span>
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