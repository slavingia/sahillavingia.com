"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TweetProps {
  id: string;
}

const TweetSkeleton = () => (
  <motion.div
    initial={{ opacity: 0.6 }}
    animate={{ opacity: [0.6, 0.8, 0.6] }}
    exit={{ opacity: 0 }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="tweet-skeleton"
    style={{
      width: '550px',
      padding: '1rem',
      background: 'white',
      borderRadius: '16px',
      border: '1px solid rgb(207, 217, 222)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      position: 'absolute',
      zIndex: 10,
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }}
  >
    {/* Header */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <motion.div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: '#f7f7f7'
        }}
      />
      <div style={{ flex: 1 }}>
        <motion.div
          style={{
            height: '14px',
            width: '140px',
            background: '#f7f7f7',
            borderRadius: '4px',
            marginBottom: '4px'
          }}
        />
        <motion.div
          style={{
            height: '14px',
            width: '90px',
            background: '#f7f7f7',
            borderRadius: '4px'
          }}
        />
      </div>
    </div>

    {/* Content */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <motion.div
        style={{
          height: '14px',
          width: '100%',
          background: '#f7f7f7',
          borderRadius: '4px'
        }}
      />
      <motion.div
        style={{
          height: '14px',
          width: '90%',
          background: '#f7f7f7',
          borderRadius: '4px'
        }}
      />
      <motion.div
        style={{
          height: '14px',
          width: '95%',
          background: '#f7f7f7',
          borderRadius: '4px'
        }}
      />
    </div>

    {/* Footer */}
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '0.5rem',
      paddingTop: '0.75rem',
      borderTop: '1px solid #f7f7f7'
    }}>
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            height: '14px',
            width: '40px',
            background: '#f7f7f7',
            borderRadius: '4px'
          }}
        />
      ))}
    </div>
  </motion.div>
);

export default function Tweet({ id }: TweetProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;

    const handleTweetRender = () => {
      setIsLoading(false);
    };

    script.onload = () => {
      if (window.twttr) {
        window.twttr.events?.bind('rendered', handleTweetRender);
      }
    };

    document.body.appendChild(script);

    return () => {
      if (window.twttr) {
        window.twttr.events?.unbind('rendered', handleTweetRender);
      }
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '1.5rem',
      marginBottom: '1.5rem',
      position: 'relative',
      minHeight: '300px'
    }}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 0.8, 0.6] }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
          >
            <TweetSkeleton />
          </motion.div>
        )}
      </AnimatePresence>

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

declare global {
  interface Window {
    twttr: any;
  }
} 