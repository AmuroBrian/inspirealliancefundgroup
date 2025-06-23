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
                bio: `ブライアン・ペレスは、インスパイア・アライアンス・ファンド・グループの代表取締役を務める、ダイナミックで先見性のあるリーダーです。わずか23歳で同職に任命されたブライアンは、組織に現代的な視点と大胆なリーダーシップをもたらし、明確なビジョン、結果重視の考え方、目的意識を持った経営アプローチにより、同僚や指導者から敬意を集めています。'
                                                        :
                                                        'Brian Perez is a dynamic and forward-thinking leader who serves as President of Inspire Alliance Fund Group. Appointed to the role at just 23 years old, Brian brings a modern perspective and bold leadership to the organization, quickly earning the respect of peers and mentors alike for his clear vision, results-driven mindset, and purposeful approach to management.'
                                                ) : profile.name === 'Rhia Alberto' ? (
                                                    currentLang === 'ja' ?
                                                        'マーケティング担当代表取締役として、私は代表取締役と緊密に協力し、私たちの広範なビジョンがマーケティング戦略と一致する計画を協働で作成しています。明確で実行可能で継続的なビジネス計画を作成することを確実にしています。私は、何が私たちの聴衆に響くか、市場でどのように認識されているか、そして成長の余地がどこにあるかについての洞察を提供します。また、私たちの日常業務が会社のビジョンと使命、そして代表取締役のビジョンに一致することを確実にします。代表取締役に私ができる限りのサポートを提供します。私たちが持つすべてのキャンペーンが見た目だけでなく、適切なメッセージを適切な人々に目的を持って伝えることを確実にします。私は、戦略が実際に着地し主導するように、ビジネス目標と創造的実行を結びつけることが私の役割だと考えています。'
                                                        :
                                                        'In my role as Marketing President, I work closely with the President by collaborating and creating plans that our broader vision aligns with marketing strategies. I make sure to create clear, actionable, and successive business plans. I provide insight into what resonates with our audiences, how we\'re being perceived in the market, and where we have room to grow. I also make sure that our daily operation aligns with the vision and mission of the company and the vision of our President. I offer all the support I can give to our President. I make sure that all the campaigns we have don\'t just look good, they move the right message to the right people, with purpose. I see my role as helping connect business goals with creative execution so that our strategies actually land and lead.'
                                                ) : (
                                                    currentLang === 'ja' ?
                                                        'レナート・ピネダ弁護士は、企業法と規制コンプライアンスにおける豊富な経験を持つ法律専門家です。彼は戦略的法的指導と監督を提供し、すべての私たちの事業がフィリピンの規制と国際基準に準拠し、クライアントの利益を保護することを確保しています。'
                                                        :
                                                        'Attorney Renato Pineda is a legal expert with extensive experience in corporate law and regulatory compliance. He provides strategic legal guidance and oversight, ensuring that all our operations comply with Philippine regulations and international standards while protecting our clients\' interests.'
                                                )}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-green-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                                                {t('profile.journeyToLeadership')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {profile.name === 'Brian Perez' ? (
                                                    currentLang === 'ja' ?
                                                        '代表取締役への道のりは、忍耐力、革新性、そして真の変革への願いによって特徴づけられています。大学時代から学生リーダーとして活動し、限られた資源でありながら大きなビジョンを持ったスタートアップを設立しました。起業家精神とアイデアを成功するビジネスモデルに発展させる能力により、すぐに上級幹部や投資家の注目を集めました。'
                                                        :
                                                        "Brian's journey to the presidency is marked by persistence, innovation, and a genuine desire to make a difference. He began as a student leader during his college years, founding a start-up with limited resources but a big vision. His entrepreneurial spirit and ability to scale ideas into successful business models soon caught the attention of senior executives and investors."
                                                ) : profile.name === 'Rhia Alberto' ? (
                                                    currentLang === 'ja' ?
                                                        '私は意図的なメッセージングの影響に動機づけられています—言いたいことを正確に知っていて、それがうまく着地するとき、それは強力です。アイデアをリーダーシップに変えることを楽しんでいます。チームが進歩し、人々の信頼を得て、関係を築き、チームの仕事に参加するとき、私は自分自身に喜びを感じます。私たちが発信するものが見た目に強いだけでなく、誠実さと実質に根ざしていることが私にとって重要です。また、チームの人々が成長するのを助けることを本当に楽しんでいます—誰かがプロジェクトのオーナーシップを取り、自信を得るのを見ることは、私にとってリーダーシップの最高の部分の一つです。'
                                                        :
                                                        "I'm motivated by the impact of intentional messaging—when you know exactly what you want to say and it lands well, that's powerful. I enjoy turning ideas into leadership. I see the joy to myself when I see the team progresses, when I gain people trust, relate to, or act on with the team works. It matters to me that what we put out there is not just visually strong, but also rooted in honesty and substance. I also really enjoy helping people on the team grow—seeing someone take ownership of a project and gain confidence is one of the best parts of leadership for me."
                                                ) : (
                                                    currentLang === 'ja' ?
                                                        '金融リスク管理とガバナンスの背景を持つレナート弁護士は、強力な分析レンズと長期的価値創造への焦点をもたらします。社外取締役として、彼は戦略的バランスをサポートする客観的洞察を提供し、取締役会が決定を行う際にイノベーションとリスクの両方を考慮できるよう支援します。'
                                                        :
                                                        'With a background in financial risk management and governance, Atty. Renato brings a strong analytical lens and a focus on long-term value creation. As a non-executive director, he offers objective insights that support strategic balance, helping the board consider both innovation and risk when making decisions.'
                                                )}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                {t('profile.definingMoment')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {profile.name === 'Brian Perez' ? (
                                                    currentLang === 'ja' ?
                                                        'ブライアンのキャリアにおける決定的な瞬間は、主要なピッチコンペティションでの出来事でした。最年少の参加者であったにもかかわらず、革新的なアイデアと自信に満ちたプレゼンテーションで経験豊富な専門家を感動させ、最終的に1位を獲得しました。この経験により、野心とビジョンは年齢によって制限されるものではないという信念が強化されました。'
                                                        :
                                                        "A defining moment in Brian's early career came during a major pitch competition, where—despite being the youngest participant—he impressed seasoned professionals with his innovative ideas and confident delivery, ultimately winning first place. This experience reinforced his belief that ambition and vision are not limited by age."
                                                ) : profile.name === 'Rhia Alberto' ? (
                                                    currentLang === 'ja' ?
                                                        '私たちのプレゼンターの一人が予定されていたクライアント会議に出席できなかった時がありました。私はすぐにクライアントに連絡して変更を知らせ、同じく有能で知識豊富な別のプレゼンターが代わりに参加することを安心させました。人は違うが、専門性と正確性のレベルは同じであることを強調しました。私たちは時間通りに会議を進めることができ、スムーズに進行しました。その瞬間に私に印象的だったのは、このような状況で冷静さと前向きな考え方がどれほど重要かということでした。物事は常に計画通りにいくわけではありませんが、リーダーシップとは適応し、チームとクライアントの体験を強いままに保つことです。'
                                                        :
                                                        "There was a time when one of our presenters couldn't make it to a scheduled client meeting. I immediately reached out to the client to inform them of the change and reassure them that a different presenter, equally capable and knowledgeable would step in. I emphasized that while the person was different, the level of professionalism and accuracy would be the same. We were able to proceed with the meeting on time, and it went smoothly. What stood out to me in that moment was how much presence of mind and a positive mindset matter in situations like these. Things don't always go as planned, but leadership is about adapting and ensuring the team and client experience remains strong."
                                                ) : (
                                                    currentLang === 'ja' ?
                                                        '彼は積極的な監督を信じており、定期的にパフォーマンス指標、コンプライアンス報告書、内部統制を検討しています。また、フィードバック、倫理的行動、透明性が日常業務の一部となる文化を構築するために、部門間のオープンなコミュニケーションを奨励しています。'
                                                        :
                                                        'He believes in proactive oversight, regularly reviewing performance metrics, compliance reports, and internal controls. He also encourages open communication across departments to build a culture where feedback, ethical behavior, and transparency are part of day-to-day operations.'
                                                )}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                                                {t('profile.challengesAndLessons')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {profile.name === 'Brian Perez' ? (
                                                    currentLang === 'ja' ?
                                                        '代表取締役として、ブライアンは革新性、包容性、長期的なインパクトに基づいて繁栄する目的主導型企業の構築に取り組んでいます。謙遜と勇気をもってリーダーシップを発揮し、真のリーダーシップとは他者に奉仕し、地に足をつけ、チームが大きな夢を持ち大胆に行動することを鼓舞することだと信じています。彼の個人的なモットーは彼のアプローチを反映しています：「私たちが成功するのは、懸命に働き、ビジョン、誠実さ、行動をもって前進するからです。」'
                                                        :
                                                        'As President, Brian is committed to building a purpose-driven company that thrives on innovation, inclusivity, and long-term impact. He leads with humility and courage, believing that true leadership is about serving others, staying grounded, and inspiring teams to dream big and act boldly. His personal motto reflects his approach: "We succeed because we work hard, work forward with vision, integrity, and action."'
                                                ) : profile.name === 'Rhia Alberto' ? (
                                                    currentLang === 'ja' ?
                                                        '物事は常に計画通りにいくわけではありませんが、リーダーシップとは適応し、チームとクライアントの体験を強いままに保つことです。'
                                                        :
                                                        'Things don\'t always go as planned, but leadership is about adapting and ensuring the team and client experience remains strong.'
                                                ) : (
                                                    currentLang === 'ja' ?
                                                        '独立した監督は、拡大中でも会社が健全なガバナンスに根ざし続けることを保証します。それはステークホルダーの利益を保護し、リスクを軽減し、投資家、従業員、パートナー間の信頼を強化します。成長は責任によって導かれなければならず、そこで社外取締役の役割が不可欠になります。'
                                                        :
                                                        'Independent oversight ensures that the company remains grounded in sound governance, even while scaling. It helps safeguard stakeholder interests, mitigates risks, and reinforces trust among investors, employees, and partners. Growth must be guided by responsibility, and that\'s where the role of non-executive directors becomes essential.'
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                ) : profile.name === 'Rhia Alberto' ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                {t('profile.introduction')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'introduction') || getProfileContent(profile, 'bio')}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-green-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                                                {t('profile.journeyToLeadership')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'journeyToLeadership')}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                {t('profile.definingMoment')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'definingMoment')}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                                                {t('profile.challengesAndLessons')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'challengesAndLessons')}
                                            </p>
                                        </div>
                                    </div>
                                ) : profile.name === 'Atty. Renato Pineda' ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                {t('profile.introduction')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'introduction') || getProfileContent(profile, 'bio')}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-green-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                                                {t('profile.journeyToLeadership')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'journeyToLeadership')}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                {t('profile.definingMoment')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'definingMoment')}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                                                {t('profile.challengesAndLessons')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'challengesAndLessons')}
                                            </p>
                                        </div>
                                    </div>
                                ) : profile.name === 'Carlos Perez' ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                {t('profile.introduction')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'introduction') || getProfileContent(profile, 'bio')}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-green-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                                                {t('profile.journeyToLeadership')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'journeyToLeadership')}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                {t('profile.definingMoment')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'definingMoment')}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                                                {t('profile.challengesAndLessons')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'challengesAndLessons')}
                                            </p>
                                        </div>
                                    </div>
                                ) : profile.name === 'Freddie Reyes' ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                {t('profile.introduction')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'introduction') || getProfileContent(profile, 'bio')}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-green-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                                                {t('profile.journeyToLeadership')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'journeyToLeadership')}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                {t('profile.definingMoment')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'definingMoment')}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                                                {t('profile.challengesAndLessons')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'challengesAndLessons')}
                                            </p>
                                        </div>
                                    </div>
                                ) : profile.name === 'Ronaldo Castillo' ? (
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                {t('profile.introduction')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'introduction') || getProfileContent(profile, 'bio')}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-green-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                                                {t('profile.journeyToLeadership')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'journeyToLeadership')}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                {t('profile.definingMoment')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'definingMoment')}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-800 mb-2">
                                                <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                                                {t('profile.challengesAndLessons')}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getProfileContent(profile, 'challengesAndLessons')}
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
                                        <p className="text-gray-900 font-semibold">{t('positions.' + profile.position)}</p>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-500 uppercase tracking-wide">{t('profile.department')}</span>
                                        <p className="text-gray-900 font-semibold">{t('categories.' + profile.category)}</p>
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

export default ProfilePage; 