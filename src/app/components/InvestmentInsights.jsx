"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const InvestmentInsights = () => {
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [activeTab, setActiveTab] = useState("performance");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const chartRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Large translation object for all investment insights content
  const translations = {
    en: {
      title: "Investment Performance & Insights",
      subtitle:
        "Discover how our strategic investment approach delivers superior risk-adjusted returns while maintaining focus on sustainable growth and responsible investing.",
      tabs: {
        performance: "Performance",
        philosophy: "Philosophy",
        marketInsights: "Market Insights",
        riskManagement: "Risk Management",
      },
      metrics: {
        investmentCapital: {
          title: "Investment Capital",
          subtitle: "Under Management",
        },
        annualReturn: {
          title: "Annual Return",
          subtitle: "5-Year Average",
        },
        annualRevenue: {
          title: "Annual Revenue",
          subtitle: "Growth Rate",
        },
        netReturn: {
          title: "Net Return",
          subtitle: "After Fees",
        },
        portfolioCompanies: {
          title: "Portfolio Companies",
          subtitle: "Active Investments",
        },
        sustainability: {
          title: "ESG Score",
          subtitle: "Investment Rating",
        },
        sharpeRatio: {
          title: "Sharpe Ratio",
          subtitle: "Risk-Adjusted Return",
        },
        maxDrawdown: {
          title: "Max Drawdown",
          subtitle: "Historical Risk",
        },
      },
      charts: {
        inspireGrowthFund: "Inspire Growth Fund",
        marketBenchmark: "Market Benchmark",
        ourFund: "Our Fund",
        marketAverage: "Market Average",
        quarterlyPerformanceTitle: "Quarterly Performance Comparison",
        portfolioAllocation: "Portfolio Allocation by Sector",
        riskMetricsComparison: "Risk Metrics Comparison",
      },
      allocation: {
        technology: "Technology",
        healthcare: "Healthcare",
        realEstate: "Real Estate",
        esgBonds: "ESG Bonds",
        emergingMarkets: "Emerging Markets",
      },
      riskMetrics: {
        volatility: "Volatility (%)",
        sharpeRatio: "Sharpe Ratio",
        maxDrawdown: "Max Drawdown (%)",
        beta: "Beta",
      },
      philosophy: {
        disciplinedValue: {
          title: "Disciplined Value Investing",
          description:
            "We focus on long-term value creation through fundamental analysis-based investment decisions. We maintain a disciplined approach to identify the intrinsic value of companies without being swayed by short-term market fluctuations.",
        },
        riskAdjusted: {
          title: "Risk-Adjusted Returns",
          description:
            "We place risk management at the core of our investment process, pursuing maximization of risk-adjusted returns. We achieve sustainable profit growth while minimizing downside risk.",
        },
        esgIntegration: {
          title: "ESG Integration",
          description:
            "We integrate environmental, social, and governance factors into investment decisions, contributing to sustainable society. Through investment in ESG-excellent companies, we achieve both long-term value creation and social contribution.",
        },
        activeManagement: {
          title: "Active Management Excellence",
          description:
            "Leveraging specialized knowledge and extensive experience, we pursue market-beating performance through active investment management. We conduct regular portfolio reviews and agile asset allocation adjustments.",
        },
      },
      insights: {
        philippineGrowth: {
          title: "Philippine Economic Growth Outlook",
          summary:
            "Comprehensive analysis of the Philippine economy's growth trajectory, infrastructure investments, and emerging opportunities in the digital transformation sector.",
          category: "Economic Analysis",
        },
        esgTrends: {
          title: "ESG Investment Trends in the Philippines",
          summary:
            "Examining the growing importance of Environmental, Social, and Governance factors in Philippine investment decisions and market performance.",
          category: "Sustainable Investing",
        },
        techSector: {
          title: "Philippine Tech Sector Growth Opportunities",
          summary:
            "Deep dive into the rapidly expanding technology sector in the Philippines, highlighting key growth drivers and investment opportunities.",
          category: "Sector Analysis",
        },
        readTime: {
          fiveMin: "5 min read",
          sixMin: "6 min read",
          sevenMin: "7 min read",
        },
        readMore: "Read More",
        viewAllButton: "View All Research",
      },
      riskManagement: {
        strategies: {
          diversification: {
            title: "Portfolio Diversification",
            description:
              "Sophisticated asset allocation across multiple sectors, geographies, and investment vehicles to minimize concentration risk and enhance risk-adjusted returns.",
          },
          hedging: {
            title: "Dynamic Hedging Strategies",
            description:
              "Implementation of advanced hedging techniques including derivatives and alternative investments to protect against market volatility and downside risk.",
          },
          monitoring: {
            title: "Real-time Risk Monitoring",
            description:
              "Continuous monitoring of portfolio risk metrics using advanced analytics and stress testing to ensure adherence to risk parameters and regulatory requirements.",
          },
        },
      },
      header: {
        title: "Investment Performance & Insights",
        description:
          "Discover how our strategic investment approach delivers superior risk-adjusted returns while maintaining focus on sustainable growth and responsible investing.",
      },
      risk: {
        dueDiligence: {
          title: "Comprehensive Due Diligence",
          description:
            "Rigorous analysis and evaluation of all investment opportunities through our systematic due diligence process.",
        },
        diversification: {
          title: "Strategic Diversification",
          description:
            "Sophisticated asset allocation across multiple sectors, geographies, and investment vehicles to minimize concentration risk.",
        },
        realTimeMonitoring: {
          title: "Real-time Risk Monitoring",
          description:
            "Continuous monitoring of portfolio risk metrics using advanced analytics and stress testing to ensure adherence to risk parameters.",
        },
      },
      cta: {
        title: "Ready for Strategic Partnership?",
        subtitle:
          "Join forward-thinking investors who are shaping the future of Philippine capital markets through disciplined investment strategies and sustainable growth initiatives.",
        description:
          "Join forward-thinking investors who are shaping the future of Philippine capital markets through disciplined investment strategies and sustainable growth initiatives.",
        downloadButton: "Download Company Overview",
        scheduleButton: "Schedule Investment Consultation",
        consultationButton: "Schedule Investment Consultation",
      },
      disclaimer: {
        line1:
          "Investment involves risk. Past performance does not guarantee future results.",
        line2:
          "All investment decisions should be made in consultation with qualified financial advisors.",
        line3:
          "The information provided is for educational purposes only and should not be considered as investment advice.",
        line4:
          "Returns shown are net of fees and expenses. Individual results may vary.",
        secRegistration:
          "Inspire Alliance Fund Group is registered with the Securities and Exchange Commission of the Philippines under Registration No. AS092-4578.",
      },
    },
    ja: {
      title: "投資パフォーマンス & インサイト",
      subtitle:
        "持続可能な成長と責任投資に焦点を当てながら、優れたリスク調整後リターンを提供する当社の戦略的投資アプローチをご紹介します。",
      tabs: {
        performance: "パフォーマンス",
        philosophy: "投資哲学",
        marketInsights: "市場インサイト",
        riskManagement: "リスク管理",
      },
      metrics: {
        investmentCapital: {
          title: "運用資産",
          subtitle: "運用総額",
        },
        annualReturn: {
          title: "年間リターン",
          subtitle: "5年平均",
        },
        annualRevenue: {
          title: "年間収益",
          subtitle: "成長率",
        },
        netReturn: {
          title: "純リターン",
          subtitle: "手数料控除後",
        },
        portfolioCompanies: {
          title: "ポートフォリオ企業",
          subtitle: "アクティブ投資",
        },
        sustainability: {
          title: "ESGスコア",
          subtitle: "投資格付け",
        },
        sharpeRatio: {
          title: "シャープレシオ",
          subtitle: "リスク調整後リターン",
        },
        maxDrawdown: {
          title: "最大ドローダウン",
          subtitle: "歴史的リスク",
        },
      },
      charts: {
        inspireGrowthFund: "インスパイア成長ファンド",
        marketBenchmark: "市場ベンチマーク",
        ourFund: "当社ファンド",
        marketAverage: "市場平均",
        quarterlyPerformanceTitle: "四半期パフォーマンス比較",
        portfolioAllocation: "セクター別ポートフォリオ配分",
        riskMetricsComparison: "リスク指標比較",
      },
      allocation: {
        technology: "テクノロジー",
        healthcare: "ヘルスケア",
        realEstate: "不動産",
        esgBonds: "ESG債券",
        emergingMarkets: "新興市場",
      },
      riskMetrics: {
        volatility: "ボラティリティ (%)",
        sharpeRatio: "シャープレシオ",
        maxDrawdown: "最大ドローダウン (%)",
        beta: "ベータ",
      },
      philosophy: {
        disciplinedValue: {
          title: "規律ある価値投資",
          description:
            "我々は長期的な価値創造に焦点を当て、ファンダメンタル分析に基づいた投資判断を行います。市場の短期的な変動に惑わされることなく、企業の本質的価値を見極める規律あるアプローチを堅持しています。",
        },
        riskAdjusted: {
          title: "リスク調整後リターン",
          description:
            "リスク管理を投資プロセスの中核に据え、リスク調整後リターンの最大化を追求します。ダウンサイドリスクを最小限に抑えながら、持続可能な収益成長を実現します。",
        },
        esgIntegration: {
          title: "ESG統合",
          description:
            "環境・社会・ガバナンス要因を投資判断に統合し、持続可能な社会の実現に貢献します。ESG優良企業への投資により、長期的な価値創造と社会貢献を両立させます。",
        },
        activeManagement: {
          title: "アクティブ運用の卓越性",
          description:
            "専門的な知識と豊富な経験を活かし、能動的な投資管理により市場を上回るパフォーマンスを追求します。定期的なポートフォリオ見直しと機動的な資産配分調整を実施します。",
        },
      },
      insights: {
        philippineGrowth: {
          title: "フィリピン経済成長見通し",
          summary:
            "フィリピン経済の成長軌道、インフラ投資、デジタル変革セクターにおける新たな機会の包括的分析。",
          category: "経済分析",
        },
        esgTrends: {
          title: "フィリピンにおけるESG投資トレンド",
          summary:
            "フィリピンの投資判断と市場パフォーマンスにおける環境・社会・ガバナンス要因の重要性の高まりを検証。",
          category: "持続可能投資",
        },
        techSector: {
          title: "フィリピンテクノロジーセクター成長機会",
          summary:
            "フィリピンの急速に拡大するテクノロジーセクターの詳細分析、主要成長要因と投資機会を強調。",
          category: "セクター分析",
        },
        readTime: {
          fiveMin: "5分で読む",
          sixMin: "6分で読む",
          sevenMin: "7分で読む",
        },
        readMore: "続きを読む",
        viewAllButton: "すべての調査を見る",
      },
      riskManagement: {
        strategies: {
          diversification: {
            title: "ポートフォリオ分散",
            description:
              "集中リスクを最小化し、リスク調整後リターンを向上させるため、複数セクター、地域、投資ビークルにわたる高度な資産配分を実施。",
          },
          hedging: {
            title: "動的ヘッジ戦略",
            description:
              "市場ボラティリティとダウンサイドリスクから保護するため、デリバティブとオルタナティブ投資を含む高度なヘッジ技術を導入。",
          },
          monitoring: {
            title: "リアルタイムリスク監視",
            description:
              "高度な分析とストレステストを用いたポートフォリオリスク指標の継続的な監視により、リスクパラメータと規制要件への準拠を確保。",
          },
        },
      },
      header: {
        title: "投資パフォーマンス & インサイト",
        description:
          "持続可能な成長と責任投資に焦点を当てながら、優れたリスク調整後リターンを提供する当社の戦略的投資アプローチをご紹介します。",
      },
      risk: {
        dueDiligence: {
          title: "包括的デューデリジェンス",
          description:
            "体系的なデューデリジェンスプロセスを通じて、すべての投資機会の厳格な分析と評価を実施。",
        },
        diversification: {
          title: "戦略的分散投資",
          description:
            "集中リスクを最小化するため、複数セクター、地域、投資ビークルにわたる高度な資産配分を実施。",
        },
        realTimeMonitoring: {
          title: "リアルタイムリスク監視",
          description:
            "高度な分析とストレステストを用いたポートフォリオリスク指標の継続的な監視により、リスクパラメータへの準拠を確保。",
        },
      },
      cta: {
        title: "戦略的パートナーシップの準備はできていますか？",
        subtitle:
          "規律ある投資戦略と持続可能な成長イニシアチブを通じてフィリピン資本市場の未来を形作る先進的な投資家に参加してください。",
        description:
          "規律ある投資戦略と持続可能な成長イニシアチブを通じてフィリピン資本市場の未来を形作る先進的な投資家に参加してください。",
        downloadButton: "会社概要をダウンロード",
        scheduleButton: "投資コンサルテーションをスケジュール",
        consultationButton: "投資コンサルテーションをスケジュール",
      },
      disclaimer: {
        line1:
          "投資にはリスクが伴います。過去の実績は将来の結果を保証するものではありません。",
        line2:
          "すべての投資判断は資格のある金融アドバイザーとの相談の上で行ってください。",
        line3:
          "提供される情報は教育目的のみであり、投資アドバイスとして考慮されるべきではありません。",
        line4:
          "表示されるリターンは手数料・費用控除後です。個人の結果は異なる場合があります。",
        secRegistration:
          "インスパイア・アライアンス・ファンド・グループは、登録番号AS092-4578でフィリピン証券取引委員会に登録されています。",
      },
    },
  };

  const t = (key) => {
    const keys = key.replace("investmentInsights.", "").split(".");
    let result = translations[currentLang];
    for (const k of keys) {
      result = result[k];
      if (!result) break;
    }
    return result || key;
  };

  // Listen for language changes
  useEffect(() => {
    // Check for saved language on load
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("selectedLanguage");
      if (savedLang && (savedLang === "en" || savedLang === "ja")) {
        setCurrentLang(savedLang);
      }
    }

    // Listen for language change events
    const handleLanguageChange = (event) => {
      setCurrentLang(event.detail.language);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("languageChanged", handleLanguageChange);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("languageChanged", handleLanguageChange);
      }
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Intersection Observer setup - move before conditional return
  useEffect(() => {
    if (mounted) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isAnimating) {
              entry.target.style.width = "35%";
              setIsAnimating(true);
            } else if (!entry.isIntersecting) {
              entry.target.style.width = "0%";
              setIsAnimating(false);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }
  }, [mounted, isAnimating]);

  // Chart visibility observer - move before conditional return
  useEffect(() => {
    if (mounted) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setAnimationKey((prev) => prev + 1);
          } else {
            setIsVisible(false);
          }
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        }
      );

      if (chartRef.current) {
        observer.observe(chartRef.current);
      }

      return () => {
        if (chartRef.current) {
          observer.disconnect();
        }
      };
    }
  }, [mounted]);

  // Handle PDF download
  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/pdf/IHICompanyOverview.pdf";
    link.download = "Inspire_Alliance_Company_Overview.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle scroll to contact form
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle mounting state within render instead of early return
  if (!mounted) {
    return (
      <section
        className="py-20 relative overflow-hidden min-h-screen bg-[#f7f7f7]"
        id="investment-insights"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading insights...</p>
          </div>
        </div>
      </section>
    );
  }

  // Investment Philosophy principles
  const investmentPhilosophy = [
    {
      title: t("investmentInsights.philosophy.disciplinedValue.title"),
      description: t(
        "investmentInsights.philosophy.disciplinedValue.description"
      ),
      icon: "🎯",
    },
    {
      title: t("investmentInsights.philosophy.riskAdjusted.title"),
      description: t("investmentInsights.philosophy.riskAdjusted.description"),
      icon: "⚖️",
    },
    {
      title: t("investmentInsights.philosophy.esgIntegration.title"),
      description: t(
        "investmentInsights.philosophy.esgIntegration.description"
      ),
      icon: "🌱",
    },
    {
      title: t("investmentInsights.philosophy.activeManagement.title"),
      description: t(
        "investmentInsights.philosophy.activeManagement.description"
      ),
      icon: "📈",
    },
  ];

  // Market insights data
  const marketInsights = [
    {
      title: t("investmentInsights.insights.philippineGrowth.title"),
      summary: t("investmentInsights.insights.philippineGrowth.summary"),
      date: "2024-01-15",
      category: t("investmentInsights.insights.philippineGrowth.category"),
      readTime: t("investmentInsights.insights.readTime.fiveMin"),
      slug: "philippine-economic-growth-outlook",
    },
    {
      title: t("investmentInsights.insights.esgTrends.title"),
      summary: t("investmentInsights.insights.esgTrends.summary"),
      date: "2024-01-10",
      category: t("investmentInsights.insights.esgTrends.category"),
      readTime: t("investmentInsights.insights.readTime.sevenMin"),
      slug: "esg-investment-trends-ph",
    },
    {
      title: t("investmentInsights.insights.techSector.title"),
      summary: t("investmentInsights.insights.techSector.summary"),
      date: "2024-01-08",
      category: t("investmentInsights.insights.techSector.category"),
      readTime: t("investmentInsights.insights.readTime.sixMin"),
      slug: "philippine-tech-sector-growth",
    },
  ];

  // Fund performance data (simulated realistic returns)
  const performanceData = {
    labels: ["Q1 2023", "Q2 2023", "Q3 2023", "Q4 2023", "Q1 2024"],
    datasets: [
      {
        label: t("investmentInsights.charts.inspireGrowthFund"),
        data: [8.2, 12.5, 9.8, 15.3, 11.7],
        borderColor: "rgb(128, 195, 42)",
        backgroundColor: "rgba(128, 195, 42, 0.1)",
        tension: 0.3,
        fill: true,
        borderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "rgb(128, 195, 42)",
        pointBorderWidth: 2,
      },
      {
        label: t("investmentInsights.charts.marketBenchmark"),
        data: [6.1, 8.9, 7.2, 11.4, 8.8],
        borderColor: "rgb(75, 136, 139)",
        backgroundColor: "rgba(75, 136, 139, 0.1)",
        tension: 0.3,
        fill: true,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "rgb(75, 136, 139)",
        pointBorderWidth: 2,
      },
    ],
  };

  // Portfolio allocation data
  const allocationData = {
    labels: [
      t("investmentInsights.allocation.technology"),
      t("investmentInsights.allocation.healthcare"),
      t("investmentInsights.allocation.realEstate"),
      t("investmentInsights.allocation.esgBonds"),
      t("investmentInsights.allocation.emergingMarkets"),
    ],
    datasets: [
      {
        data: [28, 22, 18, 16, 16],
        backgroundColor: [
          "rgba(128, 195, 42, 0.8)",
          "rgba(75, 136, 139, 0.8)",
          "rgba(56, 115, 175, 0.8)",
          "rgba(184, 134, 11, 0.8)",
          "rgba(99, 102, 241, 0.8)",
        ],
        borderColor: [
          "rgb(128, 195, 42)",
          "rgb(75, 136, 139)",
          "rgb(56, 115, 175)",
          "rgb(184, 134, 11)",
          "rgb(99, 102, 241)",
        ],
        borderWidth: 2,
      },
    ],
  };

  // Risk metrics data
  const riskMetricsData = {
    labels: [
      t("investmentInsights.riskMetrics.volatility"),
      t("investmentInsights.riskMetrics.sharpeRatio"),
      t("investmentInsights.riskMetrics.maxDrawdown"),
      t("investmentInsights.riskMetrics.beta"),
    ],
    datasets: [
      {
        label: t("investmentInsights.charts.ourFund"),
        data: [12.5, 1.42, -8.3, 0.85],
        backgroundColor: "rgba(128, 195, 42, 0.6)",
        borderColor: "rgb(128, 195, 42)",
        borderWidth: 2,
      },
      {
        label: t("investmentInsights.charts.marketAverage"),
        data: [15.8, 1.18, -12.7, 1.0],
        backgroundColor: "rgba(75, 136, 139, 0.6)",
        borderColor: "rgb(75, 136, 139)",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    animation: {
      duration: 2000,
      easing: "easeInOutQuart",
      delay: (context) => {
        if (!isVisible) return 0;
        return context.datasetIndex * 300;
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "center",
        labels: {
          font: {
            family: "'Inter', 'system-ui', sans-serif",
            size: 12,
            weight: "500",
          },
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          boxWidth: 12,
          boxHeight: 12,
          color: "#374151",
        },
      },
      title: {
        display: true,
        text: t("investmentInsights.charts.quarterlyPerformanceTitle"),
        font: {
          size: 18,
          family: "'Inter', 'system-ui', sans-serif",
          weight: "600",
        },
        color: "#1f2937",
        padding: {
          bottom: 30,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.y}%`;
          },
        },
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        titleColor: "#1f2937",
        bodyColor: "#374151",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(156, 163, 175, 0.2)",
          drawBorder: false,
        },
        ticks: {
          color: "#6b7280",
          font: {
            family: "'Inter', 'system-ui', sans-serif",
            size: 11,
            weight: "500",
          },
          callback: function (value) {
            return value + "%";
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6b7280",
          font: {
            family: "'Inter', 'system-ui', sans-serif",
            size: 11,
            weight: "500",
          },
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: {
            family: "'Inter', 'system-ui', sans-serif",
            size: 12,
            weight: "500",
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      title: {
        display: true,
        text: t("investmentInsights.charts.portfolioAllocation"),
        font: {
          size: 16,
          family: "'Inter', 'system-ui', sans-serif",
          weight: "600",
        },
        color: "#1f2937",
      },
    },
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            family: "'Inter', 'system-ui', sans-serif",
            size: 12,
            weight: "500",
          },
        },
      },
      title: {
        display: true,
        text: t("investmentInsights.charts.riskMetricsComparison"),
        font: {
          size: 16,
          family: "'Inter', 'system-ui', sans-serif",
          weight: "600",
        },
        color: "#1f2937",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            family: "'Inter', 'system-ui', sans-serif",
            size: 11,
          },
        },
      },
      x: {
        ticks: {
          font: {
            family: "'Inter', 'system-ui', sans-serif",
            size: 11,
          },
        },
      },
    },
  };

  const tabs = [
    {
      id: "performance",
      label: t("investmentInsights.tabs.performance"),
      icon: "📊",
    },
    {
      id: "philosophy",
      label: t("investmentInsights.tabs.philosophy"),
      icon: "💡",
    },
    {
      id: "insights",
      label: t("investmentInsights.tabs.marketInsights"),
      icon: "🔍",
    },
    {
      id: "risk",
      label: t("investmentInsights.tabs.riskManagement"),
      icon: "🛡️",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "performance":
        return (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-indigo-500">
                <h3 className="text-sm font-medium text-gray-600">
                  {t("investmentInsights.metrics.investmentCapital.title")}
                </h3>
                <p className="text-3xl font-bold text-gray-800">₱1.6B</p>
                <p className="text-sm text-blue-600">
                  {t("investmentInsights.metrics.investmentCapital.subtitle")}
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                <h3 className="text-sm font-medium text-gray-600">
                  {t("investmentInsights.metrics.annualRevenue.title")}
                </h3>
                <p className="text-3xl font-bold text-gray-800">₱3.6M</p>
                <p className="text-sm text-green-600">
                  {t("investmentInsights.metrics.annualRevenue.subtitle")}
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                <h3 className="text-sm font-medium text-gray-600">
                  {t("investmentInsights.metrics.netReturn.title")}
                </h3>
                <p className="text-3xl font-bold text-gray-800">11.7%</p>
                <p className="text-sm text-green-600">
                  {t("investmentInsights.metrics.netReturn.subtitle")}
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-sm font-medium text-gray-600">
                  {t("investmentInsights.metrics.sharpeRatio.title")}
                </h3>
                <p className="text-3xl font-bold text-gray-800">1.42</p>
                <p className="text-sm text-green-600">
                  {t("investmentInsights.metrics.sharpeRatio.subtitle")}
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                <h3 className="text-sm font-medium text-gray-600">
                  {t("investmentInsights.metrics.maxDrawdown.title")}
                </h3>
                <p className="text-3xl font-bold text-gray-800">-8.3%</p>
                <p className="text-sm text-green-600">
                  {t("investmentInsights.metrics.maxDrawdown.subtitle")}
                </p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Performance Chart */}
              <div className="xl:col-span-2 bg-white rounded-xl shadow-lg p-6">
                <div ref={chartRef}>
                  <Line
                    key={animationKey}
                    data={performanceData}
                    options={chartOptions}
                  />
                </div>
              </div>

              {/* Portfolio Allocation */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <Doughnut data={allocationData} options={doughnutOptions} />
              </div>
            </div>
          </div>
        );

      case "philosophy":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentPhilosophy.map((principle, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{principle.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        );

      case "insights":
        return (
          <div className="space-y-6">
            {marketInsights.map((insight, index) => (
              <Link href={`/insights/${insight.slug}`} key={index}>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border border-transparent hover:border-blue-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                          {insight.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {insight.date}
                        </span>
                        <span className="text-sm text-gray-500">
                          {insight.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {insight.title}
                      </h3>
                      <p className="text-gray-600">{insight.summary}</p>
                    </div>
                    <div className="ml-4 text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform">
                      {t("investmentInsights.insights.readMore")} →
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* View All Insights Button */}
            <div className="text-center mt-8">
              <Link href="/insights">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 inline-flex items-center gap-2">
                  <span>{t("investmentInsights.insights.viewAllButton")}</span>
                  <span>📈</span>
                </button>
              </Link>
            </div>
          </div>
        );

      case "risk":
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Bar data={riskMetricsData} options={barOptions} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3">
                  📋 {t("investmentInsights.risk.dueDiligence.title")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("investmentInsights.risk.dueDiligence.description")}
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3">
                  🎯 {t("investmentInsights.risk.diversification.title")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("investmentInsights.risk.diversification.description")}
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3">
                  📊 {t("investmentInsights.risk.realTimeMonitoring.title")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("investmentInsights.risk.realTimeMonitoring.description")}
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      className="py-20 relative overflow-hidden min-h-screen bg-[#f7f7f7]"
      id="investment-insights"
    >
      {/* Animated background gradient */}
      <div
        ref={sectionRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[80vh]"
        style={{
          background:
            "linear-gradient(135deg, rgba(128, 195, 42, 0.8) 0%, rgba(75, 136, 139, 0.8) 50%, rgba(56, 115, 175, 0.8) 100%)",
          width: "0%",
          transition: "width 1.5s ease-out",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t("investmentInsights.header.title")}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {t("investmentInsights.header.description")}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">{renderTabContent()}</div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t("investmentInsights.cta.title")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("investmentInsights.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button
                onClick={handleScrollToContact}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                {t("investmentInsights.cta.scheduleButton")}
              </button>
              <button
                onClick={handleDownloadPDF}
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
              >
                {t("investmentInsights.cta.downloadButton")}
              </button>
            </div>
            <div className="border-t pt-4">
              <p className="text-xs text-gray-500 leading-relaxed">
                {t("investmentInsights.disclaimer.line1")}
                <br />
                {t("investmentInsights.disclaimer.line2")}
                <br />
                {t("investmentInsights.disclaimer.line3")}
                <br />
                {t("investmentInsights.disclaimer.line4")}
                <br />
                <strong>
                  {t("investmentInsights.disclaimer.secRegistration")}
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentInsights;
