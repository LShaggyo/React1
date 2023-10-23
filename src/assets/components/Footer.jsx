export default function Footer() {
  const footerStyle = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    padding: '10px 20px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  };

  return (
    <div style={footerStyle}>
      <p>
      Ayúdanos a adoptar conejos en situación de abandono y a encontrarles un hogar.
      </p>
    </div>
  );
}
