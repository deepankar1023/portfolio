import Navbar from "./components/Navbar"
import Image from "next/image"
import { ArrowRight, ExternalLink, Download, GitlabIcon as GitHub } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-[#0c1322] text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4">
        <div className="text-center max-w-4xl mx-auto relative">
          {/* Background decorative elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="inline-block mb-2 px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium animate-fade-in">
              Hi, I'm
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-300 to-teal-400 text-transparent bg-clip-text animate-gradient">
              Deepankar Mishra
            </h1>

            <p className="text-lg sm:text-2xl text-blue-300/90 mb-8 max-w-2xl mx-auto">
              Cloud Security | Full-Stack Developer | IAM Specialist
            </p>

            <div className="flex justify-center gap-4 mb-10 flex-wrap">
              <a
                href="#projects"
                className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="group border border-gray-600 hover:border-blue-500 hover:bg-blue-500/10 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2"
              >
                Download Resume
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Tech Icons with hover effects */}
            <div className="flex justify-center gap-8 sm:gap-10 mt-12 opacity-80">
              <div className="group relative">
                <Image
                  src="/aws.svg"
                  alt="AWS"
                  width={48}
                  height={48}
                  className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  AWS
                </span>
              </div>

              <div className="group relative">
                <Image
                  src="/react.svg"
                  alt="React"
                  width={48}
                  height={48}
                  className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  React
                </span>
              </div>

              <div className="group relative">
                <Image
                  src="/python.svg"
                  alt="Python"
                  width={48}
                  height={48}
                  className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Python
                </span>
              </div>

              <div className="group relative">
                <Image
                  src="/lock.svg"
                  alt="Security"
                  width={48}
                  height={48}
                  className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Security
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0c1322] to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full grayscale hover:grayscale-0 transition-all duration-500 border-4 border-gray-800"
              />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></span>
            </h2>

            <p className="text-lg mb-6 text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer and cloud security specialist with experience in Identity and access
              management. I build secure, scalable solutions that protect digital assets while delivering exceptional
              user experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-gray-300">2022–Present: Senior Cloud Security Engineer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-gray-300">2019–2022: Full-Stack Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-gray-300">B.Tech in Computer Science</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-gray-300">2015–2019: University</span>
              </div>
            </div>

            <div className="flex gap-3 mb-6 flex-wrap">
              <span className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-md text-blue-300 hover:bg-gray-800 transition-colors">
                Communication
              </span>
              <span className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-md text-blue-300 hover:bg-gray-800 transition-colors">
                Problem-solving
              </span>
              <span className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-md text-blue-300 hover:bg-gray-800 transition-colors">
                Teamwork
              </span>
            </div>

            <p className="italic text-blue-300 border-l-2 border-blue-500 pl-4 py-1">
              Driven by curiosity, secured by design.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative bg-[#0d1525]">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#0d1525]"></div>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            Projects
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Here are some of my recent projects that showcase my skills in cloud security, full-stack development, and
            IAM.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group bg-gradient-to-b from-[#1a2233] to-[#232b39] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 border border-gray-800">
              <div className="h-40 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Image src="/lock.svg" alt="Security" width={32} height={32} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-300 group-hover:text-blue-400 transition-colors">
                  SecureCloud Platform
                </h3>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs border border-blue-800/50">
                    IAM
                  </span>
                  <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs border border-blue-800/50">
                    AWS
                  </span>
                  <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs border border-blue-800/50">
                    React
                  </span>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  A cloud security platform for managing IAM policies and compliance across multiple cloud providers.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm">
                    <GitHub className="w-4 h-4" /> Code
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-gradient-to-b from-[#1a2233] to-[#232b39] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 border border-gray-800">
              <div className="h-40 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Image src="/react.svg" alt="React" width={32} height={32} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-300 group-hover:text-blue-400 transition-colors">
                  TaskManager App
                </h3>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs border border-blue-800/50">
                    MongoDB
                  </span>
                  <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs border border-blue-800/50">
                    Express
                  </span>
                  <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs border border-blue-800/50">
                    SQL
                  </span>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  A full-stack task management application with user authentication, role-based access control, and
                  real-time updates.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm">
                    <GitHub className="w-4 h-4" /> Code
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-gradient-to-b from-[#1a2233] to-[#232b39] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 border border-gray-800">
              <div className="h-40 bg-gradient-to-r from-teal-900/20 to-blue-900/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Image src="/python.svg" alt="Python" width={32} height={32} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-300 group-hover:text-blue-400 transition-colors">
                  Anomaly Detection System
                </h3>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs border border-blue-800/50">
                    Python
                  </span>
                  <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs border border-blue-800/50">
                    Machine Learning
                  </span>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  A machine learning model for detecting anomalies in network traffic and identifying potential security
                  threats in real-time.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm">
                    <GitHub className="w-4 h-4" /> Code
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
