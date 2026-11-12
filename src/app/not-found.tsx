import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-[#F8F7FC]">
      <div className="text-center max-w-md mx-auto">
        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEE8FA] text-[#7C3AED] mb-4">
          404 Error
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1F1B2E] tracking-tight mb-3 font-heading">
          Page Not Found
        </h1>
        <p className="text-sm text-[#6F6A7C] mb-8 leading-relaxed">
          The page you are looking for doesn’t exist or has been moved. Explore our services or return to the homepage.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button href="/" variant="yellow" size="md">
            Return Home
          </Button>
          <Button href="/contact" variant="purple-outline" size="md">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}

