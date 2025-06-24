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

// Enhanced Profile data for team members
const profilesData = {
    'brian-perez': {
        name: 'Brian Perez',
        position: 'president',
        category: 'boardOfDirectors',
        since: '2021',
        content: {
            en: {
                introduction: `Brian Perez is a dynamic and forward-thinking leader who serves as President of Inspire Alliance Fund Group. Appointed to the role at just 23 years old, Brian brings a modern perspective and bold leadership to the organization, quickly earning the respect of peers and mentors alike for his clear vision, results-driven mindset, and purposeful approach to management.`,

                journeyToLeadership: `Brian's journey to the presidency is marked by persistence, innovation, and a genuine desire to make a difference. He began as a student leader during his college years, founding a start-up with limited resources but a big vision. His entrepreneurial spirit and ability to scale ideas into successful business models soon caught the attention of senior executives and investors.`,

                definingMoment: `A defining moment in Brian's early career came during a major pitch competition, where—despite being the youngest participant—he impressed seasoned professionals with his innovative ideas and confident delivery, ultimately winning first place. This experience reinforced his belief that ambition and vision are not limited by age.`,

                challengesAndLessons: `As President, Brian is committed to building a purpose-driven company that thrives on innovation, inclusivity, and long-term impact. He leads with humility and courage, believing that true leadership is about serving others, staying grounded, and inspiring teams to dream big and act boldly. His personal motto reflects his approach: "We succeed because we work hard, work forward with vision, integrity, and action."`,

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
                introduction: `ブライアン・ペレスは、インスパイア・アライアンス・ファンド・グループの代表取締役を務める、ダイナミックで先見性のあるリーダーです。わずか23歳で同職に任命されたブライアンは、組織に現代的な視点と大胆なリーダーシップをもたらし、明確なビジョン、結果重視の考え方、目的意識を持った経営アプローチにより、同僚や指導者から敬意を集めています。`,

                journeyToLeadership: `代表取締役への道のりは、忍耐力、革新性、そして真の変革への願いによって特徴づけられています。大学時代から学生リーダーとして活動し、限られた資源でありながら大きなビジョンを持ったスタートアップを設立しました。起業家精神とアイデアを成功するビジネスモデルに発展させる能力により、すぐに上級幹部や投資家の注目を集めました。`,

                definingMoment: `ブライアンのキャリアにおける決定的な瞬間は、主要なピッチコンペティションでの出来事でした。最年少の参加者であったにもかかわらず、革新的なアイデアと自信に満ちたプレゼンテーションで経験豊富な専門家を感動させ、最終的に1位を獲得しました。この経験により、野心とビジョンは年齢によって制限されるものではないという信念が強化されました。`,

                challengesAndLessons: `代表取締役として、ブライアンは革新性、包容性、長期的なインパクトに基づいて繁栄する目的主導型企業の構築に取り組んでいます。謙遜と勇気をもってリーダーシップを発揮し、真のリーダーシップとは他者に奉仕し、地に足をつけ、チームが大きな夢を持ち大胆に行動することを鼓舞することだと信じています。彼の個人的なモットーは彼のアプローチを反映しています：「私たちが成功するのは、懸命に働き、ビジョン、誠実さ、行動をもって前進するからです。」`,

                bio: `ブライアン・ペレスは、インスパイア・アライアンス・ファンド・グループの代表取締役を務める、ダイナミックで先見性のあるリーダーです。わずか23歳で同職に任命されたブライアンは、組織に現代的な視点と大胆なリーダーシップをもたらし、明確なビジョン、結果重視の考え方、目的意識を持った経営アプローチにより、同僚や指導者から敬意を集めています。\n\n代表取締役への道のりは、忍耐力、革新性、そして真の変革への願いによって特徴づけられています。大学時代から学生リーダーとして活動し、限られた資源でありながら大きなビジョンを持ったスタートアップを設立しました。起業家精神とアイデアを成功するビジネスモデルに発展させる能力により、すぐに上級幹部や投資家の注目を集めました。\n\nブライアンのキャリアにおける決定的な瞬間は、主要なピッチコンペティションでの出来事でした。最年少の参加者であったにもかかわらず、革新的なアイデアと自信に満ちたプレゼンテーションで経験豊富な専門家を感動させ、最終的に1位を獲得しました。この経験により、野心とビジョンは年齢によって制限されるものではないという信念が強化されました。\n\n代表取締役として、ブライアンは革新性、包容性、長期的なインパクトに基づいて繁栄する目的主導型企業の構築に取り組んでいます。謙遜と勇気をもってリーダーシップを発揮し、真のリーダーシップとは他者に奉仕し、地に足をつけ、チームが大きな夢を持ち大胆に行動することを鼓舞することだと信じています。彼の個人的なモットーは彼のアプローチを反映しています：「私たちが成功するのは、懸命に働き、ビジョン、誠実さ、行動をもって前進するからです。」`,

                expertise: ['テクノロジーリーダーシップ', 'システムアーキテクチャ', 'デジタルイノベーション', 'サイバーセキュリティ', '戦略的計画', 'チームリーダーシップ'],
                education: 'コンピュータ工学学士',
                achievements: [
                    '23歳で会社史上最年少の代表取締役に就任',
                    'モバイルアプリ開発コンペティションで1位受賞',
                    '数学・科学コミュニティで信頼とサポートを獲得',
                    'Inspire Walletという包括的なフィンテックモバイルアプリを実装',
                    'フードチェーン企業向けの高性能ロボット食事サーバーを構築'
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
                introduction: `Rhia Alberto serves as Vice President of Inspire Alliance Fund Group, bringing extensive experience in business operations and strategic planning to support organizational development and expansion. Her leadership approach combines analytical precision with creative innovation, driving the company's operational excellence.`,

                journeyToLeadership: `Rhia's path to leadership began with her passion for operational efficiency and business strategy. She developed her expertise through various roles in business management, always focusing on building systems that scale and processes that deliver consistent results.`,

                definingMoment: `A pivotal moment in Rhia's career came when she successfully restructured a complex operational framework that increased efficiency by 40%. This achievement demonstrated her ability to transform challenges into opportunities for growth.`,

                challengesAndLessons: `As Vice President, Rhia is committed to fostering a culture of continuous improvement and innovation. She believes that successful leadership is about empowering teams to achieve their best while maintaining operational excellence.`,

                bio: `Rhia Alberto serves as Vice President of Inspire Alliance Fund Group, bringing extensive experience in business operations and strategic planning. Her leadership combines analytical precision with creative innovation.\n\nHer path to leadership began with passion for operational efficiency and business strategy, developing expertise through various business management roles.\n\nA pivotal moment was restructuring a complex operational framework that increased efficiency by 40%.\n\nAs Vice President, Rhia fosters continuous improvement and innovation, believing leadership is about empowering teams while maintaining operational excellence.`,

                expertise: ['Business Operations', 'Strategic Planning', 'Process Optimization', 'Team Management', 'Organizational Development', 'Project Management'],
                education: 'BS Business Administration',
                achievements: [
                    'Vice President of major financial services company',
                    'Increased operational efficiency by 40% through strategic restructuring',
                    'Led multiple organizational development initiatives',
                    'Implemented comprehensive business process improvements',
                    'Recognized for excellence in strategic planning and execution'
                ]
            },
            ja: {
                introduction: `リア・アルベルトは、インスパイア・アライアンス・ファンド・グループの副社長として、組織開発と拡大を支援するために、事業運営と戦略立案における豊富な経験をもたらしています。`,

                journeyToLeadership: `リアのリーダーシップへの道は、運営効率とビジネス戦略への情熱から始まりました。彼女は、拡張可能なシステムと一貫した結果を提供するプロセスの構築に常に焦点を当てながら、事業管理の様々な役割を通じて専門知識を開発しました。`,

                definingMoment: `リアのキャリアにおける重要な瞬間は、効率を40％向上させる複雑な運営フレームワークの再構築に成功したときでした。`,

                challengesAndLessons: `副社長として、リアは継続的改善と革新の文化を育成することにコミットしています。彼女は、成功するリーダーシップとは、運営の卓越性を維持しながらチームが最高の成果を達成できるようにすることだと信じています。`,

                bio: `リア・アルベルトは、インスパイア・アライアンス・ファンド・グループの副社長として、事業運営と戦略立案における豊富な経験をもたらしています。\n\nリーダーシップへの道は運営効率とビジネス戦略への情熱から始まり、事業管理の様々な役割を通じて専門知識を開発しました。\n\n重要な瞬間は効率を40％向上させる複雑な運営フレームワークの再構築に成功したときでした。\n\n副社長として、継続的改善と革新の文化を育成することにコミットしています。`,

                expertise: ['事業運営', '戦略立案', 'プロセス最適化', 'チーム管理', '組織開発', 'プロジェクト管理'],
                education: '経営学学士',
                achievements: [
                    '大手金融サービス会社の副社長',
                    '戦略的再構築により運営効率を40％向上',
                    '複数の組織開発イニシアチブを主導',
                    '包括的なビジネスプロセス改善を実装',
                    '戦略立案と実行における卓越性で認められる'
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
                introduction: `Attorney Renato Pineda serves as Non-Executive Director of Inspire Alliance Fund Group, bringing extensive experience in corporate law and regulatory compliance. He provides strategic legal guidance and oversight, ensuring all operations comply with Philippine regulations and international standards.`,

                journeyToLeadership: `Attorney Pineda's journey in legal practice spans over two decades, with specialization in corporate governance, financial regulations, and compliance frameworks. His expertise has been crucial in guiding organizations through complex regulatory environments.`,

                definingMoment: `A defining moment in his career was successfully navigating a major regulatory restructuring that protected client interests while ensuring full compliance with new financial regulations.`,

                challengesAndLessons: `As Non-Executive Director, Attorney Pineda believes in proactive oversight and transparent governance. He emphasizes building robust compliance frameworks that support sustainable business growth and stakeholder trust.`,

                bio: `Attorney Renato Pineda serves as Non-Executive Director, bringing extensive experience in corporate law and regulatory compliance.\n\nHis legal practice spans over two decades, specializing in corporate governance, financial regulations, and compliance frameworks.\n\nA defining moment was navigating major regulatory restructuring while protecting client interests.\n\nHe believes in proactive oversight and transparent governance, emphasizing robust compliance frameworks.`,

                expertise: ['Corporate Law', 'Regulatory Compliance', 'Financial Regulations', 'Corporate Governance', 'Risk Management', 'Legal Strategy'],
                education: 'Juris Doctor (JD)',
                achievements: [
                    'Over 20 years of legal practice in corporate law',
                    'Successfully guided major regulatory compliance initiatives',
                    'Expert in Philippine and international financial regulations',
                    'Recognized for excellence in corporate governance',
                    'Led multiple complex legal restructuring projects'
                ]
            },
            ja: {
                introduction: `レナート・ピネダ弁護士は、インスパイア・アライアンス・ファンド・グループの社外取締役として、企業法と規制遵守における豊富な経験をもたらしています。`,

                journeyToLeadership: `ピネダ弁護士の法務実践における旅路は20年以上にわたり、企業ガバナンス、金融規制、コンプライアンス・フレームワークを専門としています。`,

                definingMoment: `キャリアにおける決定的な瞬間は、新しい金融規制への完全な遵守を確保しながらクライアントの利益を保護した主要な規制再構築を成功裏に乗り切ったことでした。`,

                challengesAndLessons: `社外取締役として、積極的な監督と透明なガバナンスを信じています。持続可能なビジネス成長とステークホルダーの信頼をサポートする堅牢なコンプライアンス・フレームワークの構築を重視しています。`,

                bio: `レナート・ピネダ弁護士は、社外取締役として企業法と規制遵守における豊富な経験をもたらしています。\n\n法務実践は20年以上にわたり、企業ガバナンス、金融規制、コンプライアンス・フレームワークを専門としています。\n\n決定的な瞬間は、クライアントの利益を保護した主要な規制再構築を成功裏に乗り切ったことでした。\n\n積極的な監督と透明なガバナンスを信じ、堅牢なコンプライアンス・フレームワークの構築を重視しています。`,

                expertise: ['企業法', '規制遵守', '金融規制', '企業ガバナンス', 'リスク管理', '法的戦略'],
                education: '法務博士（JD）',
                achievements: [
                    '企業法における20年以上の法務実践',
                    '主要な規制遵守イニシアチブを成功裏に指導',
                    'フィリピンおよび国際金融規制の専門家',
                    '企業ガバナンスにおける卓越性で認められる',
                    '複数の複雑な法的再構築プロジェクトを主導'
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
                introduction: `Freddie Reyes serves as Non-Executive Director of Inspire Alliance Fund Group, bringing seasoned expertise in financial management and investment strategies. His extensive background in business operations contributes valuable industry insights to the board.`,

                journeyToLeadership: `Freddie's career in finance and business management spans multiple decades, developing expertise in investment analysis, financial risk assessment, and strategic business development.`,

                definingMoment: `A significant milestone was his successful management of a complex investment restructuring that delivered exceptional returns while minimizing risk exposure.`,

                challengesAndLessons: `As Non-Executive Director, Freddie emphasizes sound financial governance and strategic investment decisions. He believes sustainable growth comes from careful financial planning and strong financial controls.`,

                bio: `Freddie Reyes serves as Non-Executive Director, bringing seasoned expertise in financial management and investment strategies.\n\nHis career spans multiple decades, developing expertise in investment analysis, financial risk assessment, and strategic business development.\n\nA significant milestone was managing complex investment restructuring that delivered exceptional returns.\n\nHe emphasizes sound financial governance and believes sustainable growth comes from careful planning and strong controls.`,

                expertise: ['Financial Management', 'Investment Strategies', 'Risk Assessment', 'Portfolio Management', 'Business Development', 'Financial Planning'],
                education: 'BS Finance',
                achievements: [
                    'Over 25 years of experience in financial management',
                    'Successfully managed complex investment restructuring projects',
                    'Expert in financial risk assessment and mitigation',
                    'Proven track record in investment portfolio management',
                    'Recognized for excellence in strategic financial planning'
                ]
            },
            ja: {
                introduction: `フレディ・レイエスは、インスパイア・アライアンス・ファンド・グループの社外取締役として、財務管理と投資戦略における経験豊富な専門知識をもたらしています。`,

                journeyToLeadership: `フレディの金融および事業管理におけるキャリアは数十年にわたり、投資分析、財務リスク評価、戦略的事業開発において専門知識を開発しました。`,

                definingMoment: `キャリアにおける重要なマイルストーンは、リスクエクスポージャーを最小化しながら例外的なリターンを提供した複雑な投資再構築の成功的な管理でした。`,

                challengesAndLessons: `社外取締役として、健全な財務ガバナンスと戦略的投資決定の重要性を強調しています。持続可能な成長は慎重な財務計画と強力な財務統制から生まれると信じています。`,

                bio: `フレディ・レイエスは、社外取締役として財務管理と投資戦略における経験豊富な専門知識をもたらしています。\n\nキャリアは数十年にわたり、投資分析、財務リスク評価、戦略的事業開発において専門知識を開発しました。\n\n重要なマイルストーンは、例外的なリターンを提供した複雑な投資再構築の管理でした。\n\n健全な財務ガバナンスを重視し、持続可能な成長は慎重な計画と強力な統制から生まれると信じています。`,

                expertise: ['財務管理', '投資戦略', 'リスク評価', 'ポートフォリオ管理', '事業開発', '財務計画'],
                education: '金融学学士',
                achievements: [
                    '財務管理における25年以上の経験',
                    '複雑な投資再構築プロジェクトの成功的な管理',
                    '財務リスク評価と軽減の専門家',
                    '投資ポートフォリオ管理における実績',
                    '戦略的財務計画における卓越性で認められる'
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
                introduction: `Ronaldo Castillo serves as Non-Executive Director of Inspire Alliance Fund Group, bringing accomplished experience in international business and market development. His global perspective provides valuable strategic insights to the board.`,

                journeyToLeadership: `Ronaldo's career has focused on international business development and market expansion strategies, successfully leading initiatives across multiple markets and developing expertise in global business operations.`,

                definingMoment: `A pivotal moment was successfully orchestrating a major international market entry strategy that resulted in significant business expansion and established new market presence.`,

                challengesAndLessons: `As Non-Executive Director, Ronaldo emphasizes global market awareness and strategic international positioning. He believes sustainable growth requires understanding diverse markets and building strong international partnerships.`,

                bio: `Ronaldo Castillo serves as Non-Executive Director, bringing accomplished experience in international business and market development.\n\nHis career focused on international business development and market expansion strategies across multiple markets.\n\nA pivotal moment was orchestrating major international market entry strategy that resulted in significant business expansion.\n\nHe emphasizes global market awareness and believes sustainable growth requires understanding diverse markets and building strong partnerships.`,

                expertise: ['International Business', 'Market Development', 'Global Strategy', 'Cross-border Operations', 'Partnership Development', 'Market Analysis'],
                education: 'BS International Business',
                achievements: [
                    'Led successful international market expansion initiatives',
                    'Established strategic partnerships across multiple countries',
                    'Expert in cross-border business operations',
                    'Successfully navigated complex international regulations',
                    'Recognized for excellence in global business development'
                ]
            },
            ja: {
                introduction: `ロナルド・カスティーヨは、インスパイア・アライアンス・ファンド・グループの社外取締役として、国際ビジネスと市場開発における熟練した経験をもたらしています。`,

                journeyToLeadership: `ロナルドのキャリアは、国際的なビジネス開発と市場拡大戦略に焦点を当て、複数の市場にわたってイニシアチブを成功裏に主導し、グローバルビジネス運営において専門知識を開発しました。`,

                definingMoment: `重要な瞬間は、重要なビジネス拡大をもたらし新しい市場プレゼンスを確立した主要な国際市場参入戦略を成功裏に組織化したことでした。`,

                challengesAndLessons: `社外取締役として、グローバル市場の認識と戦略的国際ポジショニングの重要性を強調しています。持続可能な成長には多様な市場の理解と強力な国際パートナーシップが必要だと信じています。`,

                bio: `ロナルド・カスティーヨは、社外取締役として国際ビジネスと市場開発における熟練した経験をもたらしています。\n\nキャリアは国際的なビジネス開発と市場拡大戦略に焦点を当て、複数の市場にわたってイニシアチブを主導しました。\n\n重要な瞬間は、重要なビジネス拡大をもたらした主要な国際市場参入戦略の組織化でした。\n\nグローバル市場の認識を重視し、持続可能な成長には多様な市場の理解と強力なパートナーシップが必要だと信じています。`,

                expertise: ['国際ビジネス', '市場開発', 'グローバル戦略', '国境を越えた業務', 'パートナーシップ開発', '市場分析'],
                education: '国際ビジネス学士',
                achievements: [
                    '成功した国際市場拡大イニシアチブを主導',
                    '複数の国にわたる戦略的パートナーシップを確立',
                    '国境を越えたビジネス運営の専門家',
                    '複雑な国際規制を成功裏にナビゲート',
                    'グローバルビジネス開発における卓越性で認められる'
                ]
            }
        }
    },
    'carlos-perez': {
        name: 'Carlos Perez',
        position: 'chiefCareerOfficer',
        category: 'corporateOfficers',
        since: '2020',
        content: {
            en: {
                introduction: `Carlos Perez serves as Chief of Career Track Officer at Inspire Alliance Fund Group, providing strategic oversight of career development programs, professional growth initiatives, and talent advancement pathways for organizational excellence. His expertise in human capital development drives the company's commitment to employee growth and success.`,

                journeyToLeadership: `Carlos began his career in human resources and organizational development, focusing on creating comprehensive career development frameworks. His passion for helping others achieve their professional goals led him to specialize in career planning, skills development, and leadership training programs.`,

                definingMoment: `A defining moment came when Carlos successfully implemented a company-wide career advancement program that resulted in a 60% increase in internal promotions and significantly improved employee satisfaction. This achievement demonstrated his ability to create meaningful professional development opportunities.`,

                challengesAndLessons: `As Chief Career Officer, Carlos believes that investing in people is the foundation of organizational success. He focuses on creating clear career pathways, providing skill development opportunities, and ensuring that every team member has the support they need to achieve their professional aspirations.`,

                bio: `Carlos Perez serves as Chief of Career Track Officer at Inspire Alliance Fund Group, providing strategic oversight of career development programs and professional growth initiatives.\n\nHis career began in human resources and organizational development, specializing in career planning, skills development, and leadership training programs.\n\nA defining moment was implementing a company-wide career advancement program that increased internal promotions by 60% and improved employee satisfaction.\n\nCarlos believes that investing in people is the foundation of success, focusing on clear career pathways and comprehensive skill development opportunities.`,

                expertise: ['Career Development', 'Human Resources', 'Leadership Training', 'Organizational Development', 'Performance Management', 'Talent Acquisition'],
                education: 'BS Human Resources Management',
                achievements: [
                    'Implemented career advancement program increasing promotions by 60%',
                    'Developed comprehensive leadership training initiatives',
                    'Successfully managed talent acquisition and retention strategies',
                    'Created innovative professional development frameworks',
                    'Recognized for excellence in human capital development'
                ]
            },
            ja: {
                introduction: `カルロス・ペレスは、インスパイア・アライアンス・ファンド・グループのチーフキャリアトラック・オフィサーとして、組織の卓越性のためのキャリア開発プログラム、専門的成長イニシアチブ、人材育成経路の戦略的監督を提供しています。人的資本開発における彼の専門知識は、従業員の成長と成功への会社のコミットメントを推進しています。`,

                journeyToLeadership: `カルロスは人事と組織開発でキャリアを始め、包括的なキャリア開発フレームワークの作成に焦点を当てました。他の人が専門的目標を達成するのを助けることへの情熱により、キャリア計画、スキル開発、リーダーシップ研修プログラムを専門とするようになりました。`,

                definingMoment: `決定的な瞬間は、内部昇進を60％増加させ、従業員満足度を大幅に改善した全社的なキャリア向上プログラムをカルロスが成功裏に実装したときでした。この成果は、意義のある専門開発機会を創出する彼の能力を実証しました。`,

                challengesAndLessons: `チーフキャリアオフィサーとして、カルロスは人々への投資が組織の成功の基盤であると信じています。彼は明確なキャリア経路を作成し、スキル開発機会を提供し、すべてのチームメンバーが専門的な志を達成するために必要なサポートを持つことを確保することに焦点を当てています。`,

                bio: `カルロス・ペレスは、インスパイア・アライアンス・ファンド・グループのチーフキャリアトラック・オフィサーとして、キャリア開発プログラムと専門的成長イニシアチブの戦略的監督を提供しています。\n\nキャリアは人事と組織開発で始まり、キャリア計画、スキル開発、リーダーシップ研修プログラムを専門としました。\n\n決定的な瞬間は、内部昇進を60％増加させ従業員満足度を改善した全社的なキャリア向上プログラムの実装でした。\n\nカルロスは人々への投資が成功の基盤であると信じ、明確なキャリア経路と包括的なスキル開発機会に焦点を当てています。`,

                expertise: ['キャリア開発', '人事', 'リーダーシップ研修', '組織開発', 'パフォーマンス管理', '人材獲得'],
                education: '人事管理学士',
                achievements: [
                    '昇進を60％増加させるキャリア向上プログラムを実装',
                    '包括的なリーダーシップ研修イニシアチブを開発',
                    '人材獲得と保持戦略を成功裏に管理',
                    '革新的な専門開発フレームワークを作成',
                    '人的資本開発における卓越性で認められる'
                ]
            }
        }
    },
    'jaime-flores': {
        name: 'Jaime Flores',
        position: 'chiefTechnologyOfficer',
        category: 'corporateOfficers',
        since: '2019',
        content: {
            en: {
                introduction: `Jaime Flores serves as Chief of Technology Officer at Inspire Alliance Fund Group, providing strategic leadership in technology innovation, digital transformation, and systems architecture. His expertise in cutting-edge technologies and digital solutions drives the company's technological advancement and competitive edge in the financial services industry.`,

                journeyToLeadership: `Jaime's career in technology leadership spans over 15 years, beginning as a software engineer and progressing through various technical and management roles. His passion for emerging technologies and digital innovation led him to specialize in fintech solutions, blockchain technology, and enterprise system architecture.`,

                definingMoment: `A transformative moment in Jaime's career was leading the development of the company's flagship fintech platform, Inspire Wallet, which revolutionized how the organization delivers financial services. This project showcased his ability to translate complex technical concepts into user-friendly solutions that drive business growth.`,

                challengesAndLessons: `As Chief Technology Officer, Jaime believes that technology should serve humanity and create meaningful impact. He focuses on building scalable, secure, and innovative solutions while fostering a culture of continuous learning and technological excellence. His leadership philosophy centers on empowering teams to push technological boundaries while maintaining the highest standards of security and reliability.`,

                bio: `Jaime Flores serves as Chief of Technology Officer at Inspire Alliance Fund Group, providing strategic leadership in technology innovation and digital transformation.\n\nHis career spans over 15 years in technology leadership, progressing from software engineer through various technical and management roles, specializing in fintech solutions and enterprise architecture.\n\nA transformative moment was leading the development of Inspire Wallet, the company's flagship fintech platform that revolutionized financial service delivery.\n\nJaime believes technology should serve humanity and create meaningful impact, focusing on scalable, secure solutions while fostering continuous learning and technological excellence.`,

                expertise: ['Technology Strategy', 'Digital Innovation', 'Fintech Solutions', 'Blockchain Technology', 'Enterprise Architecture', 'Cybersecurity', 'Software Development', 'Team Leadership'],
                education: 'BS Computer Science, MS Information Systems',
                achievements: [
                    'Led development of Inspire Wallet fintech platform',
                    'Implemented enterprise-wide digital transformation initiatives',
                    'Successfully architected scalable technology infrastructure',
                    'Built high-performing technology teams',
                    'Pioneered blockchain integration in financial services',
                    'Recognized for innovation in fintech solutions'
                ]
            },
            ja: {
                introduction: `ハイメ・フローレスは、インスパイア・アライアンス・ファンド・グループの最高技術責任者として、技術革新、デジタル変革、システムアーキテクチャにおける戦略的リーダーシップを提供しています。最先端技術とデジタルソリューションにおける彼の専門知識は、金融サービス業界における会社の技術的進歩と競争優位性を推進しています。`,

                journeyToLeadership: `ハイメの技術リーダーシップにおけるキャリアは15年以上にわたり、ソフトウェアエンジニアとして始まり、様々な技術および管理職を経て進歩しました。新興技術とデジタルイノベーションへの情熱により、フィンテックソリューション、ブロックチェーン技術、エンタープライズシステムアーキテクチャを専門とするようになりました。`,

                definingMoment: `ハイメのキャリアにおける変革的な瞬間は、組織の金融サービス提供方法を革命化した会社の主要フィンテックプラットフォームであるInspire Walletの開発を主導したことでした。このプロジェクトは、複雑な技術概念をビジネス成長を推進するユーザーフレンドリーなソリューションに変換する彼の能力を実証しました。`,

                challengesAndLessons: `最高技術責任者として、ハイメは技術が人類に奉仕し、意義のあるインパクトを創出すべきだと信じています。彼は、継続的学習と技術的卓越性の文化を育成しながら、拡張可能で安全かつ革新的なソリューションの構築に焦点を当てています。彼のリーダーシップ哲学は、最高水準のセキュリティと信頼性を維持しながら技術的境界を押し広げるようチームを力づけることを中心としています。`,

                bio: `ハイメ・フローレスは、インスパイア・アライアンス・ファンド・グループの最高技術責任者として、技術革新とデジタル変革における戦略的リーダーシップを提供しています。\n\nキャリアは技術リーダーシップにおいて15年以上にわたり、ソフトウェアエンジニアから様々な技術・管理職を経て進歩し、フィンテックソリューションとエンタープライズアーキテクチャを専門としています。\n\n変革的な瞬間は、金融サービス提供を革命化した会社の主要フィンテックプラットフォームInspire Walletの開発を主導したことでした。\n\nハイメは技術が人類に奉仕し意義のあるインパクトを創出すべきだと信じ、継続的学習と技術的卓越性を育成しながら拡張可能で安全なソリューションに焦点を当てています。`,

                expertise: ['技術戦略', 'デジタルイノベーション', 'フィンテックソリューション', 'ブロックチェーン技術', 'エンタープライズアーキテクチャ', 'サイバーセキュリティ', 'ソフトウェア開発', 'チームリーダーシップ'],
                education: 'コンピュータ科学学士、情報システム修士',
                achievements: [
                    'Inspire Walletフィンテックプラットフォームの開発を主導',
                    '企業全体のデジタル変革イニシアチブを実装',
                    '拡張可能な技術インフラストラクチャを成功裏に設計',
                    '高性能技術チームを構築',
                    '金融サービスにおけるブロックチェーン統合を先駆け',
                    'フィンテックソリューションにおけるイノベーションで認められる'
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
                introduction: `Gerlie De Asis serves as HR/Administrative Officer at Inspire Alliance Fund Group, providing comprehensive human resources management, administrative operations, and organizational development initiatives. Her expertise in HR management and employee relations drives the company's commitment to creating a positive workplace culture.`,

                journeyToLeadership: `Gerlie's career in human resources began with her passion for people development and organizational excellence. She has developed expertise in HR policies, employee engagement, and administrative management through various roles in different industries.`,

                definingMoment: `A significant milestone was implementing a comprehensive employee wellness program that increased employee satisfaction by 45% and reduced turnover rates significantly, demonstrating her commitment to employee welfare.`,

                challengesAndLessons: `As HR Officer, Gerlie believes that employees are the most valuable asset of any organization. She focuses on creating supportive work environments, implementing fair HR policies, and ensuring compliance with labor regulations.`,

                bio: `Gerlie De Asis serves as HR/Administrative Officer, providing comprehensive human resources management and organizational development initiatives.\n\nHer career began with passion for people development and organizational excellence, developing expertise in HR policies and employee engagement.\n\nA significant milestone was implementing an employee wellness program that increased satisfaction by 45%.\n\nShe believes employees are the most valuable asset, focusing on supportive work environments and fair HR policies.`,

                expertise: ['Human Resources', 'Employee Relations', 'Administrative Management', 'Policy Development', 'Performance Management', 'Compliance'],
                education: 'BS Psychology',
                achievements: [
                    'Implemented employee wellness program increasing satisfaction by 45%',
                    'Successfully managed HR policies and procedures',
                    'Reduced employee turnover through effective engagement strategies',
                    'Ensured compliance with labor regulations and standards',
                    'Recognized for excellence in employee relations'
                ]
            },
            ja: {
                introduction: `ガーリー・デ・アシスは、インスパイア・アライアンス・ファンド・グループの人事・管理担当者として、包括的な人事管理、管理業務、組織開発イニシアチブを提供しています。`,

                journeyToLeadership: `ガーリーの人事におけるキャリアは、人材開発と組織の卓越性への情熱から始まりました。様々な業界の異なる役割を通じて、人事政策、従業員エンゲージメント、管理業務において専門知識を開発しました。`,

                definingMoment: `重要なマイルストーンは、従業員満足度を45％向上させ離職率を大幅に削減した包括的な従業員ウェルネスプログラムの実装でした。`,

                challengesAndLessons: `人事担当者として、従業員は組織の最も価値ある資産であると信じています。支援的な職場環境の創造、公正な人事政策の実装、労働規制の遵守確保に焦点を当てています。`,

                bio: `ガーリー・デ・アシスは、人事・管理担当者として包括的な人事管理と組織開発イニシアチブを提供しています。\n\nキャリアは人材開発と組織の卓越性への情熱から始まり、人事政策と従業員エンゲージメントにおいて専門知識を開発しました。\n\n重要なマイルストーンは、満足度を45％向上させた従業員ウェルネスプログラムの実装でした。\n\n従業員は最も価値ある資産であると信じ、支援的な職場環境と公正な人事政策に焦点を当てています。`,

                expertise: ['人事', '従業員関係', '管理業務', '政策開発', 'パフォーマンス管理', 'コンプライアンス'],
                education: '心理学学士',
                achievements: [
                    '満足度を45％向上させる従業員ウェルネスプログラムを実装',
                    '人事政策と手続きを成功裏に管理',
                    '効果的なエンゲージメント戦略により従業員離職率を削減',
                    '労働規制と基準の遵守を確保',
                    '従業員関係における卓越性で認められる'
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
                introduction: `Anne Colinares serves as Assistant HR/Administrative Officer at Inspire Alliance Fund Group, providing HR support services, administrative coordination, and employee relations management. Her dedication to supporting HR operations and employee welfare contributes to maintaining positive workplace dynamics.`,

                journeyToLeadership: `Anne's career in HR support began with her commitment to helping employees and supporting organizational operations. She has developed skills in HR administration, employee communication, and administrative coordination.`,

                definingMoment: `A key achievement was streamlining HR administrative processes that improved processing efficiency by 35% and enhanced employee service delivery, showcasing her attention to detail and process improvement skills.`,

                challengesAndLessons: `As Assistant HR Officer, Anne focuses on providing excellent support to employees and ensuring smooth HR operations. She believes in the importance of clear communication and efficient administrative processes.`,

                bio: `Anne Colinares serves as Assistant HR/Administrative Officer, providing HR support services and employee relations management.\n\nHer career began with commitment to helping employees and supporting organizational operations, developing skills in HR administration and coordination.\n\nA key achievement was streamlining HR processes that improved efficiency by 35%.\n\nShe focuses on excellent employee support and believes in clear communication and efficient processes.`,

                expertise: ['HR Administration', 'Employee Support', 'Administrative Coordination', 'Process Improvement', 'Communication', 'Documentation'],
                education: 'BS Business Administration',
                achievements: [
                    'Streamlined HR processes improving efficiency by 35%',
                    'Enhanced employee service delivery systems',
                    'Successfully coordinated administrative operations',
                    'Improved HR documentation and record keeping',
                    'Recognized for excellence in employee support services'
                ]
            },
            ja: {
                introduction: `アン・コリナレスは、インスパイア・アライアンス・ファンド・グループの人事・管理アシスタントとして、人事サポートサービス、管理調整、従業員関係管理を提供しています。`,

                journeyToLeadership: `アンの人事サポートにおけるキャリアは、従業員を支援し組織運営をサポートすることへのコミットメントから始まりました。人事管理、従業員コミュニケーション、管理調整においてスキルを開発しました。`,

                definingMoment: `主要な成果は、処理効率を35％改善し従業員サービス提供を向上させた人事管理プロセスの合理化でした。`,

                challengesAndLessons: `人事アシスタントとして、従業員への優れたサポートの提供と円滑な人事運営の確保に焦点を当てています。明確なコミュニケーションと効率的な管理プロセスの重要性を信じています。`,

                bio: `アン・コリナレスは、人事・管理アシスタントとして人事サポートサービスと従業員関係管理を提供しています。\n\nキャリアは従業員支援と組織運営サポートへのコミットメントから始まり、人事管理と調整においてスキルを開発しました。\n\n主要な成果は、効率を35％改善した人事プロセスの合理化でした。\n\n優れた従業員サポートに焦点を当て、明確なコミュニケーションと効率的なプロセスを信じています。`,

                expertise: ['人事管理', '従業員サポート', '管理調整', 'プロセス改善', 'コミュニケーション', '文書化'],
                education: '経営学学士',
                achievements: [
                    '効率を35％改善する人事プロセスの合理化',
                    '従業員サービス提供システムの向上',
                    '管理業務の成功的な調整',
                    '人事文書化と記録保持の改善',
                    '従業員サポートサービスにおける卓越性で認められる'
                ]
            }
        }
    },
    'neil-brion': {
        name: 'Neil Brion',
        position: 'security',
        category: 'corporateOfficers',
        since: '2019',
        content: {
            en: {
                introduction: `Neil Brion serves as Security Officer at Inspire Alliance Fund Group, providing comprehensive security management, risk mitigation strategies, and protection of company assets and personnel. His expertise in security protocols and safety management ensures a secure working environment for all stakeholders.`,

                journeyToLeadership: `Neil's career in security management spans over a decade, with experience in corporate security, risk assessment, and safety protocols. His dedication to protecting people and assets has made him a trusted security professional.`,

                definingMoment: `A critical moment was successfully implementing a comprehensive security upgrade that prevented potential security breaches and enhanced overall safety protocols, demonstrating his proactive approach to security management.`,

                challengesAndLessons: `As Security Officer, Neil believes that prevention is better than cure. He focuses on implementing robust security measures, conducting regular assessments, and maintaining vigilance to protect all company stakeholders.`,

                bio: `Neil Brion serves as Security Officer, providing comprehensive security management and protection of company assets and personnel.\n\nHis career spans over a decade in corporate security, risk assessment, and safety protocols.\n\nA critical moment was implementing security upgrades that prevented potential breaches and enhanced safety protocols.\n\nHe believes prevention is better than cure, focusing on robust security measures and regular assessments.`,

                expertise: ['Security Management', 'Risk Assessment', 'Safety Protocols', 'Asset Protection', 'Emergency Response', 'Surveillance Systems'],
                education: 'Diploma in Security Management',
                achievements: [
                    'Implemented comprehensive security upgrades',
                    'Successfully prevented security breaches',
                    'Enhanced safety protocols and procedures',
                    'Maintained zero security incidents record',
                    'Recognized for excellence in security management'
                ]
            },
            ja: {
                introduction: `ニール・ブリオンは、インスパイア・アライアンス・ファンド・グループのセキュリティ担当者として、包括的なセキュリティ管理、リスク軽減戦略、会社資産と人員の保護を提供しています。`,

                journeyToLeadership: `ニールのセキュリティ管理におけるキャリアは10年以上にわたり、企業セキュリティ、リスク評価、安全プロトコルの経験があります。人と資産を保護することへの献身により、信頼できるセキュリティ専門家になりました。`,

                definingMoment: `重要な瞬間は、潜在的なセキュリティ侵害を防ぎ全体的な安全プロトコルを向上させた包括的なセキュリティアップグレードを成功裏に実装したことでした。`,

                challengesAndLessons: `セキュリティ担当者として、予防は治療よりも優れていると信じています。堅牢なセキュリティ対策の実装、定期的な評価の実施、すべての会社のステークホルダーを保護するための警戒の維持に焦点を当てています。`,

                bio: `ニール・ブリオンは、セキュリティ担当者として包括的なセキュリティ管理と会社資産・人員の保護を提供しています。\n\nキャリアは企業セキュリティ、リスク評価、安全プロトコルにおいて10年以上にわたります。\n\n重要な瞬間は、潜在的な侵害を防ぎ安全プロトコルを向上させたセキュリティアップグレードの実装でした。\n\n予防は治療よりも優れていると信じ、堅牢なセキュリティ対策と定期的な評価に焦点を当てています。`,

                expertise: ['セキュリティ管理', 'リスク評価', '安全プロトコル', '資産保護', '緊急対応', '監視システム'],
                education: 'セキュリティ管理ディプロマ',
                achievements: [
                    '包括的なセキュリティアップグレードを実装',
                    'セキュリティ侵害を成功裏に防止',
                    '安全プロトコルと手続きを向上',
                    'セキュリティインシデントゼロ記録を維持',
                    'セキュリティ管理における卓越性で認められる'
                ]
            }
        }
    },
    'shelah-reynaldo': {
        name: 'Shelah Reynaldo',
        position: 'softwareDeveloper',
        category: 'corporateOfficers',
        since: '2020',
        content: {
            en: {
                introduction: `Shelah Reynaldo serves as Software Developer/Secretary at Inspire Alliance Fund Group, providing executive support, documentation management, and coordination of board and management communications. Her dual expertise in technology and administrative support makes her a valuable asset to the organization.`,

                journeyToLeadership: `Shelah's unique career path combines software development skills with executive support expertise. She has developed proficiency in both technical solutions and administrative excellence, bridging technology and business operations.`,

                definingMoment: `A notable achievement was developing a custom document management system that streamlined board communications and improved administrative efficiency by 40%, showcasing her ability to apply technical skills to business needs.`,

                challengesAndLessons: `In her dual role, Shelah focuses on leveraging technology to improve administrative processes while providing excellent executive support. She believes in using innovation to enhance organizational efficiency.`,

                bio: `Shelah Reynaldo serves as Software Developer/Secretary, providing executive support and documentation management.\n\nHer unique career combines software development skills with executive support expertise, bridging technology and business operations.\n\nA notable achievement was developing a document management system that improved efficiency by 40%.\n\nShe focuses on leveraging technology to improve administrative processes and believes in using innovation to enhance efficiency.`,

                expertise: ['Software Development', 'Executive Support', 'Documentation Management', 'System Development', 'Administrative Coordination', 'Communication'],
                education: 'BS Information Technology',
                achievements: [
                    'Developed custom document management system',
                    'Improved administrative efficiency by 40%',
                    'Successfully managed board communications',
                    'Streamlined executive support processes',
                    'Recognized for innovation in administrative technology'
                ]
            },
            ja: {
                introduction: `シェラ・レイナルドは、インスパイア・アライアンス・ファンド・グループのソフトウェア開発者・秘書として、役員サポート、文書管理、取締役会と経営陣のコミュニケーション調整を提供しています。`,

                journeyToLeadership: `シェラのユニークなキャリアパスは、ソフトウェア開発スキルと役員サポート専門知識を組み合わせています。技術ソリューションと管理の卓越性の両方において習熟度を開発し、技術とビジネス運営を橋渡ししています。`,

                definingMoment: `注目すべき成果は、取締役会コミュニケーションを合理化し管理効率を40％改善したカスタム文書管理システムの開発でした。`,

                challengesAndLessons: `二重の役割において、優れた役員サポートを提供しながら管理プロセスを改善するための技術の活用に焦点を当てています。組織効率を向上させるためのイノベーションの使用を信じています。`,

                bio: `シェラ・レイナルドは、ソフトウェア開発者・秘書として役員サポートと文書管理を提供しています。\n\nユニークなキャリアはソフトウェア開発スキルと役員サポート専門知識を組み合わせ、技術とビジネス運営を橋渡ししています。\n\n注目すべき成果は、効率を40％改善した文書管理システムの開発でした。\n\n管理プロセス改善のための技術活用に焦点を当て、効率向上のためのイノベーション使用を信じています。`,

                expertise: ['ソフトウェア開発', '役員サポート', '文書管理', 'システム開発', '管理調整', 'コミュニケーション'],
                education: '情報技術学士',
                achievements: [
                    'カスタム文書管理システムを開発',
                    '管理効率を40％改善',
                    '取締役会コミュニケーションを成功裏に管理',
                    '役員サポートプロセスを合理化',
                    '管理技術におけるイノベーションで認められる'
                ]
            }
        }
    },
    'joanne-hermosura': {
        name: 'Joanne Hermosura',
        position: 'secretary',
        category: 'corporateOfficers',
        since: '2021',
        content: {
            en: {
                introduction: `Joanne Hermosura serves as Secretary at Inspire Alliance Fund Group, providing administrative support, record keeping, and facilitation of corporate governance processes. Her attention to detail and organizational skills ensure smooth administrative operations and compliance with corporate requirements.`,

                journeyToLeadership: `Joanne's career in administrative support has been marked by her dedication to excellence in documentation, organization, and corporate compliance. She has developed expertise in secretarial duties and corporate governance support.`,

                definingMoment: `A significant achievement was implementing a comprehensive filing and documentation system that improved document retrieval efficiency by 50% and enhanced compliance record keeping.`,

                challengesAndLessons: `As Secretary, Joanne believes that attention to detail and accurate documentation are fundamental to corporate success. She focuses on maintaining high standards in administrative support and corporate compliance.`,

                bio: `Joanne Hermosura serves as Secretary, providing administrative support and facilitation of corporate governance processes.\n\nHer career has been marked by dedication to excellence in documentation, organization, and corporate compliance.\n\nA significant achievement was implementing a filing system that improved document retrieval efficiency by 50%.\n\nShe believes attention to detail and accurate documentation are fundamental to corporate success.`,

                expertise: ['Administrative Support', 'Documentation', 'Corporate Governance', 'Record Keeping', 'Organization', 'Compliance'],
                education: 'BS Office Administration',
                achievements: [
                    'Implemented comprehensive filing and documentation system',
                    'Improved document retrieval efficiency by 50%',
                    'Enhanced compliance record keeping processes',
                    'Successfully managed corporate governance documentation',
                    'Recognized for excellence in administrative support'
                ]
            },
            ja: {
                introduction: `ジョアン・ヘルモスラは、インスパイア・アライアンス・ファンド・グループの秘書として、管理サポート、記録保持、企業ガバナンスプロセスの促進を提供しています。`,

                journeyToLeadership: `ジョアンの管理サポートにおけるキャリアは、文書化、組織化、企業コンプライアンスにおける卓越性への献身によって特徴づけられています。秘書業務と企業ガバナンスサポートにおいて専門知識を開発しました。`,

                definingMoment: `重要な成果は、文書検索効率を50％改善しコンプライアンス記録保持を向上させた包括的なファイリングと文書化システムの実装でした。`,

                challengesAndLessons: `秘書として、細部への注意と正確な文書化が企業の成功の基本であると信じています。管理サポートと企業コンプライアンスにおいて高い基準を維持することに焦点を当てています。`,

                bio: `ジョアン・ヘルモスラは、秘書として管理サポートと企業ガバナンスプロセスの促進を提供しています。\n\nキャリアは文書化、組織化、企業コンプライアンスにおける卓越性への献身によって特徴づけられています。\n\n重要な成果は、文書検索効率を50％改善したファイリングシステムの実装でした。\n\n細部への注意と正確な文書化が企業成功の基本であると信じています。`,

                expertise: ['管理サポート', '文書化', '企業ガバナンス', '記録保持', '組織化', 'コンプライアンス'],
                education: 'オフィス管理学士',
                achievements: [
                    '包括的なファイリングと文書化システムを実装',
                    '文書検索効率を50％改善',
                    'コンプライアンス記録保持プロセスを向上',
                    '企業ガバナンス文書化を成功裏に管理',
                    '管理サポートにおける卓越性で認められる'
                ]
            }
        }
    }
    // Additional corporate officers would continue here...
};

// Helper function to get the current language from URL or localStorage
function getCurrentLanguage() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('selectedLanguage') || 'en';
    }
    return 'en';
}

// Helper function to get translations
function useTranslations() {
    const [currentLang, setCurrentLang] = useState('en');

    useEffect(() => {
        setCurrentLang(getCurrentLanguage());

        // Listen for language change events from Header component
        const handleLanguageChange = (event) => {
            setCurrentLang(event.detail.language);
        };

        window.addEventListener('languageChanged', handleLanguageChange);

        return () => {
            window.removeEventListener('languageChanged', handleLanguageChange);
        };
    }, []);

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[currentLang];
        for (const k of keys) {
            value = value?.[k];
        }
        return value || key;
    };

    return { t, currentLang };
}

// Helper function to get profile content based on language
function getProfileContent(profile, field) {
    const currentLang = getCurrentLanguage();
    return profile.content?.[currentLang]?.[field] || profile.content?.en?.[field] || '';
}

function ProfilePage({ params }) {
    const { slug } = React.use(params);
    const { t, currentLang } = useTranslations();

    // Get profile data
    const profile = profilesData[slug];

    if (!profile) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white mt-20">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <Link
                        href="/about"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        {t('profile.backToLeadership')}
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-8 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left - Profile Image */}
                        <div className="lg:col-span-4 text-center">
                            <div className="inline-block">
                                <Avatar
                                    name={profile.name}
                                    size={200}
                                    className="mx-auto mb-6 ring-4 ring-white/30 shadow-2xl"
                                />
                            </div>
                        </div>

                        {/* Right - Profile Header */}
                        <div className="lg:col-span-8 text-white">
                            <div className="mb-4">
                                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                                    {t('categories.' + profile.category)}
                                </span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                                {profile.name}
                            </h1>
                            <p className="text-xl lg:text-2xl text-blue-100 mb-6 font-medium">
                                {t('positions.' + profile.position)}
                            </p>
                            <div className="flex items-center text-blue-200 mb-8">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {t('profile.withCompanySince')} {profile.since}
                            </div>

                            {/* Introduction */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                                <p className="text-lg leading-relaxed text-white/90">
                                    {getProfileContent(profile, 'introduction')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Story Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Journey to Leadership */}
                            <div className="bg-white rounded-3xl shadow-xl p-10">
                                <div className="flex items-center mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900">{t('profile.journeyToLeadership')}</h2>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {getProfileContent(profile, 'journeyToLeadership')}
                                </p>
                            </div>

                            {/* Defining Moment */}
                            <div className="bg-white rounded-3xl shadow-xl p-10">
                                <div className="flex items-center mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-6">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900">{t('profile.definingMoment')}</h2>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {getProfileContent(profile, 'definingMoment')}
                                </p>
                            </div>

                            {/* Challenges & Lessons */}
                            <div className="bg-white rounded-3xl shadow-xl p-10">
                                <div className="flex items-center mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" />
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900">{t('profile.challengesAndLessons')}</h2>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {getProfileContent(profile, 'challengesAndLessons')}
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Quick Facts */}
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('profile.quickFacts')}</h3>
                                <div className="space-y-6">
                                    <div>
                                        <span className="text-sm text-gray-500 uppercase tracking-wide font-semibold">{t('profile.position')}</span>
                                        <p className="text-gray-900 font-bold text-lg">{t('positions.' + profile.position)}</p>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-500 uppercase tracking-wide font-semibold">{t('profile.department')}</span>
                                        <p className="text-gray-900 font-bold text-lg">{t('categories.' + profile.category)}</p>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-500 uppercase tracking-wide font-semibold">{t('profile.withCompanySince')}</span>
                                        <p className="text-gray-900 font-bold text-lg">{profile.since}</p>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-500 uppercase tracking-wide font-semibold">{t('profile.education')}</span>
                                        <p className="text-gray-900 font-bold text-lg">{getProfileContent(profile, 'education')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Areas of Expertise */}
                            <div className="bg-white rounded-3xl shadow-xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('profile.expertise')}</h3>
                                <div className="space-y-4">
                                    {(getProfileContent(profile, 'expertise') || []).map((skill, index) => (
                                        <div key={index} className="flex items-center p-3 bg-gray-50 rounded-xl">
                                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
                                            <span className="text-gray-800 font-medium">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Key Achievements */}
                            <div className="bg-white rounded-3xl shadow-xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('profile.achievements')}</h3>
                                <div className="space-y-4">
                                    {(getProfileContent(profile, 'achievements') || []).map((achievement, index) => (
                                        <div key={index} className="flex items-start p-4 bg-green-50 rounded-xl">
                                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-800 leading-relaxed font-medium">{achievement}</span>
                                        </div>
                                    ))}
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