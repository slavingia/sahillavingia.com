import React from 'react';
import styles from './layout.module.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
      <Analytics />
      <GoogleAnalytics gaId="G-8EFZ98JM23" />
    </div>
  );
};

export default Layout;
