export default function CenteredText({ children }){
  const centeredStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return (
    <div style={centeredStyle}>
      <div style={{ textAlign: 'center' }}>
        {children}
      </div>
    </div>
  );
};