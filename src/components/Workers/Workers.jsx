import { Container } from 'styles/Container-styled';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import WorkersListMainInfo from './WorkersListMailInfo/WorkersListMainInfo';

import { SectionWithBackground } from './Workers-styled';
const Workers = () => {
  const [workersList, setWorkersList] = useState(null);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        // setLoading(true);
        const response = await axios.get('workersData.json');
        const data = response.data;
        setWorkersList(data);
        // setLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <SectionWithBackground>
        <Container></Container>
      </SectionWithBackground>
      {workersList && <WorkersListMainInfo workers={workersList} />}
    </>
  );
};

export default Workers;
