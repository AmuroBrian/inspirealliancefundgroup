import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const successStories = [
  {
    id: 1,
    title: "Tech Innovation Hub",
    description: "A technology startup that received funding to develop sustainable energy solutions, now serving over 50,000 households.",
    fullDescription: "Tech Innovation Hub started as a small team of passionate engineers with a vision to revolutionize sustainable energy solutions. With our funding and mentorship, they developed cutting-edge solar panel technology that's 40% more efficient than traditional solutions. Today, they've expanded to 15 cities and created over 200 jobs while helping reduce carbon emissions.",
    impact: "50K+",
    impactText: "Households Served",
    category: "Technology",
    image: "/tech-hub.jpg",
    location: "San Francisco, CA",
    year: "2023",
    teamSize: "50+",
    funding: "$2.5M"
  },
  {
    id: 2,
    title: "Community Health Initiative",
    description: "A healthcare program that expanded access to medical services in underserved communities, improving healthcare delivery.",
    fullDescription: "The Community Health Initiative began with a mission to bring quality healthcare to underserved neighborhoods. Through our support, they've established 10 mobile clinics and trained over 100 community health workers. Their innovative telemedicine platform has connected rural patients with specialists, reducing wait times by 70%.",
    impact: "10K+",
    impactText: "Lives Impacted",
    category: "Healthcare",
    image: "/health.jpg",
    location: "Chicago, IL",
    year: "2022",
    teamSize: "75+",
    funding: "$1.8M"
  },
  {
    id: 3,
    title: "Green Energy Project",
    description: "An environmental initiative that implemented renewable energy solutions, reducing carbon footprint significantly.",
    fullDescription: "The Green Energy Project has transformed how businesses approach sustainability. Their innovative wind-solar hybrid systems have been implemented in 25 industrial parks, reducing energy costs by 45% and carbon emissions by 75%. They've also created a training program that has certified over 500 green energy technicians.",
    impact: "75%",
    impactText: "Carbon Reduction",
    category: "Environment",
    image: "/green.jpg",
    location: "Austin, TX",
    year: "2023",
    teamSize: "30+",
    funding: "$3.2M"
  },
  {
    id: 4,
    title: "Education Access Program",
    description: "A digital learning platform that has provided quality education to over 20,000 students in rural areas.",
    fullDescription: "The Education Access Program has revolutionized learning in rural communities. Their AI-powered platform personalizes learning for each student, resulting in a 60% improvement in test scores. They've distributed 5,000 tablets and trained 200 teachers in digital education methods.",
    impact: "20K+",
    impactText: "Students Reached",
    category: "Education",
    image: "/education.jpg",
    location: "Atlanta, GA",
    year: "2022",
    teamSize: "45+",
    funding: "$1.5M"
  },
  {
    id: 5,
    title: "Urban Farming Initiative",
    description: "A sustainable agriculture project that has transformed urban spaces into productive farms, creating jobs and fresh food access.",
    fullDescription: "The Urban Farming Initiative has turned 50 vacant lots into productive urban farms. They've trained 200 urban farmers and created a network of 30 farmers' markets. Their vertical farming technology has increased crop yields by 300% while using 90% less water.",
    impact: "100K+",
    impactText: "Meals Provided",
    category: "Agriculture",
    image: "/farming.jpg",
    location: "Detroit, MI",
    year: "2023",
    teamSize: "60+",
    funding: "$2.1M"
  },
  {
    id: 6,
    title: "Women in Tech",
    description: "A program that has trained and placed over 1,000 women in technology careers, promoting diversity in the tech industry.",
    fullDescription: "Women in Tech has become a leading force in promoting gender diversity in technology. Their comprehensive training program includes coding bootcamps, mentorship, and job placement services. They've partnered with 50 tech companies and achieved a 85% job placement rate for graduates.",
    impact: "1K+",
    impactText: "Women Empowered",
    category: "Technology",
    image: "/women-tech.jpg",
    location: "Seattle, WA",
    year: "2022",
    teamSize: "25+",
    funding: "$1.2M"
  }
];

const categories = ["Technology", "Healthcare", "Environment", "Education", "Agriculture"];

