import WorkersInfoDetails from 'components/Workers/WorkersInfoDetails/WorkersInfoDetails';
// import { AnimatePresence } from 'framer-motion';
// import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const WorkerDetailsPage = () => {
  const { workerId } = useParams();
  return (
    <>
      <WorkersInfoDetails id={workerId} />
    </>
  );
};

export default WorkerDetailsPage;
