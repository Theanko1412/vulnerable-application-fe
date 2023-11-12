import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'center' }}>
        <Link to="/sde" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button color="inherit">Sensitive Data Exposure</Button>
        </Link>
        <Link to="/xss" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button color="inherit">Cross-site scripting</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