export default function SuccessStories() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStory, setSelectedStory] = useState(null);
  const [showShareForm, setShowShareForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
    category: "",
    impact: "",
    location: ""
  });

  const [imageErrors, setImageErrors] = useState({});
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    // Get the base URL for images
    setBaseUrl(window.location.origin);
  }, []);

  const handleImageError = (storyId, error) => {
    console.error(`Error loading image for story ${storyId}:`, error);
    setImageErrors(prev => ({
      ...prev,
      [storyId]: true
    }));
  };

  const handleShare = (platform) => {
    const story = selectedStory;
    const text = `Check out this inspiring success story: ${story.title} - ${story.description}`;
    const url = window.location.href;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(story.title)}&body=${encodeURIComponent(text + '\n\n' + url)}`
    };

    window.open(shareUrls[platform], '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowShareForm(false);
    setFormData({
      name: "",
      email: "",
      title: "",
      description: "",
      category: "",
      impact: "",
      location: ""
    });
    // Show success message
    alert('Thank you for sharing your story! We will review it and get back to you soon.');
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const filteredStories = successStories.filter(story => {
    const matchesCategory = selectedCategory === "All" || story.category === selectedCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#f7f7f7] to-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our funding and support have helped transform innovative ideas into impactful realities.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search success stories..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === "All"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                {!imageErrors[story.id] ? (
                  <img
                    src={`${baseUrl}${story.image}`}
                    alt={story.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => handleImageError(story.id, e)}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500">Image not available</span>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-sm">
                  {story.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {story.description}
                </p>
                
                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <span className="text-2xl font-bold text-green-600">
                      {story.impact}
                    </span>
                    <p className="text-sm text-gray-500">
                      {story.impactText}
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedStory(story)}
                    className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-300"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story Detail Modal */}
        <AnimatePresence>
          {selectedStory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedStory(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative h-64 md:h-80">
                  {!imageErrors[selectedStory.id] ? (
                    <img
                      src={`${baseUrl}${selectedStory.image}`}
                      alt={selectedStory.title}
                      className="w-full h-full object-cover"
                      onError={(e) => handleImageError(selectedStory.id, e)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-500">Image not available</span>
                    </div>
                  )}
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      {selectedStory.category}
                    </span>
                    <span className="text-gray-500">{selectedStory.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {selectedStory.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {selectedStory.fullDescription}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold">{selectedStory.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Team Size</p>
                      <p className="font-semibold">{selectedStory.teamSize}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Funding</p>
                      <p className="font-semibold">{selectedStory.funding}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Impact</p>
                      <p className="font-semibold">{selectedStory.impact}</p>
                    </div>
                  </div>

                  {/* Social Sharing Buttons */}
                  <div className="border-t pt-6">
                    <h4 className="text-lg font-semibold mb-4">Share this story</h4>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleShare('twitter')}
                        className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-full hover:bg-opacity-90 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                        Twitter
                      </button>
                      <button
                        onClick={() => handleShare('facebook')}
                        className="flex items-center gap-2 px-4 py-2 bg-[#4267B2] text-white rounded-full hover:bg-opacity-90 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Facebook
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-full hover:bg-opacity-90 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </button>
                      <button
                        onClick={() => handleShare('email')}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-opacity-90 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        Email
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Share Your Story Form Modal */}
        <AnimatePresence>
          {showShareForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setShowShareForm(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg max-w-sm w-full p-3"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-base font-semibold text-gray-800">Share Your Story</h3>
                  <button
                    onClick={() => setShowShareForm(false)}
                    className="text-gray-400 hover:text-gray-600 p-0.5"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-medium text-gray-600 mb-0.5">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        className="w-full px-2 py-1 text-xs rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium text-gray-600 mb-0.5">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="w-full px-2 py-1 text-xs rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-medium text-gray-600 mb-0.5">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleFormChange}
                      required
                      className="w-full px-2 py-1 text-xs rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-medium text-gray-600 mb-0.5">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleFormChange}
                      required
                      rows="2"
                      className="w-full px-2 py-1 text-xs rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500 resize-none"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-medium text-gray-600 mb-0.5">Category</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleFormChange}
                        required
                        className="w-full px-2 py-1 text-xs rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500"
                      >
                        <option value="">Select category</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium text-gray-600 mb-0.5">Impact</label>
                      <input
                        type="text"
                        name="impact"
                        value={formData.impact}
                        onChange={handleFormChange}
                        required
                        placeholder="e.g., 50K+"
                        className="w-full px-2 py-1 text-xs rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-medium text-gray-600 mb-0.5">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleFormChange}
                      required
                      className="w-full px-2 py-1 text-xs rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                  </div>

                  <div className="flex justify-end space-x-1.5 pt-1.5">
                    <button
                      type="button"
                      onClick={() => setShowShareForm(false)}
                      className="px-2 py-0.5 text-[10px] text-gray-600 bg-gray-50 rounded hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-2 py-0.5 text-[10px] text-white bg-gradient-to-r from-green-600 to-blue-600 rounded font-medium hover:from-green-700 hover:to-blue-700"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowShareForm(true)}
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
} 