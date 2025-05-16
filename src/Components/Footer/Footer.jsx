import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] text-center py-6 mt-16 rounded-t-xl">
      <p className="text-gray-600 font-medium">
        &copy; {new Date().getFullYear()} Book Vibe. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
