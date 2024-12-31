"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TweetProps {
  id: string;
}

const TweetSkeleton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(darkModeQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches)
    darkModeQuery.addEventListener('change', handleChange)

    return () => darkModeQuery.removeEventListener('change', handleChange)
  }, [])

  const bgColor = isDarkMode ? '#000000' : 'white';
  const borderColor = isDarkMode ? '#333333' : 'rgb(207, 217, 222)';
  const skeletonBg = isDarkMode ? '#262626' : '#f7f7f7';

  return (
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
        padding: '1.5rem',
        background: bgColor,
        borderRadius: '12px',
        border: `1px solid ${borderColor}`,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        position: 'absolute',
        zIndex: 10,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: isDarkMode ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <motion.div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: skeletonBg,
            opacity: isDarkMode ? 0.9 : 1
          }}
        />
        <div style={{ flex: 1 }}>
          <motion.div
            style={{
              height: '16px',
              width: '160px',
              background: skeletonBg,
              borderRadius: '4px',
              marginBottom: '8px',
              opacity: isDarkMode ? 0.9 : 1
            }}
          />
          <motion.div
            style={{
              height: '14px',
              width: '120px',
              background: skeletonBg,
              borderRadius: '4px',
              opacity: isDarkMode ? 0.7 : 0.7
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              height: '16px',
              width: i === 0 ? '100%' : '85%',
              background: skeletonBg,
              borderRadius: '4px',
              opacity: isDarkMode ? 0.9 : 1
            }}
          />
        ))}
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '0.75rem',
        paddingTop: '1rem',
        borderTop: `1px solid ${borderColor}`
      }}>
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              height: '14px',
              width: '40px',
              background: skeletonBg,
              borderRadius: '4px',
              opacity: isDarkMode ? 0.7 : 0.7
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function Tweet({ id }: TweetProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(darkModeQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches)
    darkModeQuery.addEventListener('change', handleChange)

    return () => darkModeQuery.removeEventListener('change', handleChange)
  }, [])

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
    }}
    className="cursor-pointer">
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
        data-theme={isDarkMode ? "dark" : "light"}
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