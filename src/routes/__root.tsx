import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LanguageProvider } from "../components/language-provider";
import { GlobalLoader } from "../components/global-loader";

const SITE_URL = "https://acrosstour.com";
const LOGO_URL = `${SITE_URL}/logos/across-tour-logo.png`;

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Across Tour DMC",
  alternateName: "Across Tour Moz",
  url: SITE_URL,
  logo: LOGO_URL,
  image: LOGO_URL,
  description:
    "Across Tour is a full-service Destination Management Company delivering corporate travel, transport, and holiday packages across Mozambique, Africa and beyond.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bairro da Sommerschield, Rua de Tchamba, N°204, 1° Andar",
    addressLocality: "Maputo",
    addressCountry: "MZ",
  },
  telephone: "+258844383501",
  email: "reservations@acrosstour.com",
  areaServed: {
    "@type": "Country",
    name: "Mozambique",
  },
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-accent px-5 py-2.5 text-base font-semibold text-accent-foreground transition hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-accent px-5 py-2.5 text-base font-semibold text-accent-foreground transition hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-border bg-background px-5 py-2.5 text-base font-semibold text-foreground transition hover:bg-muted"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Across Tour DMC — Leisure & Corporate Travel in Mozambique" },
      {
        name: "description",
        content:
          "Across Tour is a full-service Destination Management Company delivering corporate travel, transport, and holiday packages across Mozambique, Africa and beyond.",
      },
      { name: "author", content: "Across Tour DMC" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "Across Tour DMC" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:title", content: "Across Tour DMC — Exceptional Travel Experiences" },
      {
        property: "og:description",
        content:
          "Integrated travel and logistics solutions across Mozambique, Africa, and worldwide.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: LOGO_URL },
      { property: "og:image:width", content: "2000" },
      { property: "og:image:height", content: "2000" },
      { property: "og:image:alt", content: "Across Tour DMC logo" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Across Tour DMC — Exceptional Travel Experiences" },
      {
        name: "twitter:description",
        content: "Integrated travel and logistics solutions across Mozambique, Africa, and worldwide.",
      },
      { name: "twitter:image", content: LOGO_URL },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logos/across-tour-white.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/logos/across-tour-logo.png", type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: "/logos/across-tour-logo.png" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORGANIZATION_JSON_LD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => console.log("ServiceWorker registered successfully:", reg.scope))
          .catch((err) => console.warn("ServiceWorker registration failed:", err));
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <GlobalLoader />
        <Outlet />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
