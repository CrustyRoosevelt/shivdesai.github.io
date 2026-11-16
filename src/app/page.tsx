'use client';

import { useState } from 'react';
import { FaLinkedin, FaRocket, FaList } from 'react-icons/fa';
import AnimateOnScroll from '@/components/AnimateOnScroll'
import ResumeModal from '@/components/ResumeModal'
import AerospaceTimeline from '@/components/AerospaceTimeline'

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'classic' | 'mission'>('classic');

  return (
    <main className="w-full bg-[#02070A] text-[#EBF5FA]">
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#02070A]">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <AnimateOnScroll>
                <div className="relative inline-block mb-8">
                  <div className="absolute -left-1.5 -top-1.5 w-20 h-[2px] bg-[#0297DE]"></div>
                  <div className="absolute -left-1.5 -top-1.5 w-[2px] h-20 bg-[#0297DE]"></div>
                  <div className="absolute -right-1 -bottom-1 w-20 h-[2px] bg-[#FC734D]"></div>
                  <div className="absolute -right-1 -bottom-1 w-[2px] h-20 bg-[#FC734D]"></div>
                  <h1 className="text-6xl md:text-7xl font-semibold text-[#0297DE] [letter-spacing:-0.025em] uppercase px-8 py-4">
                    <span className="text-[1.2em] tracking-tighter">S</span>HIV{" "}
                    <span className="text-[1.2em] tracking-tighter">D</span>ESAI
                  </h1>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <div className="flex flex-col gap-4 mb-8">
                  <div>
                    <p className="text-2xl font-semibold text-[#0297DE]">
                      Deputy Director of Program Controls, IRES
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <h2 className="text-xl font-medium text-[#FC734D]">Amentum</h2>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 mb-8">
                  <p className="text-lg text-[#EBF5FA]/85">
                    Deputy Director of Program Controls with expertise in enterprise systems, infrastructure management, and service level agreements. 
                    Proven track record in program management, data analytics, and business intelligence across aerospace and defense sectors.
                  </p>
                  <p className="text-lg text-[#EBF5FA]/85">
                    Currently leading program controls operations for critical government contracts, managing multidisciplinary teams, 
                    and ensuring optimal performance of enterprise technology systems. Specialized in service delivery optimization, 
                    risk management, and strategic technology implementation.
                  </p>
                  <p className="text-lg text-[#EBF5FA]/85">
                    Extensive experience in project engineering, earned value management, and cost analysis. Expert in developing 
                    comprehensive project schedules, resource-loaded baselines, and critical path analysis. Skilled in financial 
                    modeling, budget management, and program performance optimization using advanced analytics and reporting tools.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mb-8">
                  <a href="#experience" className="btn btn-primary">View Experience</a>
                  <button 
                    onClick={() => setIsResumeModalOpen(true)} 
                    className="btn btn-secondary flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </button>
                </div>
              </AnimateOnScroll>
            </div>
            
            <div className="lg:col-span-2 flex flex-col justify-center">
              <AnimateOnScroll>
                <div className="card p-8 bg-[#08131A]">
                  <h3 className="text-xl font-semibold text-[#0297DE] mb-4 uppercase tracking-wide">CONNECT WITH ME</h3>
                  <p className="text-[#94B3C4] mb-6">
                    Reach out on LinkedIn if you'd like to collaborate on aerospace projects or discuss program management opportunities.
                  </p>
                  <div className="flex items-center gap-4">
                    <a 
                      href="https://www.linkedin.com/in/shivdesai1/"
                      className="btn btn-primary inline-flex items-center gap-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-xl" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Key Impact Metrics Section */}
      <section className="bg-[#050D12] border-y border-[#0297DE]/25 py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="card p-6 text-center border-l-4 border-l-[#FC734D] hover:shadow-md transition-all">
                <div className="text-3xl md:text-4xl font-bold text-[#FC734D] mb-1">
                  $5B+
                </div>
                <p className="text-xs md:text-sm uppercase tracking-wider font-semibold text-[#EBF5FA]">
                  Budgets Managed
                </p>
                <p className="text-xs text-[#94B3C4] mt-1">
                  Across Major Defense & Space Programs
                </p>
              </div>

              <div className="card p-6 text-center border-l-4 border-l-[#0297DE] hover:shadow-md transition-all">
                <div className="text-3xl md:text-4xl font-bold text-[#FC734D] mb-1">
                  35+
                </div>
                <p className="text-xs md:text-sm uppercase tracking-wider font-semibold text-[#EBF5FA]">
                  Team Members Led
                </p>
                <p className="text-xs text-[#94B3C4] mt-1">
                  Multidisciplinary Leadership & Mentorship
                </p>
              </div>

              <div className="card p-6 text-center border-l-4 border-l-[#FC734D] hover:shadow-md transition-all">
                <div className="text-3xl md:text-4xl font-bold text-[#FC734D] mb-1">
                  10+
                </div>
                <p className="text-xs md:text-sm uppercase tracking-wider font-semibold text-[#EBF5FA]">
                  Years Experience
                </p>
                <p className="text-xs text-[#94B3C4] mt-1">
                  Aerospace, Defense & Program Controls
                </p>
              </div>

              <div className="card p-6 text-center border-l-4 border-l-[#0297DE] hover:shadow-md transition-all">
                <div className="text-3xl md:text-4xl font-bold text-[#FC734D] mb-1">
                  TS/SCI
                </div>
                <p className="text-xs md:text-sm uppercase tracking-wider font-semibold text-[#EBF5FA]">
                  Active Clearance
                </p>
                <p className="text-xs text-[#94B3C4] mt-1">
                  Special Access & Government Programs
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-[#02070A]">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <AnimateOnScroll>
              <h2 className="section-heading mb-0">Experience</h2>
            </AnimateOnScroll>

            {/* View Mode Switcher */}
            <div className="flex items-center p-1 bg-[#08131A] border border-[#0297DE]/30">
              <button
                onClick={() => setViewMode('classic')}
                className={`text-xs px-3.5 py-1.5 uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 ${
                  viewMode === 'classic'
                    ? 'bg-[#0297DE] text-[#02070A] shadow-sm'
                    : 'text-[#94B3C4] hover:text-[#FC734D]'
                }`}
              >
                <FaList className="text-xs" />
                <span>Standard View</span>
              </button>
              <button
                onClick={() => setViewMode('mission')}
                className={`text-xs px-3.5 py-1.5 uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 ${
                  viewMode === 'mission'
                    ? 'bg-[#0297DE] text-[#02070A] shadow-sm'
                    : 'text-[#94B3C4] hover:text-[#FC734D]'
                }`}
              >
                <FaRocket className={`text-xs ${viewMode === 'mission' ? 'text-[#02070A]' : 'text-[#FC734D]'}`} />
                <span>Mission Trajectory</span>
                <span className="px-1.5 py-0.5 bg-[#FC734D] text-[#02070A] text-[9px] font-extrabold uppercase tracking-tight">
                  BETA
                </span>
              </button>
            </div>
          </div>

          {viewMode === 'mission' ? (
            <AerospaceTimeline />
          ) : (
            <div className="space-y-8">
              {/* Amentum */}
              <AnimateOnScroll>
                <div className="card p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#0297DE]">Amentum</h3>
                      <div className="mt-2">
                        <p className="text-lg font-medium text-[#EBF5FA]">Deputy Director of Program Controls, Integrated R&D for Enterprise Solutions (IRES)</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[#FC734D] font-mono text-sm">July 2025 – Present</p>
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-[#EBF5FA]/85 marker:text-[#FC734D]">
                    <li>Manage and mentor multidisciplinary team of 35+ employees; focusing on skills development, training, and increasing team capacity</li>
                    <li>Spearhead the implementation of new operational tools, establishing infrastructure readiness to secure upcoming contract awards</li>
                    <li>Brief program leadership and government customers on modernization strategies related to follow-on contract proposals</li>
                    <li>Remediate critical regulatory and compliance gaps following a corporate merger, achieving alignment with stringent Missile Defense Agency (MDA) mandates</li>
                  </ul>
                </div>
              </AnimateOnScroll>

              {/* Blue Origin */}
              <AnimateOnScroll>
                <div className="card p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#0297DE]">Blue Origin</h3>
                      <div className="mt-2">
                        <p className="text-lg font-medium text-[#EBF5FA]">Program Planning and Controls Specialist, Blue Ring</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[#FC734D] font-mono text-sm">June 2022 – July 2025</p>
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-[#EBF5FA]/85 marker:text-[#FC734D]">
                    <li>Designed and implemented a new program baseline from a cost/schedule perspective including the generation of WBS structures, resource-loaded schedules, and formation of control accounts with IPT-level budgets</li>
                    <li>Developed fully resource-loaded program baseline for first In-Space Systems government contract and managed cost and schedule as primary project manager</li>
                    <li>Coordinated Blue Ring Vehicle 2 basis-of-estimates and program baseline planning with IPT leaders with goal of multiple vehicles, at rate manufacturing</li>
                    <li>Generated Tableau dashboards for all In-Space Systems programs with reporting requirements and working stretch assignments to provide dashboards to other business units</li>
                    <li>Led Monthly Operations Review (MOR) for entire Blue Ring program and government contracts reporting to In-Space Systems leadership</li>
                  </ul>
                </div>
              </AnimateOnScroll>

              {/* Lockheed Martin - Space */}
              <AnimateOnScroll>
                <div className="card p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#0297DE]">Lockheed Martin - Space</h3>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="text-lg font-medium text-[#EBF5FA]">Project Engineer L3, NextGen GEO</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#FC734D] font-mono text-sm">November 2021 – June 2022</p>
                        </div>
                      </div>
                      <ul className="list-disc list-outside ml-5 space-y-2 text-[#EBF5FA]/85 marker:text-[#FC734D]">
                        <li>Coordinated the completion of engineering projects focused on technical developments and scheduling, while resolving complex engineering design and test problems</li>
                        <li>Provided crucial support to the Factory team through Cost Account Management (CAM) of hardware-related activities</li>
                        <li>Fostered collaboration with Agile Engineering teams to ensure alignment with organizational objectives</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="text-lg font-medium text-[#EBF5FA]">Financial Analyst L3, GPS III</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#FC734D] font-mono text-sm">July 2019 – November 2021</p>
                        </div>
                      </div>
                      <ul className="list-disc list-outside ml-5 space-y-2 text-[#EBF5FA]/85 marker:text-[#FC734D]">
                        <li>Modernized financial data distribution through the development of Business Intelligence systems, enabling earlier access for managers and engineers</li>
                        <li>Implemented sophisticated Tableau dashboards utilizing SQL and VBA to automate reporting processes, reducing manual effort by 70%</li>
                        <li>Managed a $50M annual operating budget while maintaining a 98% forecast accuracy rate</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Lockheed Martin - RMS */}
              <AnimateOnScroll>
                <div className="card p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#0297DE]">Lockheed Martin – Rotary and Mission Systems (RMS)</h3>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="text-lg font-medium text-[#EBF5FA]">Financial Analyst L2, C2G DogPatch</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#FC734D] font-mono text-sm">January 2019 – July 2019</p>
                        </div>
                      </div>
                      <ul className="list-disc list-outside ml-5 space-y-2 text-[#EBF5FA]/85 marker:text-[#FC734D]">
                        <li>Developed comprehensive financial analysis tools using Microsoft Access and Power Query, creating dynamic workbooks for efficient financial data management</li>
                        <li>Expanded role to include FP&A responsibilities, utilizing Hyperion for detailed analysis of Orders, Risk and Opportunities, EBIT, and Long Range Planning (LRP)</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="text-lg font-medium text-[#EBF5FA]">Financial Analyst L2, EADGE-T</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#FC734D] font-mono text-sm">November 2017 – January 2019</p>
                        </div>
                      </div>
                      <ul className="list-disc list-outside ml-5 space-y-2 text-[#EBF5FA]/85 marker:text-[#FC734D]">
                        <li>Led critical program performance analysis and senior management reviews, successfully improving program cost status from RED to GREEN through strategic evaluation and corrective actions</li>
                        <li>Managed comprehensive baseline and Estimate at Completion (EAC) adjustments to incorporate contract amendments and new schedule integrations</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="text-lg font-medium text-[#EBF5FA]">Financial Analyst L1, Combat System Engineering Agent (CSEA)</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#FC734D] font-mono text-sm">February 2017 – November 2017</p>
                        </div>
                      </div>
                      <ul className="list-disc list-outside ml-5 space-y-2 text-[#EBF5FA]/85 marker:text-[#FC734D]">
                        <li>Enhanced program-level reporting efficiency by streamlining internal and external performance report preparation, creating additional review time for stakeholders</li>
                        <li>Developed and optimized Visual Basic scripting interfaces for cross-platform integration and automation, significantly reducing manual intervention while improving process reliability</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="text-lg font-medium text-[#EBF5FA]">Financial Analyst L1, Korean Destroyer eXperimental (KDX-III)</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#FC734D] font-mono text-sm">February 2015 – February 2017</p>
                        </div>
                      </div>
                      <ul className="list-disc list-outside ml-5 space-y-2 text-[#EBF5FA]/85 marker:text-[#FC734D]">
                        <li>Improved data integrity through the implementation of batch reporting in proprietary software suites</li>
                        <li>Made significant contributions to the Batch II Offsets proposal, achieving a 37% cost reduction while maintaining contractual obligations</li>
                        <li>Leveraged extensive SAP knowledge to develop and implement custom scripting solutions, resulting in a 12.5% reduction in processing time</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          )}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-[#050D12] border-y border-[#0297DE]/20">
        <div className="section-container">
          <AnimateOnScroll>
            <h2 className="section-heading">Education</h2>
          </AnimateOnScroll>
          <div className="space-y-6">
            <AnimateOnScroll>
              <div className="card p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#0297DE]">Georgetown University</h3>
                    <p className="text-lg text-[#EBF5FA]">Master of Science in Supply Chain Management</p>
                    <p className="text-[#FC734D] font-medium">GPA: 4.0</p>
                  </div>
                  <p className="text-[#FC734D] font-mono text-sm">2023</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="card p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#0297DE]">University of Central Florida</h3>
                    <p className="text-lg text-[#EBF5FA]">Bachelor of Science in Business Administration</p>
                    <p className="text-[#94B3C4]">Major in Finance, Minor in Accounting</p>
                  </div>
                  <p className="text-[#FC734D] font-mono text-sm">2014</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-[#02070A]">
        <div className="section-container">
          <AnimateOnScroll>
            <h2 className="section-heading">Skills and Systems</h2>
          </AnimateOnScroll>
          
          {/* Security Clearance */}
          <AnimateOnScroll>
            <div className="mb-12">
              <div className="card p-6 border-2 border-[#FC734D] bg-[#08131A]">
                <h3 className="text-xl font-semibold text-[#FC734D] mb-2 uppercase tracking-wide">Security Clearance</h3>
                <p className="text-[#EBF5FA] font-medium">Active TS/SCI – Eligibility Date: 2021-11-26</p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-[#0297DE] mb-4">Program Management</h3>
                <ul className="space-y-2 text-[#EBF5FA]/85">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FC734D] rounded-full mr-2"></span>
                    Earned Value Management (EVM)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FC734D] rounded-full mr-2"></span>
                    Risk & Opportunity Management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FC734D] rounded-full mr-2"></span>
                    Critical Path & Baseline Analysis
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FC734D] rounded-full mr-2"></span>
                    Resource-Loaded Scheduling
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold text-[#0297DE] mb-4">Project Tools</h3>
                <ul className="space-y-2 text-[#EBF5FA]/85">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FC734D] rounded-full mr-2"></span>
                    Jira & Confluence
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FC734D] rounded-full mr-2"></span>
                    Digital.ai Agility
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FC734D] rounded-full mr-2"></span>
                    Oracle Primavera P6
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FC734D] rounded-full mr-2"></span>
                    Deltek Cobra & Microsoft Project
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold text-[#0297DE] mb-4">Data & Analytics</h3>
                <ul className="space-y-2 text-[#EBF5FA]/85">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FC734D] rounded-full mr-2"></span>
                    Power BI, Power Apps & Automate
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FC734D] rounded-full mr-2"></span>
                    Tableau & SQL
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FC734D] rounded-full mr-2"></span>
                    Python & Visual Basic (VBA)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FC734D] rounded-full mr-2"></span>
                    Advanced Financial Modeling
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold text-[#0297DE] mb-4">Enterprise Systems</h3>
                <ul className="space-y-2 text-[#EBF5FA]/85">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FC734D] rounded-full mr-2"></span>
                    SAP & SAP Scripting
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FC734D] rounded-full mr-2"></span>
                    Empower
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FC734D] rounded-full mr-2"></span>
                    Salesforce & NetSuite
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FC734D] rounded-full mr-2"></span>
                    Hyperion FP&A
                  </li>
                </ul>
              </div>

              <div className="card p-6 md:col-span-2 lg:col-span-2">
                <h3 className="text-xl font-semibold text-[#0297DE] mb-4">Languages</h3>
                <p className="text-[#EBF5FA]/85">
                  Conversational Spanish, German, and Gujarati
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  )
}
