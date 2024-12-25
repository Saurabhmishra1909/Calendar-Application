import React, { useState } from 'react';

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [communications] = useState([
    { 
      id: 1, 
      company: 'Example Corp', 
      type: 'Email', 
      date: '2024-12-25', 
      notes: 'Follow-up meeting',
      status: 'pending'
    },
    { 
      id: 2, 
      company: 'Tech Solutions', 
      type: 'Phone Call', 
      date: '2024-12-26', 
      notes: 'Quarterly review',
      status: 'completed'
    }
  ]);

  // Function to change the current month
  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  // Function to generate the calendar days for the current month
  const generateCalendarDays = () => {
    const days = [];
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    // Get the starting point (Sunday of the week containing the first day of the month)
    const startDay = new Date(firstDayOfMonth);
    startDay.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay());

    // Generate 42 days (6 weeks grid)
    for (let i = 0; i < 42; i++) {
      const day = new Date(startDay);
      day.setDate(startDay.getDate() + i);
      days.push(day);
    }

    return days.map((day) => {
      const isCurrentMonth = day.getMonth() === currentDate.getMonth();
      const isToday = day.toDateString() === new Date().toDateString();
      const matchingEvent = communications.find(comm => comm.date === day.toISOString().split('T')[0]);

      return (
        <div 
          key={day.toISOString()} 
          className={`p-2 min-h-[120px] flex flex-col justify-between ${isCurrentMonth ? 'bg-white' : 'bg-gray-100'} ${isToday ? 'border-2 border-blue-500' : ''} hover:bg-gray-50 transition-colors duration-200`}
          onClick={() => matchingEvent && setSelectedEvent(matchingEvent)}
        >
          <span className={`text-sm ${isCurrentMonth ? 'text-gray-800' : 'text-gray-400'}`}>
            {day.getDate()}
          </span>
          {matchingEvent && (
            <div className={`mt-2 text-xs px-2 py-1 rounded-full ${getEventColor(matchingEvent.status)}`}>
              {matchingEvent.company}
            </div>
          )}
        </div>
      );
    });
  };

  const getEventColor = (status) => {
    return status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Communication Calendar</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => changeMonth(-1)}
            className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors duration-200"
          >
            ← Previous
          </button>
          <span className="text-lg font-semibold py-2">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </span>
          <button
            onClick={() => changeMonth(1)}
            className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Next →
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
        <div className="p-6">
          <div className="grid grid-cols-7 gap-px bg-gray-200">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="p-3 text-center font-semibold bg-gray-50 text-gray-700">
                {day}
              </div>
            ))}
            {generateCalendarDays()}
          </div>
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full m-4">
            <h3 className="text-lg font-semibold mb-4">{selectedEvent.company}</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Type:</span> {selectedEvent.type}</p>
              <p><span className="font-medium">Date:</span> {selectedEvent.date}</p>
              <p><span className="font-medium">Notes:</span> {selectedEvent.notes}</p>
            </div>
            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Upcoming Communications */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6">
        <h3 className="font-semibold text-lg mb-4">Upcoming Communications</h3>
        <div className="space-y-3">
          {communications.map(comm => (
            <div 
              key={comm.id} 
              className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              onClick={() => setSelectedEvent(comm)}
            >
              <div>
                <span className="font-medium text-gray-800">{comm.company}</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-sm ${getEventColor(comm.status)}`}>
                  {comm.type}
                </span>
              </div>
              <div className="text-sm text-gray-500">{comm.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
