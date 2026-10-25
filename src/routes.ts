import { createBrowserRouter } from 'react-router';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import ProgrammesPage from './pages/ProgrammesPage';
import AboutPage from './pages/AboutPage';
import RegisterPage from './pages/RegisterPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'programmes', Component: ProgrammesPage },
      { path: 'about', Component: AboutPage },
      { path: 'register', Component: RegisterPage },
      { path: 'privacy-policy', Component: PrivacyPolicyPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
