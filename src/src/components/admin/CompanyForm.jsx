import React, { useState } from 'react';

const CustomAlert = ({ children, onClose }) => (
  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative mb-6">
    {children}
    {onClose && (
      <button
        onClick={onClose}
        className="absolute top-0 right-0 p-2"
      >
        ×
      </button>
    )}
  </div>
);

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    linkedinProfile: '',
    emails: [''],
    phoneNumbers: [''],
    comments: '',
    communicationPeriodicity: 14
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      location: '',
      linkedinProfile: '',
      emails: [''],
      phoneNumbers: [''],
      comments: '',
      communicationPeriodicity: 14
    });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (field, index, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayField = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Add New Company</h2>
      
      {showSuccess && (
        <CustomAlert onClose={() => setShowSuccess(false)}>
          Company successfully added!
        </CustomAlert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block">
            Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block">
            LinkedIn Profile <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            name="linkedinProfile"
            value={formData.linkedinProfile}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block">
            Email Addresses <span className="text-red-500">*</span>
          </label>
          {formData.emails.map((email, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => handleArrayChange('emails', index, e.target.value)}
                className="w-full p-2 border rounded"
                required
                placeholder="Enter email address"
              />
              {index === formData.emails.length - 1 && (
                <button
                  type="button"
                  onClick={() => addArrayField('emails')}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Email
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <label className="block">
            Phone Numbers <span className="text-red-500">*</span>
          </label>
          {formData.phoneNumbers.map((phone, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="tel"
                value={phone}
                onChange={(e) => handleArrayChange('phoneNumbers', index, e.target.value)}
                className="w-full p-2 border rounded"
                required
                placeholder="Enter phone number"
              />
              {index === formData.phoneNumbers.length - 1 && (
                <button
                  type="button"
                  onClick={() => addArrayField('phoneNumbers')}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Phone
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <label className="block">
            Communication Periodicity (days) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="communicationPeriodicity"
            min="1"
            value={formData.communicationPeriodicity}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block">Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full min-h-[100px] p-2 border rounded"
            placeholder="Add any additional comments here"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Company
        </button>
      </form>
    </div>
  );
};

export default CompanyForm;