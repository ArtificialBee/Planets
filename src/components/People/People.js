import React from 'react';
import { useQuery } from 'react-query';

const fetchPeople = async () => {
    const res = await fetch('http://swapi.dev/api/people');
    return res.json();
}

const People = () => {

    const { data, status } = useQuery('peoples', fetchPeople);
    console.log(data);

    let peopleStatus = null;

    if (status === "error") {
        peopleStatus = <p>Error with loading</p>
    }
    if (status === "loading") {
        peopleStatus = <p>Loading peoples...</p>
    }
    if (status === "success") {
        peopleStatus = data.results.map(people => {

        })
    }
    return (
        <div>
            <h1 style={{ fontWeight: "400" }}>This is people component!</h1>
            {peopleStatus}
        </div>
    );
}

export default People;
