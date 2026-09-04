import React from 'react';

type ScheduleRow = {
  time: string;
  session: string;
  bold?: boolean;
};

const scheduleData: ScheduleRow[] = [
  { time: '2:00 – 2:05 PM', session: 'Welcome and Introduction', bold: true },
  { time: '2:05 – 2:35 PM', session: 'Hien Van Nguyen, University of Houston', bold: true },
  { time: '2:35 – 2:40 PM', session: 'Q&A / Transition' },
  { time: '2:40 – 3:12 PM', session: 'Paper Session I (4 min each)', bold: true },
  { time: '2:40 – 2:44 PM', session: 'Rule-Compliant Brain MRI Volumetry Report Generation with Locally Deployable LLMs' },
  { time: '2:44 – 2:48 PM', session: 'PSV2026: A Fine-Grained Clinical Factuality Dataset for Medical Vision-Language Models' },
  { time: '2:48 – 2:52 PM', session: 'Contrastive Answer Calibration for Medical Visual Question Answering' },
  { time: '2:52 – 2:56 PM', session: 'Diagnosis of Autism Spectrum Disorder using LLMs and Multimodal Brain Connectivity Analysis' },
  { time: '2:56 – 3:00 PM', session: 'Pixel-FLAIR: Leveraging Anatomical Segmentation for Region-Specific Supervision in Retinal Foundational Vision-Language Models' },
  { time: '3:00 – 3:04 PM', session: 'LLM-Based Differential Diagnosis of Neurodegenerative Diseases from MRI-Derived Brain Atrophy Reports' },
  { time: '3:04 – 3:08 PM', session: 'Clinical Reliability in Multilingual Chest X-ray Report Generation' },
  { time: '3:08 – 3:12 PM', session: 'PathLLaVA: Continuous Vision-Language Alignment for Bladder Cancer Pathology Report Generation' },
  { time: '3:12 – 3:13 PM', session: 'Transition', bold: true },
  { time: '3:13 – 3:43 PM', session: 'Keynote II – Jayashree Kalpathy-Cramer, Colorado', bold: true },
  { time: '3:43 – 3:48 PM', session: 'Q&A / Transition' },
  { time: '3:48 – 4:18 PM', session: 'Coffee Break', bold: true },
  { time: '4:18 – 4:50 PM', session: 'Paper Session II (4 min each)', bold: true },
  { time: '4:18 – 4:22 PM', session: 'Balancing Retrieved Evidence for 3D CT Report Generation' },
  { time: '4:22 – 4:26 PM', session: 'A Real-World Analysis of an AI Chest X-ray Reporting Assistant Focused on Factuality and Lines & Tubes' },
  { time: '4:26 – 4:30 PM', session: 'FedPref: Federated Preference Learning for Structured Radiology Report Extraction' },
  { time: '4:30 – 4:34 PM', session: 'Authority-Preserving Evaluation of Medical Vision-Language Assistants' },
  { time: '4:34 – 4:38 PM', session: 'Evaluating Medical Report Generation on Real Clinical Data: A Case Study' },
  { time: '4:38 – 4:42 PM', session: "BioMAD: Biologically Guided Multi-Axis Delta Learning for Longitudinal Alzheimer's Disease Classification" },
  { time: '4:42 – 4:46 PM', session: 'LLM-HypSFCN: LLM-Guided Hyperbolic Structure-Function Coupling Network for Early Cognitive Assessment' },
  { time: '4:46 – 4:50 PM', session: 'Sliding window-based local feature extraction for findings reports generation from longitudinal 3D CT volumes' },
  { time: '4:50 – 5:20 PM', session: 'Tingting Dan, UNC', bold: true },
  { time: '5:20 – 5:30 PM', session: 'Closing', bold: true },
];

export default function Schedule() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Workshop Schedule</h1>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
        <span className="inline-flex items-center gap-1">
          <span className="font-medium text-gray-800">Date:</span> September 27, 2026
        </span>
        <span className="hidden sm:block text-gray-300">|</span>
        <span className="inline-flex items-center gap-1">
          <span className="font-medium text-gray-800">Room:</span> TBA
        </span>
        <span className="hidden sm:block text-gray-300">|</span>
        <span className="inline-flex items-center gap-1">
          <span className="font-medium text-gray-800">Time:</span> 2:00 PM – 5:30 PM (France Local Time)
        </span>
      </div>

      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider w-40">
                Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                Session / Topic
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {scheduleData.map((row, idx) => (
              <tr key={idx} className={row.bold ? 'bg-gray-50' : 'bg-white'}>
                <td className={`px-6 py-3 text-sm whitespace-nowrap ${row.bold ? 'font-semibold text-gray-800' : 'text-gray-500'}`}>
                  {row.time}
                </td>
                <td className={`px-6 py-3 text-sm ${row.bold ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                  {row.session}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm text-gray-500 italic">
        Note: 16 papers accepted (Oral) are scheduled across two paper sessions, 4 minutes each, bookended by two keynote talks.
      </p>
    </div>
  );
}
