import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import BackgroundEffects from "./BackgroundEffects.jsx";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <BackgroundEffects />
      <main className="px-4">
        <section className="flex flex-col items-center">
          <div className="flex items-center gap-3 mt-32">
            <p>Smart, Fast, Always Active.</p>
            <button className="btn glass py-1 px-3 text-xs">Launch App</button>
          </div>
          <h1 className="text-center text-4xl/13 md:text-6xl/19 mt-4 font-semibold tracking-tight max-w-3xl">
            Build, Deploy &amp; Talk to AI Agents in Seconds.
          </h1>
          <p className="text-center text-gray-100 text-base/7 max-w-md mt-6">
            Design AI assistants that research, plan, and execute tasks — all
            powered by your prompts.
          </p>
          <div className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-3 mt-6">
            <button className="btn max-md:w-full glass py-3">
              Create Agent
            </button>
            <button className="btn max-md:w-full glass flex items-center justify-center gap-2 py-3">
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
                className="lucide lucide-circle-play size-4.5"
                aria-hidden="true"
              >
                <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              Watch Demo
            </button>
          </div>
        </section>
        <section className="mt-14">
          <p className="py-6 mt-14 text-center">
            Trusting by leading brands, including —
          </p>
          <div
            className="flex flex-wrap justify-between max-sm:justify-center gap-10 max-w-4xl w-full mx-auto py-4"
            id="logo-container"
          >
            <img
              src="./assets/company-logo-1.svg"
              alt="logo"
              className="h-7 w-auto max-w-xs"
            />
            <img
              src="./assets/company-logo-2.svg"
              alt="logo"
              className="h-7 w-auto max-w-xs"
            />
            <img
              src="./assets/company-logo-3.svg"
              alt="logo"
              className="h-7 w-auto max-w-xs"
            />
            <img
              src="./assets/company-logo-4.svg"
              alt="logo"
              className="h-7 w-auto max-w-xs"
            />
            <img
              src="./assets/company-logo-5.svg"
              alt="logo"
              className="h-7 w-auto max-w-xs"
            />
          </div>
        </section>
        <section className="mt-32">
          <div className="text-center">
            <h2 className="text-3xl font-semibold max-w-lg mx-auto mt-4 text-white">
              Agent features
            </h2>
            <p className="mt-4 text-center text-sm/7 text-gray-100 max-w-md mx-auto">
              Design AI assistants that research, plan, and execute tasks — all
              powered by your prompts.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 px-6">
            <div className="hover:-translate-y-0.5 transition duration-300 p-6 rounded-xl space-y-4 glass max-w-80 w-full">
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
                className="lucide lucide-bot size-8.5"
                aria-hidden="true"
              >
                <path d="M12 8V4H8"></path>
                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
              <h3 className="text-base font-medium text-white">
                Autonomous Agents
              </h3>
              <p className="text-gray-100 line-clamp-2 pb-2">
                Agents that plan, execute &amp; think step-by-step.
              </p>
            </div>
            <div className="hover:-translate-y-0.5 transition duration-300 p-6 rounded-xl space-y-4 glass max-w-80 w-full">
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
                className="lucide lucide-brain size-8.5"
                aria-hidden="true"
              >
                <path d="M12 18V5"></path>
                <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
                <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
              </svg>
              <h3 className="text-base font-medium text-white">
                Memory &amp; Learning
              </h3>
              <p className="text-gray-100 line-clamp-2 pb-2">
                Agents retain memory and improve over time.
              </p>
            </div>
            <div className="hover:-translate-y-0.5 transition duration-300 p-6 rounded-xl space-y-4 glass max-w-80 w-full">
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
                className="lucide lucide-zap size-8.5"
                aria-hidden="true"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
              <h3 className="text-base font-medium text-white">
                Real-time Execution
              </h3>
              <p className="text-gray-100 line-clamp-2 pb-2">
                Fast responses with async task processing.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-32 relative">
          <div className="text-center">
            <h2 className="text-3xl font-semibold max-w-lg mx-auto mt-4 text-white">
              From idea to autonomous agent quickly and effortlessly.
            </h2>
            <p className="mt-4 text-center text-sm/7 text-gray-100 max-w-md mx-auto">
              Empower your business with AI agents that optimize processes and
              accelerate performance.
            </p>
          </div>
          <div className="relative space-y-20 md:space-y-30 mt-20">
            <div className="flex-col items-center hidden md:flex absolute left-1/2 -translate-x-1/2">
              <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                01
              </p>
              <div className="h-72 w-0.5 bg-linear-to-b from-transparent via-white to-transparent"></div>
              <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                02
              </p>
              <div className="h-72 w-0.5 bg-linear-to-b from-transparent via-white to-transparent"></div>
              <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                03
              </p>
            </div>
            <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row">
              <img
                src="./assets/workflow1.png"
                alt="step"
                className="flex-1 h-auto w-full max-w-sm rounded-2xl"
              />
              <div className="flex-1 flex flex-col gap-6 md:px-6 max-w-md">
                <h3 className="text-2xl font-medium text-white">
                  Start with a prompt
                </h3>
                <p className="text-gray-100 text-sm/6 line-clamp-3 pb-2">
                  Start with a simple prompt describing what you want your agent
                  to do. Our builder interprets your idea and creates the
                  structure for you in seconds
                </p>
                <a
                  href="https://prebuiltui.com/tailwind-templates"
                  className="flex items-center gap-2"
                >
                  Learn More
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
                    className="lucide lucide-external-link size-4"
                    aria-hidden="true"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row-reverse">
              <img
                src="./assets/workflow2.png"
                alt="step"
                className="flex-1 h-auto w-full max-w-sm rounded-2xl"
              />
              <div className="flex-1 flex flex-col gap-6 md:px-6 max-w-md">
                <h3 className="text-2xl font-medium text-white">
                  Adjust and personalize
                </h3>
                <p className="text-gray-100 text-sm/6 line-clamp-3 pb-2">
                  Adjust tasks, actions and integrations. Add personality, rules
                  and data sources to make the agent work exactly the way you
                  want.
                </p>
                <a
                  href="https://prebuiltui.com/tailwind-templates"
                  className="flex items-center gap-2"
                >
                  Learn More
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
                    className="lucide lucide-external-link size-4"
                    aria-hidden="true"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row">
              <img
                src="./assets/workflow3.png"
                alt="step"
                className="flex-1 h-auto w-full max-w-sm rounded-2xl"
              />
              <div className="flex-1 flex flex-col gap-6 md:px-6 max-w-md">
                <h3 className="text-2xl font-medium text-white">
                  Launch &amp; Automate
                </h3>
                <p className="text-gray-100 text-sm/6 line-clamp-3 pb-2">
                  Deploy your agent and let it run. It executes tasks
                  autonomously, reports results, and continues working in the
                  background.
                </p>
                <a
                  href="https://prebuiltui.com/tailwind-templates"
                  className="flex items-center gap-2"
                >
                  Learn More
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
                    className="lucide lucide-external-link size-4"
                    aria-hidden="true"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-32 flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold max-w-lg mx-auto mt-4 text-white">
              Here what aur trusted users about our best AI agents.
            </h2>
            <p className="mt-4 text-center text-sm/7 text-gray-100 max-w-md mx-auto">
              Empower your business with AI agents that optimize processes and
              accelerate performance.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full max-w-88 space-y-5 rounded-lg glass p-5 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <p className="font-medium">Founder &amp; CEO</p>
                <img
                  className="size-10 rounded-full"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&amp;w=200"
                  alt="Richard Nelson"
                />
              </div>
              <p className="line-clamp-3">
                “Super clean and easy to use. These Tailwind + React components
                saved me hours of dev time and countless lines of extra code!”
              </p>
              <p className="text-gray-300">- Richard Nelson</p>
            </div>
            <div className="w-full max-w-88 space-y-5 rounded-lg glass p-5 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <p className="font-medium">Founder &amp; CEO</p>
                <img
                  className="size-10 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=200"
                  alt="Sophia Martinez"
                />
              </div>
              <p className="line-clamp-3">
                “The design quality is top-notch. Perfect balance between
                simplicity and style. Highly recommend for any creative
                developer!”
              </p>
              <p className="text-gray-300">- Sophia Martinez</p>
            </div>
            <div className="w-full max-w-88 space-y-5 rounded-lg glass p-5 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <p className="font-medium">Founder &amp; CEO</p>
                <img
                  className="size-10 rounded-full"
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&amp;auto=format&amp;fit=crop&amp;q=60"
                  alt="Ethan Roberts"
                />
              </div>
              <p className="line-clamp-3">
                “Absolutely love the reusability of these components. My
                workflow feels 10x faster now with cleaner and more consistent
                layouts.”
              </p>
              <p className="text-gray-300">- Ethan Roberts</p>
            </div>
            <div className="w-full max-w-88 space-y-5 rounded-lg glass p-5 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <p className="font-medium">Founder &amp; CEO</p>
                <img
                  className="size-10 rounded-full"
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&amp;auto=format&amp;fit=crop&amp;q=60"
                  alt="Isabella Kim"
                />
              </div>
              <p className="line-clamp-3">
                “Clean, elegant, and efficient. These components are a dream for
                any modern web developer who values beautiful code.”
              </p>
              <p className="text-gray-300">- Isabella Kim</p>
            </div>
            <div className="w-full max-w-88 space-y-5 rounded-lg glass p-5 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <p className="font-medium">Founder &amp; CEO</p>
                <img
                  className="size-10 rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100&amp;h=100&amp;auto=format&amp;fit=crop"
                  alt="Liam Johnson"
                />
              </div>
              <p className="line-clamp-3">
                “I've tried dozens of UI kits, but this one just feels right.
                Everything works seamlessly and looks incredibly polished.”
              </p>
              <p className="text-gray-300">- Liam Johnson</p>
            </div>
            <div className="w-full max-w-88 space-y-5 rounded-lg glass p-5 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <p className="font-medium">Founder &amp; CEO</p>
                <img
                  className="size-10 rounded-full"
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png"
                  alt="Ava Patel"
                />
              </div>
              <p className="line-clamp-3">
                “Brilliantly structured components with clean, modern styling.
                Makes development a joy and design updates super quick.”
              </p>
              <p className="text-gray-300">- Ava Patel</p>
            </div>
          </div>
        </section>

        <section className="mt-32">
          <div className="text-center">
            <h2 className="text-3xl font-semibold max-w-lg mx-auto mt-4 text-white">
              FAQ's
            </h2>
            <p className="mt-4 text-center text-sm/7 text-gray-100 max-w-md mx-auto">
              Looking for answers to your frequently asked questions? Check out
              our FAQ's section below to find.
            </p>
          </div>
          <div
            id="faq-container"
            className="mx-auto mt-12 space-y-4 w-full max-w-xl"
          ></div>
        </section>

        <section className="mt-32">
          <div className="text-center">
            <h2 className="text-3xl font-semibold max-w-lg mx-auto mt-4 text-white">
              Our Pricing Plans
            </h2>
            <p className="mt-4 text-center text-sm/7 text-gray-100 max-w-md mx-auto">
              A visual collection of our most recent works - each piece crafted
              with intention, emotion and style.
            </p>
          </div>
          <div
            id="pricing-container"
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          ></div>
        </section>

        <div className="flex flex-col max-w-5xl px-4 mt-40 mx-auto items-center justify-center text-center py-16 rounded-xl glass">
          <h2 className="text-2xl md:text-4xl font-medium mt-2">
            Ready to build?
          </h2>
          <p className="mt-4 text-sm/7 max-w-md">
            See how fast you can turn your ideas into reality. Get started for
            free, no credit card required.
          </p>
          <button className="btn glass flex items-center gap-2 mt-8">
            Try now
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
              className="lucide lucide-arrow-right size-4"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
