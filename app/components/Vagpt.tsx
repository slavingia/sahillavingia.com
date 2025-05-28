"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

/**
 * VAGPT Before/After UI Comparison
 * Renders desktop/mobile toggle tabs and before/after screenshots side-by-side.
 *
 * Expected screenshots placed in `public` root:
 *   /old.png, /old-mobile.png, /new.png, /new-mobile.png
 */
export default function Vagpt() {
  /* STATE -------------------------------------------------------------- */
  const [defaultValue, setDefaultValue] = useState<string>("desktop");
  const [isInitialized, setIsInitialized] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  /* EFFECTS ------------------------------------------------------------ */
  // Detect user agent and set default view on mount
  useEffect(() => {
    const userAgent = navigator.userAgent;

    const isMobileDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );

    const detectedDefault = isMobileDevice ? "mobile" : "desktop";
    setDefaultValue(detectedDefault);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* RENDER ------------------------------------------------------------- */
  // Show loading state while detecting user agent
  if (!isInitialized) {
    return (
      <div className="my-8 flex justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  const canUseExtendedWidth = windowWidth >= 1440;
  const desktopContentClass = canUseExtendedWidth
    ? "w-[200%] -ml-[50%]"
    : "w-full";

  return (
    <Tabs defaultValue={defaultValue} className="my-8">
      <TabsList className="mb-4">
        <TabsTrigger value="desktop">Desktop</TabsTrigger>
        <TabsTrigger value="mobile">Mobile</TabsTrigger>
      </TabsList>

      <TabsContent value="desktop" className={desktopContentClass}>
        {(() => {
          const beforeSrc = "/old.png";
          const afterSrc = "/new.png";

          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* BEFORE */}
              <div>
                <h3 className="text-center font-semibold mb-2">Before</h3>
                <img
                  src={beforeSrc}
                  alt="Old desktop UI"
                  className="w-full border rounded shadow"
                />
              </div>

              {/* AFTER */}
              <div>
                <h3 className="text-center font-semibold mb-2">After</h3>
                <img
                  src={afterSrc}
                  alt="New desktop UI"
                  className="w-full border rounded shadow"
                />
              </div>
            </div>
          );
        })()}
      </TabsContent>

      <TabsContent value="mobile">
        {(() => {
          const beforeSrc = "/old-mobile.png";
          const afterSrc = "/new-mobile.png";

          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* BEFORE */}
              <div>
                <h3 className="text-center font-semibold mb-2">Before</h3>
                <img
                  src={beforeSrc}
                  alt="Old mobile UI"
                  className="w-full border rounded shadow"
                />
              </div>

              {/* AFTER */}
              <div>
                <h3 className="text-center font-semibold mb-2">After</h3>
                <img
                  src={afterSrc}
                  alt="New mobile UI"
                  className="w-full border rounded shadow"
                />
              </div>
            </div>
          );
        })()}
      </TabsContent>
    </Tabs>
  );
}
