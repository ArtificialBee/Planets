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

const NavButton = styled(Button)`
    color:white;
    background:#6188ff;
    transition: all 500ms;
    &:hover{
        background:#8ca9ff;
    }
`;

const Navbar = ({ setPage }) => {
    return (
        <Nav>
            <NavButton onClick={() => setPage('planets')}>Planets</NavButton>
            <NavButton onClick={() => setPage('people')}>People</NavButton>
        </Nav>
    );
}

export default Navbar;
