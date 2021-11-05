import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { Container, Col, Row } from 'react-grid-system'

import Planet from './Planet/Planet';
import Loading from '../LoadingComponents/Loading';

import PlanetBackground from '../../assets/planets-wallpaper.jpg'



const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets/?page=2');
    return res.json();
}

const PlanetsBackground = styled.div`
    width:100vw;
    height:100vh;
    background-image:url(${PlanetBackground});
    background-position: fixed;
    background-size: cover;
`;

const Planets = () => {

    const [page, setPage] = useState(1);

    const { data, status } = useQuery('planets', fetchPlanets);
    console.log(data);

    let planetStatus = null;

    if (status === "error") {
        planetStatus = <p>Error with loading</p>
    }
    if (status === "loading") {
        planetStatus =
            [...Array(8)].map(x => {
                return (
                    <Col xs={12} lg={3}>
                        <Loading />
                    </Col>
                );
            })


    }

    if (status === "success") {
        planetStatus =
            data.results.map((planet, index) => {
                return (
                    <Col xs={12} lg={3}>
                        <Planet planet={planet} animDelay={index * 50} />
                    </Col>
                );
            })

    }



    return (
        <PlanetsBackground>
            <h1 style={{ fontWeight: "400", textAlign: "center" }}>This is planest component!</h1>
            <Container>
                <Row>
                    {planetStatus}
                </Row>
            </Container>
        </PlanetsBackground>
    );
}

export default Planets;
