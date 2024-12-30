"use client";

import { useEffect } from 'react';

interface TweetProps {
  id: string;
}

export default function Tweet({ id }: TweetProps) {
  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '2.5rem', marginBottom: '2.5rem' }}>
      <blockquote
        className="twitter-tweet"
        data-dnt="true"
        data-theme="light"
        data-align="center"
      >
        <a href={`https://twitter.com/x/status/${id}`}></a>
      </blockquote>
    </div>
  );
} 