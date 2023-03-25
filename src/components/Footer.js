import React from "react";

const Footer = () => {
  const today = new Date();

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-transparent text-center text-sm backdrop-blur md:absolute md:w-1/3">
      DevDylan &copy; {today.getFullYear()}
    </footer>
  );
};

export default Footer;
