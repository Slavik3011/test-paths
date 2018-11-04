import React from 'react';
import { Button } from 'reactstrap';

const Header = () => {
  return (
    <header>
      <h1>Saunter</h1>
      <a href="/add-path"><Button color="primary">Add Path</Button></a>
    </header>
  );
};

export default Header;