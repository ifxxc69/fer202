import React, { useState } from 'react';
import { directors } from '../data';

function Director() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDirectors = directors.filter((director) =>
    director.FullName.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className="p-6 font-sans bg-gray-50 min-h-screen text-gray-800">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Directors List</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by full name..."
          className="w-full p-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto border border-[#b2dfdb] rounded shadow-sm">
        <table className="w-full text-sm text-left border-collapse bg-[#e0f7fa]">
          <thead>
            <tr className="bg-white text-black font-semibold">
              <th className="p-3 border border-[#b2dfdb] w-12 text-center">ID</th>
              <th className="p-3 border border-[#b2dfdb] w-44">Full Name</th>
              <th className="p-3 border border-[#b2dfdb] w-24">Gender</th>
              <th className="p-3 border border-[#b2dfdb] w-28">DOB</th>
              <th className="p-3 border border-[#b2dfdb] w-28">Nationality</th>
              <th className="p-3 border border-[#b2dfdb]">Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredDirectors.length > 0 ? (
              filteredDirectors.map((director) => (
                <tr 
                  key={director.id} 
                  className="align-top hover:bg-[#d0f0f5] transition-colors duration-150"
                >
                  <td className="p-3 border border-[#b2dfdb] text-center font-bold">
                    {director.id}
                  </td>
                  <td className="p-3 border border-[#b2dfdb] font-medium text-gray-900">
                    {director.FullName}
                  </td>
                  <td className="p-3 border border-[#b2dfdb]">
                    {director.Male ? 'Male' : 'Female'}
                  </td>
                  <td className="p-3 border border-[#b2dfdb] whitespace-nowrap">
                    {director.Dob}
                  </td>
                  <td className="p-3 border border-[#b2dfdb]">
                    {director.Nationality}
                  </td>
                  <td className="p-3 border border-[#b2dfdb] text-justify leading-relaxed whitespace-pre-line">
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