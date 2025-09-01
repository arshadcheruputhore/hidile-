// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-gray-950">
      {/* soft gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-500/25 to-indigo-500/25 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-rose-500/25 to-orange-500/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Illustration */}
          <div className="order-1 md:order-2 mx-auto w-full max-w-md">
            <NotFoundIllustration className="w-full" />
          </div>

          {/* Text + actions */}
          <div className="order-2 md:order-1">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">404 error</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
              Page not found
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-300 sm:text-lg">
              Sorry, we couldn’t find the page you’re looking for. It might have been moved,
              renamed, or it never existed.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
              >
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Optional helper links */}
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Or explore our{" "}
              <Link to="/features" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                Features
              </Link>{" "}
              and{" "}
              <Link to="/docs" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                Documentation
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Inline dummy illustration (SVG) — no external assets required */
function NotFoundIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      role="img"
      aria-label="A magnifying glass searching the number 404"
    >
      <defs>
        <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="grad2" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Card background */}
      <rect x="20" y="20" width="360" height="260" rx="20" fill="#f8fafc" />
      {/* subtle grid */}
      <g opacity="0.15">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v${i}`} x1={56 + i * 30} y1="20" x2={56 + i * 30} y2="280" stroke="#cbd5e1" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="20" y1={56 + i * 30} x2="380" y2={56 + i * 30} stroke="#cbd5e1" strokeWidth="0.5" />
        ))}
      </g>

      {/* Decorative blobs */}
      <circle cx="330" cy="50" r="26" fill="url(#grad1)" opacity="0.25" />
      <circle cx="70" cy="260" r="22" fill="url(#grad2)" opacity="0.25" />

      {/* 404 text */}
      <g transform="translate(200, 200)">
        <text
          x="0"
          y="0"
          textAnchor="middle"
          fontSize="92"
          fontWeight="800"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="8"
          strokeLinejoin="round"
          style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" }}
        >
          404
        </text>
        <text
          x="0"
          y="0"
          textAnchor="middle"
          fontSize="92"
          fontWeight="800"
          fill="url(#grad1)"
          stroke="white"
          strokeWidth="2"
          style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" }}
        >
          404
        </text>
      </g>

      {/* Magnifying glass */}
      <g transform="translate(125, 110)" filter="url(#softShadow)">
        <circle cx="0" cy="0" r="52" fill="white" stroke="url(#grad1)" strokeWidth="6" />
        {/* not found slash */}
        <line x1="-28" y1="-8" x2="28" y2="8" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
        {/* handle */}
        <rect x="40" y="30" width="90" height="10" rx="5" fill="url(#grad2)" transform="rotate(35 40 30)" />
        <circle cx="0" cy="0" r="46" fill="none" stroke="#e2e8f0" strokeWidth="2" />
      </g>

      {/* sparkles */}
      <g opacity="0.6">
        <circle cx="315" cy="180" r="3" fill="#a78bfa" />
        <circle cx="285" cy="160" r="2" fill="#60a5fa" />
        <circle cx="300" cy="205" r="2.5" fill="#fb7185" />
      </g>
    </svg>
  );
}
