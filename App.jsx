function App() {
  return (
    <div style={{
      fontFamily: 'system-ui, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f4f6f8',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        maxWidth: '400px',
        width: '100%'
      }}>
        <h1 style={{ color: '#1a73e8', marginBottom: '10px' }}>🚗 SafarWay</h1>
        <p style={{ color: '#5f6368', fontSize: '16px', marginBottom: '24px' }}>
          Safe & Reliable Travel Companion
        </p>
        <a 
          href="https://expo.dev/4a4a15a4-ad2f-4134-9902-7d54afb910dc/group/296d44e4-b721-48ab-9ce1-ff852c83cbbd"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#1a73e8',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          Open in Expo Go App
        </a>
      </div>
    </div>
  );
}

// React DOM Rendering
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
