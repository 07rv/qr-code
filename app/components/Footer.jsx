const Footer = () => {
  return (
    <>
      {" "}
      <footer className="flex flex-col items-center px-4 md:px-16 lg:px-24 justify-center w-full pt-16 mt-40 glass border-0">
        <a href="#!">
          <img
            alt="logo"
            loading="lazy"
            width="205"
            height="48"
            decoding="async"
            data-nimg="1"
            className="h-8.5 w-auto"
            style={{ color: "transparent" }}
            src="./assets/logo.svg"
          />
        </a>
        <div className="flex flex-wrap items-center justify-center gap-8 py-8">
          <a
            className="transition hover:text-gray-300"
            href="#terms-of-service"
          >
            Terms of Service
          </a>
          <a className="transition hover:text-gray-300" href="#privacy-policy">
            Privacy Policy
          </a>
          <a className="transition hover:text-gray-300" href="#security">
            Security
          </a>
          <a className="transition hover:text-gray-300" href="#sitemap">
            Sitemap
          </a>
        </div>
        <div className="flex items-center gap-6 pb-6">
          <a
            href="#"
            className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-dribbble"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
              <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
              <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
            </svg>
          </a>
          <a
            href="#"
            className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="#"
            className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter"
              aria-hidden="true"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
              aria-hidden="true"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
        </div>
        <hr className="w-full border-white/20 mt-6" />
        <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 py-4">
          <p>Build Ai agents for free</p>
          <p>
            Copyright © 2025{" "}
            <a href="https://prebuiltui.com?utm_source=genesis" target="_blank">
              PrebuiltUI
            </a>
            . All rights reservered. Distributed by{" "}
            <a href="https://themewagon.com" target="_blank">
              ThemeWagon
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
