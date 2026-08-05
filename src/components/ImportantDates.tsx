import React from 'react';

const dates = [
  { event: 'Paper Submission Deadline', date: 'July 15, 2026' },
  { event: 'Notification of Acceptance', date: 'July 29, 2026' },
  { event: 'Camera-Ready Submission', date: 'August 7, 2026' },
  { event: 'Workshop Date', date: 'September 27, 2026' }
];

export default function ImportantDates() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Important Dates</h1>

      <div className="mt-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {dates.map((item) => (
              <li key={item.event} className="px-6 py-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-8">
                  <div className="text-sm font-semibold text-indigo-600">{item.event}</div>
                  <div className="text-sm font-medium text-gray-700 sm:text-right whitespace-nowrap">{item.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
