import React from 'react';
import styled from 'styled-components'

//Importing own created components/styled components
import { Button } from '../../style';

const Nav = styled.nav`
    width:250px;
    margin:20px auto;
    display:flex;
    justify-content: space-between;
`;

const Navbar = ({ setPage }) => {
    return (
        <Nav>
            <Button bgColor="#6188ff" onClick={() => setPage('planets')}>Planets</Button>
            <Button bgColor="#6188ff" onClick={() => setPage('people')}>People</Button>
        </Nav>
    );
}

export default Navbar;
