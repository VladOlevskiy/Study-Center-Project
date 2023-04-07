import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SharedLayout from './components/SharedLayout/SharedLayout';

import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage/ServicesPage'));
const MentorsPage = lazy(() => import('./pages/MentorsPage/MentorsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage/GalleryPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const WorkerDetailsPage = lazy(() =>
  import('./pages/WorkerDetailsPage/WorkerDetailsPage')
);
export const App = () => {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/programs" element={<ServicesPage />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/mentors/:workerId" element={<WorkerDetailsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
};
