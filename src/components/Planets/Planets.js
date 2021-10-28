import React from 'react';
import { useQuery } from 'react-query';
import { Container, Col, Row } from 'react-grid-system'

import Planet from './Planet/Planet';



const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets');
    return res.json();
}

const Planets = () => {

    const { data, status } = useQuery('planets', fetchPlanets);
    console.log(data);

    let planetStatus = null;

    if (status === "error") {
        planetStatus = <p>Error with loading</p>
    }
    if (status === "loading") {
        planetStatus = <p>Loading planets...</p>
    }
    if (status === "success") {

        planetStatus =
            <Container >
                <Row debug align="start">

                    {data.results.map(planet => {
                        return (
                            <Col xs={12} lg={3} align="center">
                                <Planet planet={planet} />
                            </Col>
                        );
                    })}
                </Row>
            </Container >
    }



    return (
        <>
            <h1 style={{ fontWeight: "400" }}>This is planest component!</h1>
            {planetStatus}
        </>
    );
}

export default Planets;
