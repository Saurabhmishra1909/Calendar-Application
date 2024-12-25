import React, { useState } from 'react';

const AdminDashboard = () => {
  const [communicationMethods, setCommunicationMethods] = useState([
    { id: 1, name: 'LinkedIn Post', description: 'Post on company LinkedIn page', sequence: 1, mandatory: true },
    { id: 2, name: 'LinkedIn Message', description: 'Direct message on LinkedIn', sequence: 2, mandatory: true },
    { id: 3, name: 'Email', description: 'Email communication', sequence: 3, mandatory: true },
    { id: 4, name: 'Phone Call', description: 'Direct phone call', sequence: 4, mandatory: false },
    { id: 5, name: 'Other', description: 'Other forms of communication', sequence: 5, mandatory: false }
  ]);

  const [newMethod, setNewMethod] = useState({
    name: '',
    description: '',
    sequence: communicationMethods.length + 1,
    mandatory: false
  });

  const handleDelete = (id) => {
    setCommunicationMethods(prevMethods => {
      const filteredMethods = prevMethods.filter(method => method.id !== id);
      // Update sequences after deletion
      return filteredMethods.map((method, index) => ({
        ...method,
        sequence: index + 1
      }));
    });
  };

  const handleAddMethod = (e) => {
    e.preventDefault();
    setCommunicationMethods([
      ...communicationMethods,
      { ...newMethod, id: communicationMethods.length + 1 }
    ]);
    setNewMethod({
      name: '',
      description: '',
      sequence: communicationMethods.length + 2,
      mandatory: false
    });
  };

  const handleMethodChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewMethod({
      ...newMethod,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleAddCompany = () => {
    // Handle the add company action here
    console.log('Add new company clicked');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button 
          onClick={handleAddCompany}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Company
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Communication Methods</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Sequence</th>
                <th className="px-4 py-2 text-left">Method</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Mandatory</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {communicationMethods
                .sort((a, b) => a.sequence - b.sequence)
                .map((method) => (
                <tr key={method.id} className="border-b">
                  <td className="px-4 py-2">{method.sequence}</td>
                  <td className="px-4 py-2">{method.name}</td>
                  <td className="px-4 py-2">{method.description}</td>
                  <td className="px-4 py-2">
                    <input 
                      type="checkbox" 
                      checked={method.mandatory} 
                      onChange={() => {}} 
                      className="rounded"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button 
                      onClick={() => handleDelete(method.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <form onSubmit={handleAddMethod} className="mt-6 space-y-4">
          <h3 className="text-lg font-semibold">Add New Communication Method</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Method Name</label>
              <input
                type="text"
                name="name"
                value={newMethod.name}
                onChange={handleMethodChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Sequence</label>
              <input
                type="number"
                name="sequence"
                value={newMethod.sequence}
                onChange={handleMethodChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1">Description</label>
              <input
                type="text"
                name="description"
                value={newMethod.description}
                onChange={handleMethodChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="mandatory"
                  checked={newMethod.mandatory}
                  onChange={handleMethodChange}
                  className="rounded"
                />
                <span>Mandatory</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Method
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;