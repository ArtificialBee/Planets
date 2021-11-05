import React from 'react';
import styled, { keyframes } from 'styled-components';

import { FiUsers } from 'react-icons/fi'

import { Card } from '../../../style';

const ShowPlanet = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:0.7;
    }
`;

const PlanetStyle = styled(Card)`
    background: linear-gradient(90deg, rgba(6,57,54,1) 0%, rgba(12,120,113,1) 100%);
    opacity:0;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(15px);
    animation:${ShowPlanet} 1s linear ${({ animationDelay }) => animationDelay + "ms"} forwards;
`;

const PlanetTitle = styled.h1`
    color:white;
    text-align:center;
    font-weight: 400;
    font-size: 20px;
    padding-top:10px;
`;

const PlanetPopulation = styled.div`
    width:100%;
    color:gray;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.div`
    padding-right:10px;
`;

const PopulationCount = styled.p`
`;

const Planet = ({ planet, animDelay }) => {

    const units = ["k", "M", "B"];
    let population = planet.population;

    if (population >= 1000000000) {
        population /= 1000000000;
        population = population.toString();
        population = population + "B"
    }
    else if (population >= 1000000) {
        population = (population / 1000000).toString() + "M";
    }
    else if (population >= 1000) {
        population = (population / 1000).toString() + "k";
    }

    return (
        <PlanetStyle animationDelay={animDelay}>
            <PlanetTitle>Name: {planet.name}</PlanetTitle>
            <PlanetPopulation>
                <Icon>
                    <FiUsers />
                </Icon>
                <PopulationCount>
                    {population}
                </PopulationCount>
            </PlanetPopulation>
        </PlanetStyle>
    );
}

export default Planet;
