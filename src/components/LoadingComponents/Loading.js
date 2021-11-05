import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Card } from '../../style'

const LoadingAnimation = keyframes`
    0%{
        background:#333333;
    }
    100%{
        background: #616161;
    }
    `;

const LoadingCard = styled(Card)`
    width:100%;
    height:150px;
    animation:${LoadingAnimation} 1s alternate infinite;
`;

const Loading = () => {
    return (
        <LoadingCard>
        </LoadingCard>
    );
}

export default Loading;
