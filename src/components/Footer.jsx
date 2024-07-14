import AppBar from '@mui/material/AppBar';

function Footer() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <div className="container mx-auto p-6">
        <p className="text-white">© 2022 E-Commerce App. All rights reserved.</p>
      </div>
    </AppBar>
  );
}

export default Footer;