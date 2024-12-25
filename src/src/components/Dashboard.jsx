// src/components/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  const companies = [
    {
      id: 1,
      name: 'Example Corp',
      recentCommunications: [
        { type: 'LinkedIn Post', date: '2024-12-20', status: 'completed' },
        { type: 'Email', date: '2024-12-15', status: 'completed' },
        { type: 'Phone Call', date: '2024-12-10', status: 'completed' },
      ],
      nextCommunication: { type: 'Email', date: '2024-12-25' },
      status: 'due-today'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Communication Dashboard</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
          Log Communication
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Companies Overview</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recent Communications</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Scheduled</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {companies.map((company) => (
                  <tr 
                    key={company.id} 
                    className={`
                      ${company.status === 'due-today' ? 'bg-yellow-50' : ''}
                      hover:bg-gray-50 transition-colors duration-150
                    `}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                        {company.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        {company.recentCommunications.map((comm, index) => (
                          <span
                            key={index}
                            className={`
                              text-sm px-3 py-1 rounded-full
                              ${comm.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                              hover:opacity-75 transition-opacity duration-150 cursor-pointer
                              group relative
                            `}
                          >
                            {comm.type}
                            <div className="absolute hidden group-hover:block bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded shadow-lg">
                              {comm.date}
                              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-transparent border-t-gray-900"></div>
                            </div>
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                        {company.nextCommunication.type} - {company.nextCommunication.date}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5">
                        Log Communication
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;