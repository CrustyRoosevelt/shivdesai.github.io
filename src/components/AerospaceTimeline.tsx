'use client';

import { useState } from 'react';
import { FaRocket, FaSatellite, FaShieldAlt, FaChartLine, FaCheckCircle, FaUsers, FaTools } from 'react-icons/fa';

interface Mission {
  id: string;
  codename: string;
  company: string;
  role: string;
  period: string;
  status: 'ACTIVE ORBIT' | 'MISSION COMPLETE';
  location: string;
  category: ('leadership' | 'controls' | 'space' | 'bi')[];
  summary: string;
  telemetry: { label: string; value: string }[];
  bulletPoints: string[];
}

const MISSIONS: Mission[] = [
  {
    id: 'm-05',
    codename: 'MISSION IRES // ENTERPRISE READINESS',
    company: 'Amentum',
    role: 'Deputy Director of Program Controls',
    period: 'July 2025 – Present',
    status: 'ACTIVE ORBIT',
    location: 'Hybrid / Colorado Springs, CO',
    category: ['leadership', 'controls'],
    summary: 'Directing enterprise program controls and infrastructure readiness for Missile Defense Agency (MDA) contracts.',
    telemetry: [
      { label: 'Team Size', value: '35+ Staff' },
      { label: 'Mandate', value: 'MDA Compliance' },
      { label: 'Focus', value: 'Proposal Modernization' },
    ],
    bulletPoints: [
      'Manage and mentor multidisciplinary team of 35+ employees; focusing on skills development, training, and increasing team capacity',
      'Spearhead the implementation of new operational tools, establishing infrastructure readiness to secure upcoming contract awards',
      'Brief program leadership and government customers on modernization strategies related to follow-on contract proposals',
      'Remediate critical regulatory and compliance gaps following a corporate merger, achieving alignment with stringent Missile Defense Agency (MDA) mandates',
    ],
  },
  {
    id: 'm-04',
    codename: 'MISSION BLUE RING // IN-SPACE LOGISTICS',
    company: 'Blue Origin',
    role: 'Program Planning & Controls Specialist',
    period: 'June 2022 – July 2025',
    status: 'MISSION COMPLETE',
    location: 'Littleton, CO',
    category: ['controls', 'space', 'bi', 'leadership'],
    summary: 'Architected cost/schedule baseline and MOR cadence for multi-vehicle In-Space logistics and first government flight contracts.',
    telemetry: [
      { label: 'Program', value: 'Blue Ring V1/V2' },
      { label: 'Scope', value: 'Rate Manufacturing' },
      { label: 'Reporting', value: 'Executive MOR Lead' },
    ],
    bulletPoints: [
      'Designed and implemented a new program baseline from a cost/schedule perspective including WBS structures, resource-loaded schedules, and IPT-level budgets',
      'Developed fully resource-loaded program baseline for first In-Space Systems government contract and managed cost/schedule as primary project manager',
      'Coordinated Blue Ring Vehicle 2 basis-of-estimates and baseline planning for multi-vehicle rate manufacturing',
      'Generated Tableau dashboards for all In-Space Systems programs and provided stretch assignment reporting across business units',
      'Led Monthly Operations Review (MOR) for entire Blue Ring program and government contracts reporting to In-Space Systems leadership',
    ],
  },
  {
    id: 'm-03',
    codename: 'MISSION NEXTGEN GEO & GPS III // ORBITAL DEFENSE',
    company: 'Lockheed Martin - Space',
    role: 'Project Engineer L3 & Financial Analyst L3',
    period: 'July 2019 – June 2022',
    status: 'MISSION COMPLETE',
    location: 'Longmont, CO',
    category: ['space', 'controls', 'bi'],
    summary: 'Hardware-level CAM execution on NextGen GEO and BI modernization across $50M operating budgets on GPS III satellite programs.',
    telemetry: [
      { label: 'Budget', value: '$50M Managed' },
      { label: 'Efficiency', value: '70% Automation' },
      { label: 'Domain', value: 'Agile Space Engineering' },
    ],
    bulletPoints: [
      'Coordinated technical development, scheduling, and resolution of complex engineering design and test issues on NextGen GEO',
      'Supported Factory team in Cost Account Management (CAM) of hardware activities in alignment with Agile Engineering teams',
      'Modernized financial BI systems for GPS III, developing Tableau dashboards utilizing SQL/VBA to reduce manual effort by 70%',
      'Managed $50M annual operating budget with a 98% forecast accuracy rate and resolved contractual Corrective Action Requests (CAR)',
    ],
  },
  {
    id: 'm-02',
    codename: 'MISSION C2G & EADGE-T // TACTICAL RADAR & C2',
    company: 'Lockheed Martin – RMS',
    role: 'Financial Analyst L2',
    period: 'November 2017 – July 2019',
    status: 'MISSION COMPLETE',
    location: 'Moorestown, NJ / Remote',
    category: ['controls', 'bi'],
    summary: 'Turnaround of critical program variance from RED to GREEN and FP&A modeling for Command & Control radar portfolios.',
    telemetry: [
      { label: 'Program Health', value: 'RED -> GREEN Recovery' },
      { label: 'Tools', value: 'Hyperion & Power Query' },
    ],
    bulletPoints: [
      'Led critical program performance analysis on EADGE-T, successfully improving program cost status from RED to GREEN',
      'Managed baseline and EAC adjustments to incorporate contract amendments and new schedule integrations',
      'Developed financial analysis databases using MS Access and Power Query, expanding role to FP&A analysis for Orders, Risk, EBIT, and LRP',
    ],
  },
  {
    id: 'm-01',
    codename: 'MISSION AEGIS CSEA & KDX-III // NAVAL OFFSETS',
    company: 'Lockheed Martin – RMS',
    role: 'Financial Analyst L1',
    period: 'February 2015 – November 2017',
    status: 'MISSION COMPLETE',
    location: 'Moorestown, NJ',
    category: ['controls', 'bi'],
    summary: 'International naval destroyer proposal optimizations and SAP Scripting automation workflows.',
    telemetry: [
      { label: 'Proposal Cost', value: '37% Cost Reduction' },
      { label: 'Efficiency', value: '12.5% Time Saved' },
    ],
    bulletPoints: [
      'Contributed to KDX-III Batch II Offsets proposal, achieving 37% cost reduction while fulfilling customer obligations',
      'Developed custom SAP Scripting automation, reducing processing cycle times by 12.5%',
      'Streamlined performance reporting for Combat System Engineering Agent (CSEA), giving stakeholders 2 additional review days',
    ],
  },
];

