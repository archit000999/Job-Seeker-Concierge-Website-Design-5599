import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiLogOut, FiTarget, FiMail, FiTrendingUp, FiCalendar } = FiIcons;

const DashboardPage = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">ApplyFirst</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <SafeIcon icon={FiUser} className="w-4 h-4" />
                <span className="text-sm">Welcome back!</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <SafeIcon icon={FiLogOut} className="w-4 h-4" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Your Job Search Dashboard
            </h1>
            <p className="text-gray-600">
              Your automated outreach is working around the clock to land you interviews.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={FiMail} className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">247</div>
                  <div className="text-sm text-gray-600">Outreach Sent</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">32</div>
                  <div className="text-sm text-gray-600">Responses</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={FiCalendar} className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">8</div>
                  <div className="text-sm text-gray-600">Interviews</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={FiTarget} className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">13%</div>
                  <div className="text-sm text-gray-600">Response Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-900">Senior Product Manager at TechCorp</div>
                    <div className="text-sm text-gray-600">Hiring manager responded - Interview scheduled</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">2 hours ago</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-900">Engineering Director at StartupXYZ</div>
                    <div className="text-sm text-gray-600">Outreach sent to hiring manager</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">4 hours ago</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-900">VP Marketing at GrowthCo</div>
                    <div className="text-sm text-gray-600">Initial screening call completed</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">1 day ago</div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default DashboardPage;