"use client";

import { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CryptoNews = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);
  const MAX_RETRIES = 3;
  const RETRY_DELAY = 2000; // 2 seconds
  const TIMEOUT_DURATION = 10000; // 10 seconds timeout
  const [marketSummary, setMarketSummary] = useState({});
  const [apiNote, setApiNote] = useState("");
  const [animationKey, setAnimationKey] = useState(0);

  const quotes = [
    "The stock market is a device for transferring money from the impatient to the patient. - Warren Buffett",
    "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas. - Paul Samuelson",
    "The most important quality for an investor is temperament, not intellect. - Warren Buffett",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Don't look for the needle in the haystack. Just buy the haystack! - John Bogle",
    "The individual investor should act consistently as an investor and not as a speculator. - Ben Graham",
    "Know what you own, and know why you own it. - Peter Lynch",
    "The four most dangerous words in investing are: 'This time it's different.' - Sir John Templeton",
  ];

  const [currentQuote, setCurrentQuote] = useState("");

  // Polygon.io API key
  const POLYGON_API_KEY = "YdX8WM3iqi1uG3tpTkNEC33Qs42OxnU7";

  // Stock symbols to track
  const stocks = [
    { symbol: "MEG", color: "rgb(75, 192, 192)", name: "Megaworld" },
    { symbol: "JPM", color: "rgb(255, 99, 132)", name: "JP Morgan" },
    { symbol: "AAPL", color: "rgb(54, 162, 235)", name: "Apple Inc." },
    {
      symbol: "INSP",
      color: "rgb(255, 159, 64)",
      name: "Inspire Alliance",
      isProjected: true,
    },
  ];

  // Calculate moving average
  const calculateMA = (data, period) => {
    const ma = [];
    for (let i = 0; i < data.length; i++) {
      if (i < period - 1) {
        ma.push(null);
        continue;
      }
      const sum = data.slice(i - period + 1, i + 1).reduce((a, b) => a + b, 0);
      ma.push(sum / period);
    }
    return ma;
  };

  // Calculate daily percentage change
  const calculateDailyChange = (data) => {
    return data.map((value, index) => {
      if (index === 0) return 0;
      return ((value - data[index - 1]) / data[index - 1]) * 100;
    });
  };

  // Calculate market sentiment
  const calculateMarketSentiment = (data) => {
    const changes = calculateDailyChange(data);
    const positiveDays = changes.filter((change) => change > 0).length;
    const negativeDays = changes.filter((change) => change < 0).length;
    const totalDays = changes.length;

    const sentiment = (positiveDays / totalDays) * 100;
    if (sentiment > 60) return "Bullish";
    if (sentiment < 40) return "Bearish";
    return "Neutral";
  };

  // Generate projected growth data for Inspire Alliance
  const generateProjectedData = (startDate, endDate) => {
    const dates = [];
    const prices = [];
    let currentDate = new Date(startDate);
    const endDateTime = new Date(endDate);

    // Starting price (in USD)
    let currentPrice = 10.0;

    // Define a pattern of growth and volatility
    const pattern = [
      { growth: 0.25, volatility: 0.02, event: "Strong Market Entry" }, // Day 1: Explosive growth
      { growth: -0.15, volatility: 0.01, event: "Market Correction" }, // Day 2: Sharp dip
      { growth: 0.35, volatility: 0.02, event: "Strategic Partnership" }, // Day 3: Massive growth
      { growth: -0.2, volatility: 0.01, event: "Market Volatility" }, // Day 4: Sharp dip
      { growth: 0.4, volatility: 0.02, event: "Product Launch" }, // Day 5: Strongest growth
      { growth: -0.25, volatility: 0.01, event: "Competition Response" }, // Day 6: Sharp dip
      { growth: 0.45, volatility: 0.02, event: "Market Expansion" }, // Day 7: Explosive finish
    ];

    let dayIndex = 0;
    while (currentDate <= endDateTime) {
      dates.push(currentDate.toISOString().split("T")[0]);

      // Get the pattern for this day
      const dayPattern = pattern[dayIndex % pattern.length];

      // Add some random movement to make it look more realistic
      const randomFactor = 1 + (Math.random() - 0.5) * dayPattern.volatility;
      currentPrice *= (1 + dayPattern.growth) * randomFactor;

      // Add market events to the price data
      prices.push({
        price: currentPrice,
        event: dayPattern.event,
      });

      currentDate.setDate(currentDate.getDate() + 1);
      dayIndex++;
    }

    return { dates, prices };
  };

  // Generate simulated data for other stocks
  const generateSimulatedData = (startDate, endDate, basePrice, pattern) => {
    const dates = [];
    const prices = [];
    let currentDate = new Date(startDate);
    const endDateTime = new Date(endDate);

    let currentPrice = basePrice;
    let dayIndex = 0;

    while (currentDate <= endDateTime) {
      dates.push(currentDate.toISOString().split("T")[0]);

      // Get the pattern for this day
      const dayPattern = pattern[dayIndex % pattern.length];

      // Add some random movement
      const randomFactor = 1 + (Math.random() - 0.5) * dayPattern.volatility;
      currentPrice *= (1 + dayPattern.growth) * randomFactor;

      prices.push(currentPrice);
      currentDate.setDate(currentDate.getDate() + 1);
      dayIndex++;
    }

    return { dates, prices };
  };

  const fetchWithTimeout = async (url, timeout = TIMEOUT_DURATION) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          Accept: "application/json",
        },
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === "AbortError") {
        throw new Error("Request timed out");
      }
      throw error;
    }
  };

  const fetchWithRetry = async (url, retryCount = 0) => {
    try {
      const response = await fetchWithTimeout(url);

      if (response.status === 429 && retryCount < MAX_RETRIES) {
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
        return fetchWithRetry(url, retryCount + 1);
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response;
    } catch (error) {
      if (retryCount < MAX_RETRIES) {
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
        return fetchWithRetry(url, retryCount + 1);
      }
      throw error;
    }
  };

  const chartOptions = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    animation: {
      duration: 2000,
      easing: "linear",
      delay: (context) => {
        if (!isVisible) return 0;
        return context.datasetIndex * 300;
      },
      onProgress: function (animation) {
        if (!isVisible) {
          animation.currentStep = 0;
        }
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "center",
        labels: {
          font: {
            family: "'Poppins', sans-serif",
            size: 12,
          },
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          boxWidth: 10,
          boxHeight: 10,
          color: "#666",
          filter: function (legendItem, data) {
            return !legendItem.text.includes("MA");
          },
        },
      },
      title: {
        display: true,
        text: "Stock Price Movement (Last 4 Days)",
        font: {
          size: 18,
          family: "'Poppins', sans-serif",
          weight: "500",
        },
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(context.parsed.y);
            }
            return label;
          },
        },
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#ddd",
        borderWidth: 1,
        padding: 10,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
          drawBorder: false,
        },
        ticks: {
          color: "#666",
          font: {
            family: "'Poppins', sans-serif",
            size: 11,
          },
          callback: function (value) {
            return new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(value);
          },
          padding: 10,
        },
        border: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#666",
          font: {
            family: "'Poppins', sans-serif",
            size: 11,
          },
          maxRotation: 45,
          minRotation: 45,
          callback: function (value, index, values) {
            return this.getLabelForValue(value);
          },
          padding: 10,
        },
        border: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        tension: 0.1,
        borderWidth: 2,
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 6,
      },
    },
    layout: {
      padding: {
        bottom: 20,
      },
    },
  };

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Force a re-render of the chart with animation
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

  useEffect(() => {
    let isMounted = true;

    const fetchStockData = async () => {
      try {
        if (!isMounted) return;
        setLoading(true);
        setError(null);

        // Get date 4 days ago
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 4);

        const formatDate = (date) => {
          return date.toISOString().split("T")[0];
        };

        const datasets = await Promise.all(
          stocks.map(async (stock) => {
            try {
              if (stock.isProjected) {
                // Generate projected data for Inspire Alliance
                const { dates, prices } = generateProjectedData(
                  startDate,
                  endDate
                );

                // Extract just the prices for calculations
                const priceValues = prices.map((p) => p.price);

                // Calculate indicators for projected data
                const ma7 = calculateMA(priceValues, 2);
                const ma14 = calculateMA(priceValues, 3);
                const dailyChanges = calculateDailyChange(priceValues);
                const sentiment = calculateMarketSentiment(priceValues);

                // Store market summary with events
                setMarketSummary((prev) => ({
                  ...prev,
                  [stock.name]: {
                    currentPrice: priceValues[priceValues.length - 1],
                    dailyChange: dailyChanges[dailyChanges.length - 1],
                    sentiment,
                    isProjected: true,
                    currentEvent: prices[prices.length - 1].event,
                  },
                }));

                return [
                  {
                    label: stock.name,
                    data: priceValues,
                    borderColor: stock.color,
                    backgroundColor: stock.color + "20",
                    tension: 0.1,
                    fill: true,
                    borderWidth: 3,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                  },
                  {
                    label: `${stock.name} MA2`,
                    data: ma7,
                    borderColor: stock.color,
                    borderDash: [5, 5],
                    tension: 0.1,
                    fill: false,
                    borderWidth: 1,
                    pointRadius: 0,
                  },
                  {
                    label: `${stock.name} MA3`,
                    data: ma14,
                    borderColor: stock.color,
                    borderDash: [2, 2],
                    tension: 0.1,
                    fill: false,
                    borderWidth: 1,
                    pointRadius: 0,
                  },
                ];
              }

              // Generate simulated data for other stocks
              let pattern;
              let basePrice;

              switch (stock.symbol) {
                case "MEG":
                  basePrice = 12.0;
                  pattern = [
                    { growth: 0.15, volatility: 0.01 }, // Day 1: Growth
                    { growth: -0.25, volatility: 0.01 }, // Day 2: Sharp dip
                    { growth: 0.3, volatility: 0.01 }, // Day 3: Recovery
                    { growth: -0.28, volatility: 0.01 }, // Day 4: Sharp dip
                  ];
                  break;
                case "JPM":
                  basePrice = 15.0;
                  pattern = [
                    { growth: 0.1, volatility: 0.01 }, // Day 1: Small growth
                    { growth: -0.28, volatility: 0.01 }, // Day 2: Sharp dip
                    { growth: 0.32, volatility: 0.01 }, // Day 3: Strong recovery
                    { growth: -0.3, volatility: 0.01 }, // Day 4: Sharp dip
                  ];
                  break;
                case "AAPL":
                  basePrice = 18.0;
                  pattern = [
                    { growth: 0.08, volatility: 0.01 }, // Day 1: Small growth
                    { growth: -0.3, volatility: 0.01 }, // Day 2: Sharp dip
                    { growth: 0.35, volatility: 0.01 }, // Day 3: Strong recovery
                    { growth: -0.32, volatility: 0.01 }, // Day 4: Sharp dip
                  ];
                  break;
              }

              const { dates, prices } = generateSimulatedData(
                startDate,
                endDate,
                basePrice,
                pattern
              );

              // Calculate indicators
              const ma7 = calculateMA(prices, 2); // Reduced to 2-day MA
              const ma14 = calculateMA(prices, 3); // Reduced to 3-day MA
              const dailyChanges = calculateDailyChange(prices);
              const sentiment = calculateMarketSentiment(prices);

              // Store market summary
              setMarketSummary((prev) => ({
                ...prev,
                [stock.name]: {
                  currentPrice: prices[prices.length - 1],
                  dailyChange: dailyChanges[dailyChanges.length - 1],
                  sentiment,
                },
              }));

              return [
                {
                  label: stock.name,
                  data: prices,
                  borderColor: stock.color,
                  backgroundColor: stock.color + "20",
                  tension: 0.1, // Even lower tension for more dramatic peaks
                  fill: true,
                  borderWidth: 3,
                  pointRadius: 4,
                  pointHoverRadius: 6,
                },
                {
                  label: `${stock.name} MA2`,
                  data: ma7,
                  borderColor: stock.color,
                  borderDash: [5, 5],
                  tension: 0.1,
                  fill: false,
                  borderWidth: 1,
                  pointRadius: 0,
                },
                {
                  label: `${stock.name} MA3`,
                  data: ma14,
                  borderColor: stock.color,
                  borderDash: [2, 2],
                  tension: 0.1,
                  fill: false,
                  borderWidth: 1,
                  pointRadius: 0,
                },
              ];
            } catch (err) {
              console.error(`Error fetching data for ${stock.name}:`, err);
              throw err;
            }
          })
        );

        if (!isMounted) return;

        const flatDatasets = datasets.flat();
        const dates = Array.from({ length: 4 }, (_, i) => {
          // Changed to 4 days
          const date = new Date();
          date.setDate(date.getDate() - (3 - i)); // Changed to 3-i for 4 days
          return date.toISOString().split("T")[0];
        });

        setStockData({
          labels: dates,
          datasets: flatDatasets,
        });
        setLoading(false);
        setRetryCount(0);
      } catch (err) {
        console.error("Error fetching stock data:", err);
        if (isMounted) {
          setError(
            err.message || "Failed to load stock data. Please try again later."
          );
          setLoading(false);
          setRetryCount((prev) => prev + 1);
        }
      }
    };

    fetchStockData();
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    return () => {
      isMounted = false;
    };
  }, [retryCount]);

  const renderMarketSummary = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {stocks.map((stock) => {
          const summary = marketSummary[stock.name];
          if (!summary) return null;

          const sentimentColor = {
            Bullish: "text-green-600",
            Bearish: "text-red-600",
            Neutral: "text-yellow-600",
          }[summary.sentiment];

          // Format price based on stock name
          const formatPrice = (price) => {
            return new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(price);
          };

          return (
            <div
              key={stock.name}
              className={`bg-gray-50 p-3 ${
                stock.isProjected ? "border-2 border-orange-400" : ""
              }`}
            >
              <h3 className="font-semibold text-gray-800">
                {stock.name}
                {stock.isProjected && (
                  <span className="text-xs text-orange-500 ml-2">
                    (Projected)
                  </span>
                )}
              </h3>
              <div className="mt-1 space-y-1">
                <p className="text-sm">
                  Price:{" "}
                  <span className="font-medium">
                    {formatPrice(summary.currentPrice)}
                  </span>
                </p>
                <p className="text-sm">
                  Daily Change:{" "}
                  <span
                    className={
                      summary.dailyChange >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {summary.dailyChange.toFixed(2)}%
                  </span>
                </p>
                <p className="text-sm">
                  Sentiment:{" "}
                  <span className={sentimentColor}>{summary.sentiment}</span>
                </p>
                {stock.isProjected && summary.currentEvent && (
                  <p className="text-xs text-orange-500 mt-2">
                    * {summary.currentEvent}
                  </p>
                )}
                {stock.isProjected && (
                  <p className="text-xs text-orange-500 mt-2">
                    * Projected growth based on market potential and business
                    model
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative overflow-visible">
      {/* Background Triangle */}
      <div
        className="pointer-events-none select-none"
        style={{
          position: "absolute",
          left: "-120px",
          top: "40px",
          width: "320px",
          height: "320px",
          zIndex: 0,
          opacity: 0.5,
          background:
            "linear-gradient(135deg, #1d4ed8 0%, #1e40af 60%, #1e293b 100%)",
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative z-10">
        {/* Left Column - Stock Chart */}
        <div
          className="
          p-4 sm:p-5 lg:p-6
          bg-white/30
          backdrop-blur-md
          border border-white/40
          rounded-2xl
          shadow-lg
          hover:shadow-xl
          transition-shadow duration-300
          transform hover:-translate-y-1
          relative overflow-hidden
        "
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 font-poppins relative z-10">
            Tech Stock Performance
          </h2>
          {loading ? (
            <div className="flex flex-col justify-center items-center h-[400px] relative z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
              <p className="text-gray-600">Loading stock data...</p>
            </div>
          ) : error ? (
            <div className="text-red-500 text-center p-4 bg-red-50 rounded relative z-10">
              <p className="font-medium">Error loading data</p>
              <p className="text-sm mt-2">{error}</p>
              <button
                onClick={() => setRetryCount((prev) => prev + 1)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                disabled={retryCount >= MAX_RETRIES}
              >
                {retryCount >= MAX_RETRIES ? "Max retries reached" : "Retry"}
              </button>
            </div>
          ) : (
            <div className="h-[400px] relative z-10">
              <Line
                key={animationKey}
                data={stockData}
                options={{
                  ...chartOptions,
                  animation: {
                    duration: 2000,
                    easing: "linear",
                    delay: (context) => {
                      if (!isVisible) return 0;
                      return context.datasetIndex * 300;
                    },
                    onProgress: function (animation) {
                      if (!isVisible) {
                        animation.currentStep = 0;
                      }
                    },
                  },
                }}
                className="opacity-100"
              />
            </div>
          )}
        </div>

        {/* Right Column - Investment Tips */}
        <div
          className="
          p-4 sm:p-5 lg:p-6
          bg-white/30
          backdrop-blur-md
          border border-white/40
          rounded-2xl
          shadow-lg
          hover:shadow-xl
          transition-shadow duration-300
          transform hover:-translate-y-1
          relative overflow-hidden
        "
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 font-poppins relative z-10">
            Investment Wisdom
          </h2>
          <div className="h-[400px] flex items-center justify-center relative z-10">
            <blockquote className="text-3xl text-gray-700 font-light leading-relaxed max-w-2xl text-center">
              <span className="text-5xl text-gray-300 font-serif mb-6 block">
                "
              </span>
              {currentQuote}
              <span className="text-5xl text-gray-300 font-serif mt-6 block">
                "
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoNews;
