"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

declare global {
  interface Window {
    twitter?: TwitterWidget;
  }
}

interface TwitterWidget {
  events: {
    bind(event: string, callback: () => void): void;
    unbind(event: string, callback: () => void): void;
  };
  widgets: {
    load(): void;
    createTweet(
      id: string, 
      element: Element,
      options?: { theme?: string; align?: string }
    ): void;
  };
}

interface TweetProps {
  id: string;
}

const Tweet = ({ id }: TweetProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const tweetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeQuery.addEventListener("change", handleChange);

    return () => {
      darkModeQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    let script: HTMLScriptElement | null = null;
    const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
    
    const handleTweetRendered = () => {
      setTimeout(() => {
        if (tweetRef.current?.querySelector('iframe')) {
          setIsLoading(false);
        }
      }, 100);
    };

    const initTweet = () => {
      const twitter = window.twitter;
      if (twitter && twitter.events) {
        twitter.events.bind("rendered", handleTweetRendered);
        twitter.widgets.load();
      }
    };

    if (!existingScript) {
      script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    }

    if (window.twitter) {
      initTweet();
    } else {
      const onLoad = () => initTweet();
      if (existingScript) {
        existingScript.addEventListener('load', onLoad);
      } else if (script) {
        script.addEventListener('load', onLoad);
      }
    }

    const observer = new MutationObserver((mutations) => {
      if (tweetRef.current?.querySelector('iframe')) {
        setIsLoading(false);
        observer.disconnect();
      }
    });

    if (tweetRef.current) {
      observer.observe(tweetRef.current, {
        childList: true,
        subtree: true
      });
    }

    return () => {
      const twitter = window.twitter;
      if (twitter && twitter.events) {
        twitter.events.unbind("rendered", handleTweetRendered);
      }
      if (script && !script.isConnected) {
        document.body.removeChild(script);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex justify-center my-3">
      <div 
        ref={containerRef}
        className="relative w-[550px] min-h-[250px]"
      >
        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 z-10"
            />
          )}
        </AnimatePresence>
        
        <motion.div
          initial={false}
          animate={{ y: 0 }}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className={`relative ${isLoading ? 'invisible' : 'visible'}`}
          ref={tweetRef}
        >
          <blockquote
            className="twitter-tweet"
            data-dnt="true"
            data-theme={isDarkMode ? "dark" : "light"}
            data-align="center"
            aria-label={`Embed Tweet of ${id}`}
          >
            <a href={`https://twitter.com/x/status/${id}`} />
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default Tweet;
