import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    Tawk_API?: {
      hide?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

const TawkTo: React.FC = () => {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const loadTawkTo = () => {
      if (!window.Tawk_API) {
        window.Tawk_API = {};
        window.Tawk_LoadStart = new Date();

        const script = document.createElement("script");
        script.async = true;
        script.src = "https://embed.tawk.to/66be26a6146b7af4a43adce9/1i5bcdur9";
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");

        scriptRef.current = script;
        document.body.appendChild(script);
      }
    };

    const hideTawkTo = () => {
      if (window.Tawk_API?.hide) {
        window.Tawk_API.hide();
      }
    };

    // Load TawkTo on component mount
    loadTawkTo();

    // Cleanup on component unmount
    return () => {
      hideTawkTo();
      if (scriptRef.current) {
        scriptRef.current.remove();
      }
    };
  }, []);

  return null;
};

export default TawkTo;
