import React from 'react';

// Data for the organizational chart
const orgData = {
  name: "International Marketing Department",
  imageUrl: "https://placehold.co/80x80/aabbcc/ffffff?text=CEO", // imageUrl is still in data but not rendered by default
  children: [
    {
      name: "Asia",
      imageUrl: "https://placehold.co/80x80/aabbcc/ffffff?text=GM",
      children: [
        {
          name: "Japan",
          imageUrl: "https://placehold.co/80x80/aabbcc/ffffff?text=AM",
          children: []
        },
        {
          name: "Singapore",
          imageUrl: "https://placehold.co/80x80/aabbcc/ffffff?text=ET",
          children: []
        },
        {
          name: "China",
          imageUrl: "https://placehold.co/80x80/aabbcc/ffffff?text=ET",
          children: []
        },
        {
          name: "United Arab Emirates",
          imageUrl: "https://placehold.co/80x80/aabbcc/ffffff?text=ET",
          children: []
        },
        
      ],
    },
    {
      name: "Ndemi Otieno",
      imageUrl: "https://placehold.co/80x80/aabbcc/ffffff?text=MS",
      children: [
        {
          name: "Kyrie Petrakis",
          imageUrl: "https://placehold.co/80x80/aabbcc/ffffff?text=SMS",
          children: []
        },
        {
          name: "Kimberly Nguyen",
          imageUrl: "https://placehold.co/80x80/aabbcc/ffffff?text=DMS",
          children: []
        },
      ],
    },
    {
      name: "Rufus Stewart",
      imageUrl: "https://placehold.co/80x80/aabbcc/ffffff?text=BC",
      children: [
        {
          name: "Harper Russo",
          imageUrl: "https://placehold.co/80x80/aabbcc/ffffff?text=HRM",
          children: []
        },
        {
          name: "Isabel Mercado",
          imageUrl: "https://placehold.co/80x80/aabbcc/ffffff?text=DA",
          children: []
        },
      ],
    },
  ],
};

// Node component to represent each person in the chart
const OrgChartNode = ({ node }) => {
  return (
    <div className="flex flex-col items-center mx-4 my-6">
      {/* Employee Card */}
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center min-w-[200px] border border-gray-200">
        <h3 className="font-semibold text-lg text-gray-800 text-center">{node.name}</h3>
      </div>

      {/* Children nodes and connecting lines */}
      {node.children && node.children.length > 0 && (
        <div className="flex flex-col items-center w-full">
          {/* Vertical line connecting from the parent card's bottom to the children's horizontal line */}
          <div className="w-0.5 h-8 bg-blue-500"></div>

          {/* Container for the horizontal line and all child branches */}
          <div className="relative flex justify-center w-full pt-8"> {/* pt-8 creates vertical space for children's connecting lines */}
            {/* Horizontal line: only render if there are multiple children */}
            {node.children.length > 1 && (
              // This line spans across the top of where children's vertical lines will connect
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500"></div>
            )}

            {/* Flex container to arrange child nodes horizontally */}
            <div className="flex justify-center w-full">
              {node.children.map((child, index) => (
                <div key={child.name} className="flex flex-col items-center relative mt-8"> {/* mt-8 pushes child card down to create space for its vertical line */}
                  {/* Vertical line connecting from the horizontal line (above) to the child's card */}
                  {/* Positioned absolutely at the top center of this child's container, going upwards */}
                  <div className="w-0.5 h-8 bg-blue-500 absolute bottom-full left-1/2 transform -translate-x-1/2"></div>
                  <OrgChartNode node={child} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 font-sans">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Company Organizational Chart</h1>
      <div className="overflow-x-auto p-4 bg-white rounded-lg shadow-xl max-w-full">
        {/* The root node of the organizational chart */}
        <OrgChartNode node={orgData} />
      </div>
    </div>
  );
};

export default App;
