'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  LogOut, 
  FileText, 
  FolderOpen, 
  BarChart3,
  Settings,
  User,
  Lock
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { prisma } from '@/lib/prisma';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (!auth) {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    router.push('/admin');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'blogs', label: 'Blog Posts', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden flex flex-col">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      {/* Header */}
      <header className="glass-card border-b border-white/20 p-6 relative z-10 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-2xl blur-xl"></div>
              <User className="w-8 h-8 text-white relative z-10" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-black mb-1">Admin Dashboard</h1>
              <p className="text-gray-600 text-lg">Manage your portfolio content</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-6 py-3 bg-red-50 border-2 border-red-200 rounded-xl text-red-600 hover:bg-red-100 hover:border-red-300 transition-colors font-semibold"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </header>

      <div className="flex-1 flex flex-row min-h-0">
        {/* Sidebar */}
        <div className="w-72 flex-shrink-0 flex flex-col">
          <div className="p-4 h-full">
            <div className="glass-card rounded-2xl p-4 h-full border border-white/30 shadow-xl flex flex-col">
              <div className="mb-6 flex-shrink-0">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Navigation</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              </div>
              <nav className="space-y-2 flex-shrink-0">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
              
              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex-shrink-0">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Quick Stats</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Projects</span>
                    <span className="font-semibold text-gray-800">12</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Blogs</span>
                    <span className="font-semibold text-gray-800">8</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Views</span>
                    <span className="font-semibold text-gray-800">2.8k</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="p-4 h-full">
            <div className="glass-card rounded-2xl p-6 border border-white/30 shadow-lg h-full flex flex-col">
              {activeTab === 'overview' && <OverviewTab />}
              {activeTab === 'projects' && <ProjectsTab />}
              {activeTab === 'blogs' && <BlogsTab />}
              {activeTab === 'settings' && <SettingsTab />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Overview Tab Component
const OverviewTab = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-6 flex-shrink-0">
        <h2 className="text-3xl font-bold text-black mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Welcome back! Here's what's happening with your portfolio.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8 flex-shrink-0">
        <div className="glass-card rounded-2xl p-6 border border-white/30 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
              <FolderOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium mb-1">Total Projects</p>
              <p className="text-3xl font-bold text-black">12</p>
              <p className="text-green-600 text-sm font-medium">+2 this month</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 border border-white/30 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium mb-1">Blog Posts</p>
              <p className="text-3xl font-bold text-black">8</p>
              <p className="text-green-600 text-sm font-medium">+1 this week</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 border border-white/30 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium mb-1">Total Views</p>
              <p className="text-3xl font-bold text-black">2,847</p>
              <p className="text-green-600 text-sm font-medium">+15% this month</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 min-h-0">
        <div className="flex items-center gap-3 flex-shrink-0 mb-4">
          <h3 className="text-xl font-bold text-black">Recent Activity</h3>
          <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
        </div>
        <div className="space-y-3 overflow-y-auto flex-1">
          {[
            { action: 'Published new project', item: 'E-commerce Platform', time: '2 hours ago', type: 'project' },
            { action: 'Updated blog post', item: 'React Best Practices', time: '1 day ago', type: 'blog' },
            { action: 'Added new project', item: 'Mobile App Design', time: '3 days ago', type: 'project' }
          ].map((activity, index) => (
            <div className="flex items-center gap-4 p-4 glass-card rounded-xl border border-white/30 shadow-sm">
              <div className={`w-3 h-3 rounded-full ${
                activity.type === 'project' ? 'bg-blue-500' : 'bg-green-500'
              }`}></div>
              <div className="flex-1">
                <p className="text-black font-semibold">
                  {activity.action}: <span className="text-orange-600">{activity.item}</span>
                </p>
                <p className="text-gray-600 text-sm">{activity.time}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                activity.type === 'project' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-green-100 text-green-700'
              }`}>
                {activity.type === 'project' ? 'Project' : 'Blog'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Projects Tab Component
const ProjectsTab = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [projects, setProjects] = useState([
    { id: 1, title: 'E-commerce Platform', category: 'Web', status: 'Published', date: '2024-01-15' },
    { id: 2, title: 'Mobile Banking App', category: 'Mobile', status: 'Draft', date: '2024-01-10' },
    { id: 3, title: 'AI Chatbot', category: 'AI & ML', status: 'Published', date: '2024-01-05' }
  ]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6 flex-shrink-0">
        <div>
          <h2 className="text-3xl font-bold text-black mb-1">Projects Management</h2>
          <p className="text-gray-600">Manage your portfolio projects and showcase your work</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 px-4 py-2 btn-primary text-sm font-semibold hover:shadow-lg transition-shadow"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </button>
      </div>

      {showAddForm && <AddProjectForm onClose={() => setShowAddForm(false)} />}

      <div className="space-y-4 overflow-y-auto flex-1 min-h-0">
        {projects.map((project, index) => (
          <div className="glass-card rounded-xl p-4 border border-white/30 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 text-sm font-medium">Category:</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Published' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-gray-600 text-sm">{project.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Blogs Tab Component
const BlogsTab = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'React Best Practices', category: 'Web Development', status: 'Published', date: '2024-01-12' },
    { id: 2, title: 'Machine Learning Basics', category: 'AI & ML', status: 'Draft', date: '2024-01-08' },
    { id: 3, title: 'Mobile App Security', category: 'Cybersecurity', status: 'Published', date: '2024-01-03' }
  ]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6 flex-shrink-0">
        <div>
          <h2 className="text-3xl font-bold text-black mb-1">Blog Posts Management</h2>
          <p className="text-gray-600">Create and manage your blog content to share your knowledge</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 px-4 py-2 btn-primary text-sm font-semibold hover:shadow-lg transition-shadow"
        >
          <Plus className="w-4 h-4" />
          Add Blog Post
        </button>
      </div>

      {showAddForm && <AddBlogForm onClose={() => setShowAddForm(false)} />}

      <div className="space-y-4 overflow-y-auto flex-1 min-h-0">
        {blogs.map((blog, index) => (
          <div className="glass-card rounded-xl p-4 border border-white/30 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-3">{blog.title}</h3>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 text-sm font-medium">Category:</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {blog.category}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    blog.status === 'Published' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {blog.status}
                  </span>
                  <span className="text-gray-600 text-sm">{blog.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Settings Tab Component
const SettingsTab = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-6 flex-shrink-0">
        <h2 className="text-3xl font-bold text-black mb-1">Settings</h2>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>
      
      <div className="space-y-6 overflow-y-auto flex-1 min-h-0">
        <div className="glass-card rounded-2xl p-8 border-2 border-white/20 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black">Profile Settings</h3>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Display Name</label>
              <input
                type="text"
                defaultValue="Abdi Desalegn"
                className="form-input w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Email</label>
              <input
                type="email"
                defaultValue="abdidesalegn00@gmail.com"
                className="form-input w-full"
              />
            </div>
            <button className="btn-primary px-6 py-3 hover:shadow-lg transition-shadow">
              Update Profile
            </button>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border-2 border-white/20 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black">Security</h3>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Current Password</label>
              <input
                type="password"
                className="form-input w-full"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">New Password</label>
              <input
                type="password"
                className="form-input w-full"
                placeholder="Enter new password"
              />
            </div>
            <button className="btn-primary px-6 py-3 hover:shadow-lg transition-shadow">
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add Project Form Component
const AddProjectForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    stack: '',
    github: '',
    demo: '',
    image: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Project data:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="glass-card rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/30 shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black">Add New Project</h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Project Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="form-input w-full"
              placeholder="Enter project title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="form-textarea w-full"
              placeholder="Enter project description"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="form-input w-full"
                required
              >
                <option value="">Select category</option>
                <option value="Web">Web</option>
                <option value="Mobile">Mobile</option>
                <option value="AI & ML">AI & ML</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Physics">Physics</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Tech Stack</label>
              <input
                type="text"
                value={formData.stack}
                onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
                className="form-input w-full"
                placeholder="React, Node.js, MongoDB"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">GitHub URL</label>
              <input
                type="url"
                value={formData.github}
                onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                className="form-input w-full"
                placeholder="https://github.com/username/project"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Demo URL</label>
              <input
                type="url"
                value={formData.demo}
                onChange={(e) => setFormData({ ...formData, demo: e.target.value })}
                className="form-input w-full"
                placeholder="https://demo-url.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Project Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="form-input w-full"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              className="flex-1 btn-primary py-3 text-base font-semibold hover:shadow-lg transition-shadow"
            >
              Add Project
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors border-2 border-gray-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Add Blog Form Component
const AddBlogForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    readTime: '',
    image: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Blog data:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="glass-card rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/30 shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black">Add New Blog Post</h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Blog Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="form-input w-full"
              placeholder="Enter blog title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Excerpt</label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              rows={3}
              className="form-textarea w-full"
              placeholder="Enter blog excerpt"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Content</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={8}
              className="form-textarea w-full"
              placeholder="Enter blog content (Markdown supported)"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="form-input w-full"
                required
              >
                <option value="">Select category</option>
                <option value="Web Development">Web Development</option>
                <option value="AI & ML">AI & ML</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Physics">Physics</option>
                <option value="Mobile Development">Mobile Development</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Read Time</label>
              <input
                type="text"
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                className="form-input w-full"
                placeholder="5 min read"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Featured Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="form-input w-full"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-colors shadow-lg"
            >
              Add Blog Post
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors border-2 border-gray-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
