import React from 'react';
import styled from 'styled-components';
import { FiUsers } from 'react-icons/fi'

const PlanetStyle = styled.div`

    align-items:center;
    height:150px;
    /* background:black; */
    border-radius: 20px;
    margin:30px 0;
    background: linear-gradient(90deg, rgba(6,57,54,1) 0%, rgba(12,120,113,1) 100%);
`;

const PlanetTitle = styled.h1`
    color:white;
    text-align:center;
    font-weight: 400;
    font-size: 20px;
`;

const PlanetPopulation = styled.div`
    width:100px;
    color:gray;
    display:flex;
    align-items: center;
    margin:0 auto;
`;

const Icon = styled.div`
    display:inline-block;
    padding-right:10px;
`;

const PopulationCount = styled.p`
    display:inline-block;
`;

const Planet = ({ planet }) => {

    return (
        <PlanetStyle>
            <PlanetTitle>Name: {planet.name}</PlanetTitle>
            <PlanetPopulation>
                <Icon>
                    <FiUsers />
                </Icon>
                <PopulationCount>
                    {planet.population}
                </PopulationCount>
            </PlanetPopulation>
        </PlanetStyle>
    );
}

export default Planet;
