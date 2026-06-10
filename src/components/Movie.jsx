import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import đúng mảng movies và directors từ file data của bạn
import { movies, directors, menuButtons } from '../data'; 

export default function Movie() {
    const [q, setQ] = useState('');

    // Lọc phim theo Tiêu đề (Title) từ ô tìm kiếm
    const filtered = movies.filter((mv) => {
        const titleText = mv.Title || mv.title || '';
        return titleText.toLowerCase().includes(q.trim().toLowerCase());
    });
    

    return (
        <div className="container mt-4" style={{ fontFamily: 'Arial, sans-serif' }}>
            {/* 1. Dashboard Heading */}
            <div className="text-center mb-3">
                <h2 className="fw-normal" style={{ color: '#333' }}>Dashboard</h2>
            </div>

            {/* 2. Menu Buttons */}
            <div className="d-flex justify-content-center gap-2 mb-4">
                {menuButtons.map((button) => (
                    <Link
                        key={button.id}
                        to={button.path}
                        className={`btn btn-${button.variant} btn-sm px-3 ${button.textColor === 'dark' ? 'text-dark' : 'text-white'}`}
                        style={{ fontSize: '14px', borderRadius: '4px' }}
                    >
                        {button.label}
                    </Link>
                ))}
            </div>

            {/* 3. Bố cục chính: Sidebar + Bảng quản lý */}
            <div className="row mt-4">
                {/* Cột trái: Danh sách Directors */}
                <div className="col-md-3 border-end">
                    <h4 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Directors</h4>
                    <ul className="list-unstyled ps-2">
                        {directors.map((d) => (
                            <li key={d.id} className="mb-2">
                                <Link to={`/director/${d.id}`} className="text-decoration-none" style={{ color: '#0288d1' }}>
                                    • {d.FullName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Cột phải: Movies Management */}
                <div className="col-md-9">
                    <h3 className="text-center mb-4" style={{ color: '#2c3e50', fontWeight: '500' }}>
                        Movies Management
                    </h3>

                    {/* Thanh tìm kiếm full width */}
                    <div className="mb-3">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Enter movie title to search..."
                            style={{ borderRadius: '4px', padding: '8px 12px' }}
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                    </div>

                    {/* Bảng hiển thị dữ liệu khớp 100% với cấu trúc mới */}
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th style={{ width: '10%' }}>Id</th>
                                    <th style={{ width: '35%' }}>Title</th>
                                    <th style={{ width: '20%' }}>Duration (mins)</th>
                                    <th style={{ width: '20%' }}>Director</th>
                                    <th style={{ width: '15%' }}>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.length > 0 ? (
                                    filtered.map((m) => (
                                        <tr key={m.id}>
                                            <td>{m.id}</td>
                                            <td className="fw-bold" style={{ color: '#1976d2' }}>
                                                {m.title || m.Title}
                                            </td>
                                            <td>{m.duration} mins</td>
                                            <td>{m.director}</td>
                                            <td>
                                                <span className="badge bg-warning text-dark fw-bold px-2 py-1.5">
                                                    ⭐ {m.rating}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center text-muted py-3">
                                            No movies found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}