import React from 'react';
// Dòng import quan trọng nhất để sửa lỗi "not defined" của bạn:
import { Gallery, Profile, Profile2 } from './components/Gallery';
import Home from './components/Home'; // Nếu bạn có dùng cả Home component

function App() {
  return (
    <div className="App" style={{ padding: '20px', color: 'white', backgroundColor: '#121212', minHeight: '100vh' }}>
      <h1>This is Home components</h1>
      
      {/* Gọi các component ra sử dụng */}
      <Profile />
      <hr style={{ margin: '20px 0', opacity: 0.2 }} />
      
      <Profile2 />
      <hr style={{ margin: '20px 0', opacity: 0.2 }} />
      
      <Gallery />
    </div>
  );
}

export default App;