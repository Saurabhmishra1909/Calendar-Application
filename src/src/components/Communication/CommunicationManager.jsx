import React from 'react';

const CommunicationManager = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Communication Manager</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Log Communication</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="block">Communication Type</label>
            <select className="w-full p-2 border rounded">
              <option>LinkedIn Post</option>
              <option>LinkedIn Message</option>
              <option>Email</option>
              <option>Phone Call</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block">Date</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>

          <div className="space-y-2">
            <label className="block">Notes</label>
            <textarea
              className="w-full min-h-[100px] p-2 border rounded"
              placeholder="Add any notes about the communication..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Log Communication
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommunicationManager;
