import styled from "styled-components";

export const Button = styled.button`
    width:100px;
    height:50px;
    color:${({ color }) => color};
    background:${({ bgColor }) => bgColor};
    border:${({ border }) => border};
    cursor:pointer;
`;

export const Card = styled.div`
    height:150px;
    border-radius: 20px;
    margin:30px 0;
`;