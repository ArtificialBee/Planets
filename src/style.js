import styled from "styled-components";

export const Button = styled.button`
    width:100px;
    height:50px;
    color:${({ color }) => color};
    background:${({ bgColor }) => bgColor};
    border:0;
    /* outline:0; */
    cursor:pointer;
`;