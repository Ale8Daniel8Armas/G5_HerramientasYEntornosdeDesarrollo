import AppBar from '@mui/material/AppBar';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'lightgreen' }}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-white">E-Commerce App</h1>
      </div>
    </AppBar>
  );
}

export default Header;