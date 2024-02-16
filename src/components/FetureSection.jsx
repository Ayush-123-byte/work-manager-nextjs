"use client"
import React from 'react';

const FeatureSection = () => {
  return (
    <div className="bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Features of Our Work Manager</h2>
        <div className="flex flex-wrap -mx-4">
          {/* Feature 1 */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Task Organization</h3>
              <p className="text-gray-600">
                Efficiently organize your tasks with our intuitive task management system.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Collaborative Workspaces</h3>
              <p className="text-gray-600">
                Foster collaboration among team members with dedicated workspaces for projects.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Progress Tracking</h3>
              <p className="text-gray-600">
                Keep track of project progress and milestones in real-time for better insights.
              </p>
            </div>
          </div>

          {/* Add more features as needed */}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
