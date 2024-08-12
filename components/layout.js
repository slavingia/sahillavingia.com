import React from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children }) => {
  return (
    <div className="w-full overflow-hidden min-h-screen p-0 flex flex-col justify-start items-start">
      {children}
      <Analytics />
      <GoogleAnalytics gaId="G-8EFZ98JM23" />
    </div>
  );
};

export default Layout;
