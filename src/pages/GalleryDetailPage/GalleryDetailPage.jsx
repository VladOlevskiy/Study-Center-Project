import GalleryPicuturesList from 'components/Gallery/GalleryPicuturesList/GalleryPicuturesList';
// import { AnimatePresence } from 'framer-motion';
// import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const GalleryDetailPage = () => {
  const { categoryId } = useParams();
  return (
    <>
      <GalleryPicuturesList id={categoryId} />
    </>
  );
};

export default GalleryDetailPage;
