import { useEffect, useState } from 'react';
import { FETCH_STATUS } from '../constants';

const useFetch = (shouldFetch: boolean = true, initialMaster: string = '') => {
  const [status, setStatus] = useState(FETCH_STATUS.IDLE);
  const [masterName, setMasterName] = useState(initialMaster);

  useEffect(() => {
    const fetchData = async () => {
      setStatus(FETCH_STATUS.FETCHING);
      const fetchLuke = fetch('https://swapi.dev/api/people/1/', { method: 'GET' });
      const fetchVader = fetch('https://swapi.dev/api/people/4/', { method: 'GET' });
      const response = await Promise.race([fetchLuke, fetchVader]);

      const data = await response.json();

      setMasterName(data.name);
      setStatus(FETCH_STATUS.FETCHED);
    };

    if (shouldFetch) {
      fetchData();
    }
  }, [shouldFetch]);

  return { status, masterName };
};

export default useFetch;
