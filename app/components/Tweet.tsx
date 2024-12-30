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
    <div className="flex justify-center my-4">
      <blockquote className="twitter-tweet">
        <a href={`https://twitter.com/x/status/${id}`}></a>
      </blockquote>
    </div>
  );
} 