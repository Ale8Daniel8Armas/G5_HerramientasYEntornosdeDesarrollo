import AppBar from '@mui/material/AppBar';

function Footer() {
  return (
    <AppBar position="static">
      <div className="container mx-auto p-4">
        <p className="text-sm text-white">© 2022 E-Commerce App. All rights reserved.</p>
      </div>
    </AppBar>
  );
}

export default Footer;