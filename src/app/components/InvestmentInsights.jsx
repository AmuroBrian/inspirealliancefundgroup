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
  const [activeTab, setActiveTab] = useState("performance");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const chartRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Investment Philosophy principles
  const investmentPhilosophy = [
    {
      title: "Disciplined Value Investing",
      description:
        "We identify undervalued assets with strong fundamentals and long-term growth potential.",
      icon: "🎯",
    },
    {
      title: "Risk-Adjusted Returns",
      description:
        "Our strategies focus on maximizing returns while maintaining prudent risk management.",
      icon: "⚖️",
    },
    {
      title: "ESG Integration",
      description:
        "Environmental, Social, and Governance factors are integral to our investment decisions.",
      icon: "🌱",
    },
    {
      title: "Active Management",
      description:
        "Continuous monitoring and strategic adjustments to optimize portfolio performance.",
      icon: "📈",
    },
  ];

  // Market insights data
  const marketInsights = [
    {
      title: "Philippine Economic Growth Outlook",
      summary:
        "Philippine GDP showing strong recovery with infrastructure and digital transformation investments.",
      date: "2024-01-15",
      category: "Philippine Market",
      readTime: "5 min read",
      slug: "philippine-economic-growth-outlook",
    },
    {
      title: "ESG Investment Trends in PH",
      summary:
        "Sustainable investing in Philippine markets continues to outperform traditional strategies in Q4 2023.",
      date: "2024-01-10",
      category: "ESG Research",
      readTime: "7 min read",
      slug: "esg-investment-trends-ph",
    },
    {
      title: "Philippine Tech Sector Growth",
      summary:
        "Strategic positioning in AI and renewable energy technologies driving Philippine market growth for 2024.",
      date: "2024-01-08",
      category: "Sector Analysis",
      readTime: "6 min read",
      slug: "philippine-tech-sector-growth",
    },
  ];

  // Fund performance data (simulated realistic returns)
  const performanceData = {
    labels: ["Q1 2023", "Q2 2023", "Q3 2023", "Q4 2023", "Q1 2024"],
    datasets: [
      {
        label: "Inspire Growth Fund",
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
        label: "Market Benchmark",
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
      "Technology",
      "Healthcare",
      "Real Estate",
      "ESG Bonds",
      "Emerging Markets",
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
    labels: ["Volatility", "Sharpe Ratio", "Max Drawdown", "Beta"],
    datasets: [
      {
        label: "Our Fund",
        data: [12.5, 1.42, -8.3, 0.85],
        backgroundColor: "rgba(128, 195, 42, 0.6)",
        borderColor: "rgb(128, 195, 42)",
        borderWidth: 2,
      },
      {
        label: "Market Average",
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
        text: "Quarterly Performance (% Returns)",
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
        text: "Portfolio Allocation",
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
        text: "Risk Metrics Comparison",
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

  // Intersection Observer setup
  useEffect(() => {
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
  }, [isAnimating]);

  // Chart visibility observer
  useEffect(() => {
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
  }, []);

  const tabs = [
    { id: "performance", label: "Performance", icon: "📊" },
    { id: "philosophy", label: "Philosophy", icon: "💡" },
    { id: "insights", label: "Market Insights", icon: "🔍" },
    { id: "risk", label: "Risk Management", icon: "🛡️" },
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
                  Investment Capital
                </h3>
                <p className="text-3xl font-bold text-gray-800">₱1.6B</p>
                <p className="text-sm text-blue-600">SEC-Audited Assets</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                <h3 className="text-sm font-medium text-gray-600">
                  Annual Revenue
                </h3>
                <p className="text-3xl font-bold text-gray-800">₱3.6M</p>
                <p className="text-sm text-green-600">2024 Performance</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                <h3 className="text-sm font-medium text-gray-600">
                  Net Return (YTD)
                </h3>
                <p className="text-3xl font-bold text-gray-800">11.7%</p>
                <p className="text-sm text-green-600">vs 8.8% PSEi</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-sm font-medium text-gray-600">
                  Sharpe Ratio
                </h3>
                <p className="text-3xl font-bold text-gray-800">1.42</p>
                <p className="text-sm text-green-600">Above market avg</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                <h3 className="text-sm font-medium text-gray-600">
                  Max Drawdown
                </h3>
                <p className="text-3xl font-bold text-gray-800">-8.3%</p>
                <p className="text-sm text-green-600">Lower than benchmark</p>
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
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* View All Insights Button */}
            <div className="text-center mt-8">
              <Link href="/insights">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 inline-flex items-center gap-2">
                  <span>View All Market Insights</span>
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
                  📋 Due Diligence
                </h3>
                <p className="text-gray-600 text-sm">
                  Rigorous 15-point evaluation process for every investment
                  opportunity.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3">
                  🎯 Diversification
                </h3>
                <p className="text-gray-600 text-sm">
                  Strategic allocation across sectors, geographies, and asset
                  classes.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3">
                  📊 Real-time Monitoring
                </h3>
                <p className="text-gray-600 text-sm">
                  Continuous portfolio monitoring with automated risk alerts.
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
            Investment Performance & Insights
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Transparent financial metrics from our SEC-registered investment
            company managing ₱1.6B in Philippine Peso investments
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
              Ready to Explore Partnership Opportunities?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a consultation with our Philippine investment team to
              explore partnership opportunities and discuss how our ₱1.6B
              investment experience can benefit your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                Schedule Consultation
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300">
                Download Company Profile
              </button>
            </div>
            <div className="border-t pt-4">
              <p className="text-xs text-gray-500 leading-relaxed">
                * Financial data as of 2024, verified by audited financial
                statements.
                <br />
                Investment Capital represents company's investment portfolio as
                disclosed in SEC filings.
                <br />
                Annual Revenue from investment activities and business
                operations.
                <br />
                Past performance does not guarantee future results.
                <br />
                <strong>SEC Registration No: 2025050202717-12</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentInsights;