type CategoryFilter = 'all' | 'controls' | 'space' | 'bi' | 'leadership';

export default function AerospaceTimeline() {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [selectedMission, setSelectedMission] = useState<string>(MISSIONS[0].id);

  const filteredMissions = filter === 'all' 
    ? MISSIONS 
    : MISSIONS.filter((m) => m.category.includes(filter));

  const activeMission = MISSIONS.find((m) => m.id === selectedMission) || MISSIONS[0];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Interactive Filter Subheader */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-gray-100 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-forest font-semibold">
          <FaRocket className="text-sm" />
          <span>Flight Telemetry & Trajectory Mode</span>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2">
          {(
            [
              { id: 'all', label: 'All Missions' },
              { id: 'leadership', label: 'Leadership' },
              { id: 'controls', label: 'Program Controls & EVM' },
              { id: 'space', label: 'Space Systems' },
              { id: 'bi', label: 'BI & Analytics' },
            ] as { id: CategoryFilter; label: string }[]
          ).map((tab) => {
            const isSelected = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`text-xs px-3 py-1.5 uppercase tracking-wider font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-forest text-white shadow-sm'
                    : 'bg-pale text-gray-700 dark:text-slate-300 hover:bg-forest/10 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid: Timeline Orbit Track (Left) + Selected Mission Telemetry (Right) */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Orbit Track / Mission Cards (7 cols) */}
        <div className="lg:col-span-7 relative pl-6 border-l-2 border-forest/30 dark:border-emerald-500/30 space-y-6">
          {filteredMissions.map((mission, idx) => {
            const isSelected = mission.id === activeMission.id;
            return (
              <div
                key={mission.id}
                onClick={() => setSelectedMission(mission.id)}
                className={`relative card p-6 cursor-pointer transition-all duration-300 text-left group ${
                  isSelected
                    ? 'border-2 border-forest ring-2 ring-forest/20 shadow-md scale-[1.01]'
                    : 'hover:border-forest/60'
                }`}
              >
                {/* Orbital Node Indicator */}
                <div
                  className={`absolute -left-[31px] top-6 w-4 h-4 rounded-full border-2 transition-colors ${
                    isSelected
                      ? 'bg-forest border-white ring-4 ring-forest/20 dark:ring-emerald-400/30'
                      : 'bg-white dark:bg-[#070b12] border-forest group-hover:bg-forest/30'
                  }`}
                />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="text-xs font-mono tracking-wider font-semibold text-forest uppercase">
                    {mission.codename}
                  </div>
                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-none ${
                      mission.status === 'ACTIVE ORBIT'
                        ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40'
                        : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400'
                    }`}
                  >
                    {mission.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100">
                  {mission.company}
                </h3>
                <p className="text-sm font-medium text-forest mb-2">
                  {mission.role}
                </p>

                <p className="text-xs text-gray-600 dark:text-slate-300 line-clamp-2">
                  {mission.summary}
                </p>

                <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-slate-400 mt-4 pt-3 border-t border-gray-100 dark:border-slate-800">
                  <span>{mission.location}</span>
                  <span className="font-mono">{mission.period}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Telemetry Detail Monitor (5 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="card p-6 border-2 border-forest bg-white dark:bg-[#0f1726] shadow-lg space-y-6">
            {/* Monitor Header */}
            <div className="border-b border-gray-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-forest font-bold mb-1">
                <FaSatellite className="animate-pulse" />
                <span>Mission Telemetry & Deliverables</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-slate-100">
                {activeMission.company}
              </h4>
              <p className="text-sm text-forest font-medium mt-0.5">
                {activeMission.role}
              </p>
              <p className="text-xs text-gray-500 dark:text-slate-400 font-mono mt-1">
                {activeMission.period} | {activeMission.location}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 bg-pale p-3 border border-gray-200 dark:border-slate-800">
              {activeMission.telemetry.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-[10px] uppercase font-bold text-gray-500 dark:text-slate-400 tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-xs font-bold text-forest mt-0.5">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Deliverables / Direct Bullet Points */}
            <div>
              <h5 className="text-xs uppercase tracking-wider font-bold text-gray-800 dark:text-slate-200 mb-3 flex items-center gap-1.5">
                <FaCheckCircle className="text-forest text-sm" />
                <span>Key Mission Accomplishments</span>
              </h5>
              <ul className="space-y-2.5 text-xs text-gray-600 dark:text-slate-300">
                {activeMission.bulletPoints.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-forest rounded-full mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
