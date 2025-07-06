"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; 
import { Button } from "../ui/button";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 cursor-pointer rounded-full"
        aria-label="Back to top"
        size={"icon"}
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    )
  );
}
