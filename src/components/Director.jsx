import React, { useState } from 'react';
import { directors } from '../data';

function Director() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredDirectors = directors.filter((director) =>
    director.FullName.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className="p-6 font-sans bg-gray-50 min-h-screen text-gray-800">
    
      <h2 className="text-3xl font-normal text-gray-900 mb-4">Directors List</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by full name..."
          className="w-full p-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto border border-teal-200">
        <table className="w-full text-sm text-left border-collapse bg-[#e0f7fa]">
          <thead>
            <tr className="bg-white text-black font-semibold border-b border-teal-200">
              <th className="p-3 border border-teal-200 w-12 text-center">ID</th>
              <th className="p-3 border border-teal-200 w-44">Full Name</th>
              <th className="p-3 border border-teal-200 w-24">Gender</th>
              <th className="p-3 border border-teal-200 w-28">DOB</th>
              <th className="p-3 border border-teal-200 w-28">Nationality</th>
              <th className="p-3 border border-teal-200">Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredDirectors.length > 0 ? (
              filteredDirectors.map((director, index) => (
                <tr key={director.id} className={`align-top hover:bg-gray-300 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`}>
                  <td className="p-3 border border-teal-200 text-center font-bold">{director.id}</td>
                  <td className="p-3 border border-teal-200">{director.FullName}</td>
                  <td className="p-3 border border-teal-200">
                    {director.Male ? 'Male' : 'Female'}
                  </td>
                  <td className="p-3 border border-teal-200 whitespace-nowrap">{director.Dob}</td>
                  <td className="p-3 border border-teal-200">{director.Nationality}</td>
        
                  <td className="p-3 border border-teal-200 text-justify leading-relaxed whitespace-pre-line">
                    {director.Description}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-6 text-center text-gray-500 bg-white italic">
                  No directors found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Director;