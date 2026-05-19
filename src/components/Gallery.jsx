import React from 'react';
import img from '../images/profile.png'; 

export const Profile1 = () => {
  return (
    <>
      <h3>This is image that is stored in public</h3>
      <img src='/images/profile.png' alt="Profile Public" />
    </>
  );
}

export const Profile2 = () => {
  return (
    <>
      <h3>This is image that is stored in src</h3>
      <img src='/images/blackgirl.jpeg' alt="Blackgirl Src" />
    </>
  );
}

export function Gallery() {
  return (
    <div>This is gallery components</div>
  );
}