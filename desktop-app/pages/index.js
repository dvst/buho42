import React from 'react';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#333' }}>Welcome to Electron + Next.js</h1>
      <p style={{ color: '#666' }}>This is a simple example of an Electron app with Next.js</p>
    </div>
  );
} 