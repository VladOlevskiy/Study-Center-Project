import Header from '../Header/Header';
import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { Container } from 'styles/Container-styled';
import { Loader } from './SharedLayout-styled';
import Footer from 'components/Footer/Footer';
import { Dna } from 'react-loader-spinner';
import { AnimatePresence } from 'framer-motion';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense
        fallback={
          <AnimatePresence>
            <Loader
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Dna
                visible={true}
                height="180"
                width="180"
                ariaLabel="dna-loading"
                wrapperStyle={{ alignItems: 'center' }}
                wrapperClass="dna-wrapper"
              />
            </Loader>
          </AnimatePresence>
        }
      >
        <Outlet />
      </Suspense>
      <Footer />
    </Container>
  );
};

export default SharedLayout;
