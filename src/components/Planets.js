import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const Planets = () => {
  const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets/');
    return res.json();
  };

  const { data, status } = useQuery('planets', fetchPlanets, {
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      <h2>Planets</h2>
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'success' && (
        <div>
          {data.results.map((planet) => (
            <Planet planet={planet} key={planet.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
